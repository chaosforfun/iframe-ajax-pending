import React from 'react';
import {
    Router,
} from 'react-router-dom';
import StaticRoutes from 'components/StaticRoutes';
import { hot } from 'react-hot-loader/root';
import { Provider } from 'react-redux';
import routes from 'routes';
import store from 'model';
import { createBrowserHistory } from 'history';


const history = createBrowserHistory();

// 生产环境可能是以子目录形式提供的服务,所以这里需要配置 basename
let basename = '';
const baseTag = document.getElementsByTagName('base')[0];
if (baseTag) basename = baseTag.getAttribute('href');

export default hot(() => {
    return (
        <Provider store={store}>
            <Router
                basename={basename}
                history={history}
            >
                <StaticRoutes routes={routes}/>
            </Router>
        </Provider>
    );
});
