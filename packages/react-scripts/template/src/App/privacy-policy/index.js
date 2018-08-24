// @flow
import React from 'react';
import { Helmet } from 'react-helmet';

import MenuComponent from '../../components/menu';

import './index.css';

// TODO: replace with real policy

const DOMAIN_NAME = process.env.REACT_APP_DOMAIN_NAME ? process.env.REACT_APP_DOMAIN_NAME : '';

const PrivacyPolicy = () => (

  <div className="PrivacyPolicy max-width-container">
    <Helmet>
      <title>
        Privacy Policy
      </title>
      <meta name="description" content="Privacy Policy" />
      <meta property="og:title" content="Privacy Policy" />
      <meta property="og:description" content="Privacy Policy" />
      <meta property="og:url" content={`${DOMAIN_NAME}/privacy-policy`} />
      {/* TODO: add share image */}
    </Helmet>
    <MenuComponent inverted />
    <div className="policy-container">
      <h1>
        Privacy Policy
      </h1>
      <p>
        Cookies are small text files a website stores on your computer. We use cookies to analyse
        the performance of our site and when embedding videos from our YouTube channel. We don’t
        collect any information in order to identify you or serve you targeted ads. Below is a
        list of the cookies we use on this site.
      </p>
      <p>
        <a href="https://cookiesandyou.com/" target="_blank" rel="noopener noreferrer">
          Learn more about cookies
        </a>
      </p>
      <h2>
        Google Analytics
      </h2>
      <p>
        We use Google Analytics to collect aggregate anonymous statistics about how people use
        our website, for example the number of visits to a page. We never collect any personal
        information about our visitors. We also use the IP-anonymization feature where your
        IP-address is shortened and anonymised before it’s stored on Google&#39;s servers.
      </p>
      <h2>
        Contact us
      </h2>
      <p>
        If you have any questions or concerns, always feel free to contact us.
      </p>
    </div>
  </div>
);

export default PrivacyPolicy;
