import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { Converter, ConverterProps } from '../src/components/Converter';

import 'isomorphic-fetch';

var props: ConverterProps,
    component;

beforeAll(() => {
    props = {
        convert: jest.fn(),
        updateValues: jest.fn(),        
        convState: {
            from: "USD",
            amount: "1",
            to: "MXN",
            result: 0
        },
        curs: {
            currencyData: {
                rates: {}
            },
            date: new Date()
        }
    }
    var render = renderer.create(
        <Converter {...props}></Converter>
    );
    component = render.toJSON();
});

////////TESTS ON THE COMPONENT////////
test('Converter exist', () => {
    var { convert, updateValues } = props;
    expect(component).toBeDefined();
});
test("Convert button", () => {
    var { convert } = props;
    var button = component.children[6];
    var buttonClick = button.props.onClick;    
    button.props.onClick();
    expect(convert).toBeCalled();
});
