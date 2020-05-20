import '@babel/polyfill';
import 'react-hot-loader';
import React from 'react';
import { render } from 'react-dom';
import App from './app';

const root = document.getElementById('root');

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    // eslint-disable-next-line class-methods-use-this
    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    // eslint-disable-next-line class-methods-use-this
    render() {
        return (
            <App />
        );
    }
}
// 神奇点: 方案1
render(<ErrorBoundary />, root);
// 神奇点: 方案2
// render(<App />, root);
