import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { Converter, ConverterProps } from '../src/components/Converter';
import Convert, { changeConvValues, clearConvValues } from '../src/actions/convert';
import 'isomorphic-fetch';

var props: ConverterProps,
    component,
    button,
    buttonClick;

//////INITIALIZE THE MOCK VALUES//////
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
    button = component.children[6];
    buttonClick = button.props.onClick;
});

////////TESTS ON THE COMPONENT////////
test('Converter exist', () => {
    var { convert, updateValues } = props;
    expect(component).toBeDefined();
});
test("Button will convert ", () => {
    var { convert } = props;
    buttonClick();    
    expect(convert).toBeCalled();
});
test('Values get updates',()=>{
    var {updateValues} = props,
    field = component.children[2].children[1];
    field.props.onChange({target:{className:'to',value:"MXN"}});    
    expect(updateValues).toBeCalled();
});
test('Actions are received', () => {
    var { convert } = props,
        from = 1,
        amount = 3,
        to = 17.50,
        property = "from";
    const convertAction = {
        type: 'result',
        from: from,
        amount: amount,
        to: to
    }
    const changeValuesAction = {
        type : 'changeConvValues',
        property : property,
        value : from
    }
    const clearValuesAction ={
        type : 'clearConvValues'
    }
    expect(Convert(from,amount,to)).toEqual(convertAction);
    expect(changeConvValues(property,from)).toEqual(changeValuesAction);
    expect(clearConvValues()).toEqual(clearValuesAction);
});