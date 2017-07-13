import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Container from '../src/components/Container';
import {Converter} from '../src/components/Converter';

////IMPORT DEPENDENCIES OF CONVERTER/////
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Reducers from '../src/reducers';
import Actions from '../src/actions';

let store = createStore(
    Reducers,
    applyMiddleware(
        thunk        
    )
);
store.dispatch(Actions.Update());
interface ConverterProps {
    convert: Function;
    updateValues: Function;
    clearValues: Function;
    convState: {
        from: string;
        amount: string;
        to: string;
        result: number;
    }
    curs: {
        currencyData: {
            rates: {
                [key: string]: number
            }
        },
        date: Date
    };
};

test('Add two numbers',()=>{
    expect((1+3)).toBe(4);
});
test('Converter exist',()=>{
    var component = renderer.create(
        <Converter></Converter>
    );
    var tree = component.toJSON();
    console.log(tree);
    expect(tree).toMatchSnapshot();
})