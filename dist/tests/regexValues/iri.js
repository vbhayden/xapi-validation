"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var itsInvalid_1 = require("../itsInvalid");
var itsValid_1 = require("../itsValid");
exports.default = (function (test) {
    itsInvalid_1.default('http', 'not an IRI', test);
    itsInvalid_1.default(10, 'not a String', test);
    itsValid_1.default('http://www.example.com', test);
    itsValid_1.default('http://fo-o.com/blah_blah_(wikipedia)#cite-1', test);
    itsValid_1.default('https://www.example.com/foo/?bar=b%20az&inga=42&quux', test);
    itsValid_1.default('http://userid:password@example.com:8080/', test);
    itsValid_1.default('http://userid:password@example.com/', test);
    itsValid_1.default('http://142.42.1.1:8080/', test);
    itsValid_1.default('http://foo.com/unicode_(✪)_in_parens', test);
    itsValid_1.default('http://foo.com/(something)?after=parens', test);
    itsValid_1.default('http://code.google.com/events/#&product=browser', test);
    itsValid_1.default('ftp://foo.bar/baz', test);
    itsValid_1.default('http://⌘➡例子.测试✪उदाहरण.परीकإختبار/䨹', test);
    itsValid_1.default('http://-.~_!$&\'()*+,;=:%40:80%2f::::::@example.com', test);
    itsValid_1.default('http://www.example.com/fgdfgd?sdfsdfsdf#fgdgdfg', test);
    itsValid_1.default('http://some.large.test.string.for.regex/some-large-string/string.html?largeString=largeString&someStrangeText=%D0%9F%D1%81%D0%B5%D0%B2%D0%B4%D0%BE%D1%82%D1%83%D0%B1%D0%B5%D1%80%D0%BA%D1%83%D0%BB%D0%B5%D0%B7', test);
    itsValid_1.default('https://some.strange.test/tests/very-strange-test-that-hangs-regex/test#test/test"', test);
    itsInvalid_1.default('ab=c://should.fail.com', 'not an IRI', test);
    itsInvalid_1.default('not.a.valid.iri.com/verb', 'not an IRI', test);
    itsValid_1.default('urn:071b8229-c909-5d6f-b250-8cbb6f36fda7:Test:Test_0', test);
    itsValid_1.default('urn:uuid:a4942cbb-aabf-526f-8f69-379f265416b5', test);
});
//# sourceMappingURL=iri.js.map