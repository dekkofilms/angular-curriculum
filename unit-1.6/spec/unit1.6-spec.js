describe('unit 1.5', function() {

  beforeEach(function () {
    browser.get('http://localhost:8000');
  })

  it('should display my favorite color in the view', function() {
    expect(element.all(by.tagName('h2')).get(0).getText()).toEqual('Burnt Orange');
  });

  it('should display centuries in seconds in the view', function() {
    expect(element.all(by.tagName('h3')).get(0).getText()).toEqual('3,153,600,000');
  });

});
