
import * as React from 'react';
import Converter from '../components/Converter';
import * as jasmine from 'jasmine';
import * as testUtils from 'react-addons-test-utils';

// var TestUtils = testUtils.addons.TestUtils;

var test = jasmine.addons.testUtils;

test.describe('Converter', ()=>{
    var component;
    var curs = ['MXN','USD','YEN'];
    component = test.renderIntoDocument(<Converter/>);
    console.log("Component: ",component);
    test.it('Should display the currencies',()=>{
        test.expect(component.childrenCount).toEqual(5);
    });
})
