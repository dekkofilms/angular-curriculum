describe('unit 1.4', function() {

  beforeEach(function () {
    browser.get('http://localhost:8000');
  })

  it('change currency default from dollar to euro', function() {
    expect(element(by.tagName('h1')).getText()).toBe('€3.14');
  });

  it('change input text to all caps and lowercase', function() {

    element(by.model('name')).sendKeys('Joey');
    expect(element.all(by.tagName('h2')).get(0).getText()).toBe('Yelling: JOEY');
    expect(element.all(by.tagName('h2')).get(1).getText()).toBe('Whispering: joey');
  });

  it('dropdown menu to change the rounding of pi', function() {

    element.all(by.tagName('option')).get(3).click();
    expect(element.all(by.tagName('h2')).get(2).getText()).toBe('Here you go! The first 3 digits of pi!');
    expect(element.all(by.tagName('h2')).get(3).getText()).toBe('3.142');
  });

  it('tip calculator functioning', function() {

    element(by.model('calc')).sendKeys(123.45);
    element(by.cssContainingText('option', '15')).click();
    expect(element.all(by.tagName('h3')).get(0).getText()).toBe('Subtotal: $123.45');
    expect(element.all(by.tagName('h3')).get(1).getText()).toBe('Tip: $18.52');
  });

  it('madlib game', function() {

    element(by.model('boyname')).sendKeys('Jeffrey');
    element(by.model('adjective')).sendKeys('lame');
    element(by.model('pluralnoun1')).sendKeys('thighs');
    element(by.model('pluralnoun2')).sendKeys('tables');
    element(by.model('insectplural')).sendKeys('flies');
    element(by.model('pluralnoun3')).sendKeys('bricks');
    element(by.model('verbs')).sendKeys('ruffles');

    expect(element.all(by.tagName('h3')).get(2).getText()).toBe('I\'m in love with JEFFREY. He\'s so LAME! He has big flat THIGHS, and when our TABLES meet, I get FLIES in my stomach. I\'ve fallen for him like a ton of BRICKS, and he RUFFLES for me, too. But I think he\'s got another girlfriend. What should I do?');
  });

});
