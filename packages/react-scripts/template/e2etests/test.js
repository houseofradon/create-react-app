/* global describe, it, browser */

const { expect } = require('chai');

describe('React App', () => {
  it('Should load with the right title', () => {
    browser.url('http://localhost:3000/');
    const actualTitle = browser.getTitle();

    expect(actualTitle).to.eql('React App');
  });
});
