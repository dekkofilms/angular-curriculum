describe('angularjs homepage todo list', function() {

  beforeEach(function () {
    browser.get('http://localhost:8000');
  })

  it('should send and display the right name', function() {

    element(by.model('name')).sendKeys('Taylor');
    expect(element(by.tagName('h1')).getText()).toBe('My name is: Taylor');
  });

  it('should send and display the right name', function() {
    browser.get('http://localhost:8000');

    element.all(by.tagName('option')).get(4).click();
    expect(element(by.tagName('h3')).getText()).toBe('I love Dogs');
  });
});
