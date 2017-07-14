import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { Transaction, TransactionProps } from '../src/components/Transaction';

import 'isomorphic-fetch';

var props: TransactionProps,
    component;

beforeAll(() => {
    function buildDate(){
        var year,month,day,date= new Date(Date.now());
        year = date.getFullYear;
        month = date.getMonth;
        day = date.getDate;
        return year+'-'+month+'-'+day;        
    }
    props = {
        transaction: jest.fn(),
        updateValues: jest.fn(),
        clearValues: jest.fn(),
        transState: {
            currency: "USD",
            amount: 1,
            concept: 'test',
            date: buildDate(),
        },
        curs: {
            currencyData: {
                rates: {}
            },
            date: new Date()
        }
    }
    var render = renderer.create(
        <Transaction {...props}/>
    );
    component = render.toJSON();
});

////////TESTS ON THE COMPONENT////////
test('Converter exist', () => {
    // var { transaction, updateValues } = props;
    expect(component).toBeDefined();
});
test("Save transaction and clear values", () => {
    var { transaction, clearValues } = props;
    var button = component.children[5];
    var buttonClick = button.props.onClick;
    button.props.onClick();
    expect(transaction).toBeCalled();
    expect(clearValues).toBeCalled();
});
