
import * as React from 'react';
import { render } from 'react-dom';
import {Router, Route, Switch} from 'react-router';


import Converter from 'components/Converter';

var currencies = ['MXN','USD','YEN'];

render(
    <Converter currencies={currencies}></Converter>
,document.getElementById('container'));

