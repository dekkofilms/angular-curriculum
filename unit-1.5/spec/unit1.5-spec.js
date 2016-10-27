describe('unit 1.5', function() {

  beforeEach(function () {
    browser.get('http://localhost:8000');
  })

  it('should display an array in a list using ng-repeat', function() {
    expect(element.all(by.repeater('symbol in symbols')).count()).toEqual(4);
  });

  it('should display an array with duplicates in a list using ng-repeat', function() {
    expect(element.all(by.repeater('(id, num) in nums track by $index')).count()).toEqual(8);
  });

  it('valid password', function() {
    element(by.model('password')).sendKeys('booyah')
    expect(element(by.css('button')).isDisplayed()).toBe(true);
  });

  it('invalid password', function() {
    element(by.model('password')).sendKeys('booya')
    expect(element(by.css('button')).isDisplayed()).toBe(false);
  });

  it('valid password should be green', function() {
    element(by.model('password')).sendKeys('booyah')
    expect(element(by.tagName('h3')).getCssValue('color')).toBe('rgba(0, 128, 0, 1)');
  });

  it('invalid password should be red', function() {
    element(by.model('password')).sendKeys('booya')
    expect(element(by.tagName('h3')).getCssValue('color')).toBe('rgba(255, 0, 0, 1)');
  });

  it('properly sorted camera list by rating', function() {
    element.all(by.tagName('option')).get(1).click();
    expect(element.all(by.css('div h3')).get(0).getText()).toBe('Canon EOS 70D');
  });

  it('properly sorted camera list by price', function() {
    element.all(by.tagName('option')).get(2).click();
    expect(element.all(by.tagName('div h3')).get(0).getText()).toBe('Nikon D3100 DSLR');
  });


});
