describe('angularjs homepage todo list', function() {
  it('should add a todo', function() {
    browser.get('http://localhost:8000');

    expect(element.all(by.tagName('p')).get(4).getText()).toBe('Hello, world!');
  });

  
});
