import React from 'react'
import { configure, addDecorator } from '@storybook/react';
import { Provider } from 'react-redux';
import {
    Route, BrowserRouter as Router,
} from 'react-router-dom';
import store from 'model';
addDecorator(storyFn => <Provider store={store}><Router>{storyFn()}</Router></Provider>);
// automatically import all files ending in *.stories.js
configure(require.context('../src', true, /\.stories\.js$/), module);
