import * as React from 'react';
import {render} from 'react-dom';
import AppWrapper from './container/AppWrapper/AppWrapper';

/**
 * element in HTML document for React SPA
 * @type {ReactElement}
 */
const rootElement = document.getElementById('app');

/**
 * React SPA
 * @type {ReactElement}
 */
const rootComponent = <AppWrapper />;

render(rootComponent, rootElement);
