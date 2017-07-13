import * as React from 'react';
import renderer from 'react-test-renderer';
import Converter from '../src/components/Converter';

test('Converter exist',()=>{
    var component = renderer.create(
        <Converter></Converter>
    );
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
})