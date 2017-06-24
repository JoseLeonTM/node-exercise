
import * as React from 'react';
import Converter from '../components/Converter';
// import * as testUtils from 'react-addons-test-utils';
import * as jasmine from 'jasmine';

// var TestUtils = testUtils.addons.TestUtils;

var test = jasmine.addons.testUtils;

test.describe('Converter', ()=>{
    var component;
    var curs = ['MXN','USD','YEN'];
    component = test.renderIntoDocument(<Converter currencies={curs}/>);
    test.it('Should display the currencies',()=>{
        test.expect(component.get)
    });
})