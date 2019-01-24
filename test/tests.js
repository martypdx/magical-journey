import toUpperCase from '../src/quiz/to-title-case.js';
import htmlToDom from '../src/html-to-dom.js';

const test = QUnit.test;
const module = QUnit.module;

module('utility functions');

test('toUpperCase', function(assert) {
    assert.equal(toUpperCase('career'), 'Career');
});

test('htmlToDom', function(assert) {
    const html = '<div>Hello <span>World</span>!</div>';
    const dom = htmlToDom(html);
    assert.equal(dom.firstElementChild.outerHTML, html);
});