import {
    Route, Switch, Redirect, matchPath,
    BrowserRouter as Router,
} from 'react-router-dom';
import React from 'react';

/**
 * 静态路由组件,可以根据静态路由配置渲染页面.
 * 组件基于 react-router-dom
 * 组件支持嵌套路由
 * 通过 childRoutes 来配置子页面的路由,当路由匹配到子页面的路由时父页面的组件会有children属性,父组件需要手动返回
 * children 才能渲染出子页面的组件.
 * 例如:
 * <pre>
 * // routes
 * [{
 *     path: '/A',
 *     breadcrumb: 'a',
 *     component: loadable(() => import('pages/A')),
 *     childRoutes: [
 *         {
 *             path: '/subOfA',
 *             breadcrumb: 'b',
 *             component: loadable(() => import('pages/B')),
 *             childRoutes: [{
 *                 path: '/subOfB',
 *                 breadcrumb: 'c',
 *                 component: loadable(() => import('pages/C'))
 *             }],
 *         },
 *     ],
 * }]
 *
 *  // A和B组件类似这样写
 * function A(props) {
 *     //...A组件逻辑
 *
 *      // 重要!!!
 *     // 渲染子组件
 *     if (props.children) {
 *         return props.children;
 *     }
 *
 *      return (
 *         <div>
 *         ...A组件UI
 *         </div>
 *     )
 * }
 * </pre>
 * @param {Array} props.routes 路由配置数组
 */
export default function StaticRoutes(props) {
    let { routes } = props;
    return (
        <Switch>
            {
                routes.map((route, ind) => {
                    if (route.redirect) {
                        return <Redirect from={route.from} to={route.to} key={ind}/>;
                    }
                    if (route.childRoutes) {
                        return <Route path={route.path} key={ind} render={(routeProps) => {
                            let Component = route.component;
                            let children = getChild(route, routeProps);
                            return <Component {...routeProps}>{children}</Component>;
                        }}/>;
                    }
                    return <Route {...route} key={ind}/>;
                })
            }
        </Switch>
    );
}

function getChild({ childRoutes }, routeProps) {
    if (!childRoutes) return null;
    let matchedChild;
    let matchedProps;
    let { match, location, history } = routeProps;
    for (let i = 0, l = childRoutes.length; i < l; i++) {
        let childRoute = childRoutes[i];
        let ret = matchPath(routeProps.location.pathname, {
            path: match.path + childRoute.path,
            exact: childRoute.exact,
            strict: childRoute.strict,
        });
        if (ret) {
            matchedChild = childRoute;
            matchedProps = ret;
        }
    }
    if (matchedChild) {
        let ChildComponent = matchedChild.component;
        let childRouteProps = {
            match: matchedProps,
            location,
            history,
        };
        let children = getChild(matchedChild, childRouteProps);
        return <ChildComponent {...childRouteProps}>{children}</ChildComponent>;
    }
    return null;
}
