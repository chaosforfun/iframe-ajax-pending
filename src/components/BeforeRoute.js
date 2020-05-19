import React from 'react';
import { isMobile } from 'common/util';

const MOBILE_PATH = 'm';
export default function BeforeRoute(props) {
    let { children, location: { pathname }, history } = props;
    // let paths = pathname.split('/');
    // let secondPath = paths[2];
    // if (isMobile() && secondPath !== MOBILE_PATH) {
    //     paths.splice(2, 0, MOBILE_PATH);
    //     history.replace(paths.join('/'));
    //     return null;
    // }
    // if (!isMobile() && secondPath === MOBILE_PATH) {
    //     paths.splice(2, 1);
    //     history.replace(paths.join('/'));
    //     return null;
    // }
    return children;
}
