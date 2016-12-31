'use strict';

describe('my app', function () {
  it('should automatically redirect to /about when location hash/fragment is empty', function () {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch('/about');
  });

  describe('about', function () {
    beforeEach(function () {
      browser.get('index.html#!/about');
    });

    it('should render view1 when user navigates to /about', function () {
      expect(element.all(by.css('[ng-view] div')).first().getText())
        .toMatch(/About Me/);
    });
  });

  describe('experience', function () {
    beforeEach(function () {
      browser.get('index.html#!/experience');
    });

    it('should render experience when user navigates to /experience', function () {
      expect(element.all(by.css('[ng-view] div')).first().getText())
        .toMatch(/experience/);
    });
  });
});
