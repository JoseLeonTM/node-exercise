import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { History, HistoryProps } from '../src/components/History';

import 'isomorphic-fetch';

var props: HistoryProps,
    component;

beforeAll(() => {
    function buildDate() {
        var year, month, day, date = new Date(Date.now());
        year = date.getFullYear;
        month = date.getMonth;
        day = date.getDate;
        return year + '-' + month + '-' + day;
    }
    props = {
        curs: {
            currencyData: {
                rates: {
                    "USD": 1
                }
            },
            date: buildDate()
        },
        histState: {
            cur: 'USD'
        },
        hist: [buildDate, 'test', 1],
        changeCur: jest.fn()
    }
    var render = renderer.create(
        <History {...props} />
    );
    component = render.toJSON();
});

////////TESTS ON THE COMPONENT////////
test('Converter exist', () => {
    expect(component).toBeDefined();
});
test("Change the seleted currency", () => {
    var { changeCur } = props,
        select = component.children[1].children[1];
    select.props.onChange({target:{value:"MXN"}});
    expect(changeCur).toBeCalled();
});
