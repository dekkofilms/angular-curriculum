describe('unit 1.3', function() {

  beforeEach(function () {
    browser.get('http://localhost:8000');
  })

  it('booyah test', function() {
    expect(element(by.tagName('h1')).getText()).toBe('Booyah we did it');
  });

});
