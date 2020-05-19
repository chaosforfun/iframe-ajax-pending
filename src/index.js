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

render(<ErrorBoundary />, root);
// 去掉ErrorBoundary也没事
// render(<App />, root);
