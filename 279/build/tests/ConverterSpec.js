"use strict";
const React = require("react");
const Converter_1 = require("../components/Converter");
const jasmine = require("jasmine");
// var TestUtils = testUtils.addons.TestUtils;
var test = jasmine.addons.testUtils;
test.describe('Converter', () => {
    var component;
    var curs = ['MXN', 'USD', 'YEN'];
    component = test.renderIntoDocument(React.createElement(Converter_1.default, null));
    console.log("Component: ", component);
    test.it('Should display the currencies', () => {
        test.expect(component.childrenCount).toEqual(5);
    });
});
//# sourceMappingURL=ConverterSpec.js.map