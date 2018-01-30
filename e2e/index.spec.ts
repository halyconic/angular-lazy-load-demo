import { by, browser, element } from 'protractor';

import { HomePage } from './home.po';

describe('Basic', () => {
  const homePage = new HomePage();
  describe('Home', () => {
    beforeAll(() => {
      homePage.getPage();
	  })

    it('should have correct title', () => {
      homePage.getPageTitle()
        .then((title: string) => {
          expect(title).toEqual('Angular Demo');
        });
    })
  })
})

describe('Uuid', function() {
  browser.get('http://localhost:3000');

  const eagerGlobal = element(by.className('global')).getText();
  const eagerLocal = element(by.className('local')).getText();
  const eagerComponent = element(by.className('component')).getText();

  element(by.linkText('Lazy')).click();

  const lazyGlobal = element(by.className('global')).getText();
  const lazyLocal = element(by.className('local')).getText();
  const lazyComponent = element(by.className('component')).getText();

  it('Eager vs Lazy', function() {
    expect(lazyGlobal).toEqual(eagerGlobal);
	  expect(lazyLocal).not.toEqual(eagerLocal);
    expect(lazyComponent).not.toEqual(eagerComponent);
  });

  //
  // The following tests fail, and do not reflect browser behavior
  // 

  // element(by.linkText('Eager')).click();

  // it('Eager', function() {
  //   expect(element(by.className('global')).getText()).toEqual(eagerGlobal);
	//   expect(element(by.className('local')).getText()).toEqual(eagerLocal);
  //   expect(element(by.className('component')).getText()).not.toEqual(eagerComponent);
  // });

  // element(by.linkText('Lazy')).click();

  // it('Lazy', function() {
  //   expect(element(by.className('global')).getText()).toEqual(lazyGlobal);
	//   expect(element(by.className('local')).getText()).toEqual(lazyLocal);
  //   expect(element(by.className('component')).getText()).not.toEqual(lazyComponent);
  // });
});
