import { writeFile } from 'fs';
import path from 'path';
import http from 'http';
import { render, launchChrome } from 'usus';
import mkdirp from 'mkdirp';
import rimraf from 'rimraf';
import Promise from 'bluebird';
import handler from 'serve-handler';
import { JSDOM } from 'jsdom';

import uris from './uris';

process.setMaxListeners(Infinity);

const baseUrl = 'http://localhost:5000';
const outputFolder = './out';

const renderAndSave = uri => new Promise((resolve, reject) => {
  console.log(`Rendering ${baseUrl}${uri}`);

  const parsedUri = path.parse(uri);

  mkdirp(`${outputFolder}${parsedUri.dir}`, (err) => {
    if (err) {
      console.log(err);
      reject(err);
    }
  });

  launchChrome().then((chrome) => {
    const rendered = render(`${baseUrl}${uri}`, {
      chromePort: chrome.port,
    });

    rendered.then((val) => {
      const fileToWrite = uri === '/' ? '/index.html' : `${uri}.html`;

      const dom = new JSDOM(val, {
        url: `_ADD_SITE_DOMAIN_HERE_${uri}`,
        contentType: 'text/html',
      });

      const styles = dom.window.document.head.getElementsByTagName('style');

      for (let i = styles.length - 1; i >= 0; i--) {
        dom.window.document.head.removeChild(styles[i]);
      }

      const scripts = dom.window.document.head.getElementsByTagName('script');

      for (let i = scripts.length - 1; i >= 0; i--) {
        dom.window.document.head.removeChild(scripts[i]);
      }

      const bodyElements = dom.window.document.body.childNodes;

      for (let i = bodyElements.length - 1; i >= 0; i--) {
        const currentElement = bodyElements[i];
        const { src, id } = currentElement;

        switch (currentElement.tagName) {
          case 'SCRIPT':
            if (!src.startsWith('_ADD_SITE_DOMAIN_HERE_/static/js/')) {
              dom.window.document.body.removeChild(currentElement);
            }
            break;
          case 'DIV':
            if (id !== 'root') {
              dom.window.document.body.removeChild(currentElement);
            }
            break;
          default:
            break;
        }
      }

      writeFile(`${outputFolder}${fileToWrite}`, dom.serialize(), (err) => {
        if (err) {
          console.log(err);
          reject(err);
        }

        console.log(`Saved to ${fileToWrite}.`);

        chrome.kill().then(() => resolve());
      });
    });
  }).catch((err) => {
    console.log(err);
    reject(err);
  });
});

rimraf(outputFolder, () => {
  console.log('Starting http server...\n');

  const server = http.createServer((request, response) => {
    handler(
      request,
      response, {
        public: '../build',
        rewrites: [
          {
            source: '**',
            destination: '/index.html',
          },
        ],
      },
    );
  });

  let sitemapContent = '';

  for (let i = 0; i < uris.length; i++) {
    sitemapContent += `_ADD_SITE_DOMAIN_HERE_${uris[i]}\n`;
  }

  mkdirp(outputFolder, (err) => {
    if (err) {
      console.log(err);
      return;
    }

    writeFile(`${outputFolder}/sitemap.txt`, sitemapContent, (e) => {
      if (e) {
        console.log(e);
      }
    });
  });

  server.listen(5000, () => {
    console.log('Http server is ready.\n');

    console.log('Rendering all routes...\n');

    Promise.map(uris, uri => renderAndSave(uri), { concurrency: 5 }).then(() => {
      console.log('\nRendering routes completed.');

      server.close(() => console.log('\nStopped https server.'));
    });
  });
});
