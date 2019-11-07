import React from 'react';
import singleSpaReact from 'single-spa-react';
import Chart from './root.component.js';

function domElementGetter() {
    return document.getElementById("chart")
}

export const chart = singleSpaReact({
    React,
    rootComponent: Chart,
    domElementGetter,
})