const $ = require('jquery');

const html = require('fs').readFileSync('./index.html').toString();

describe('Test for displayed text', function() {

  it('shows text after button click', function() {
    document.documentElement.innerHTML = html;

    expect($('#displayText').hasClass('hidden')).toBeTruthy();

    const showText = require('./js/index');
    showText();

    expect($('#displayText').hasClass('shown')).toBeTruthy();
  });
});