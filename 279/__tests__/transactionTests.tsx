import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { Transaction, TransactionProps } from '../src/components/Transaction';
import TransactionAction, { changeTransValues, clearTransValues } from '../src/actions/transaction';
import 'isomorphic-fetch';

var props: TransactionProps,
    component;
function buildDate() {
    var year, month, day, date = new Date(Date.now());
    year = date.getFullYear;
    month = date.getMonth;
    day = date.getDate;
    return year + '-' + month + '-' + day;
}
beforeAll(() => {
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
        <Transaction {...props} />
    );
    component = render.toJSON();
});

////////TESTS ON THE COMPONENT////////
test('Transaction exist', () => {
    expect(component).toBeDefined();
});
test("Save transaction and clear values", () => {
    var { transaction, clearValues } = props;
    var button = component.children[5];
    var buttonClick = button.props.onClick;
    buttonClick();
    expect(transaction).toBeCalled();
    expect(clearValues).toBeCalled();
});
test('Values get updates', () => {
    var { updateValues } = props,
        field = component.children[2].children[1];
    field.props.onChange({ target: { className: 'to', value: "MXN" } });
    expect(updateValues).toBeCalled();
});
test("Actions are received", () => {
    var { transaction } = props,
        amount = 3,
        cur = 17.50,
        concept = 'test',
        date = buildDate(),
        property = "amount";
    const transactionAction = {
        type: 'addTransaction',
        amount: amount,
        concept: concept,
        date: date,
        cur: cur
    };
    const changeValuesAction = {
        type: 'changeTransValues',
        property: property,
        value: amount
    }
    const clearValuesAction = {
        type: 'clearTransValues'
    }
    expect(TransactionAction(date, concept, amount, cur)).toEqual(transactionAction);
    expect(changeTransValues(property, amount)).toEqual(changeValuesAction);
    expect(clearTransValues()).toEqual(clearValuesAction);
});
