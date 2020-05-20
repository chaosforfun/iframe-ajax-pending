/* eslint-disable import/first */
import React, { useEffect } from 'react';

function TeacherResult({
    dispatch,
}) {
    console.log('component render', dispatch);
    let getTeacherResult = () => {
        // 神奇点: 方案1
        dispatch.getTeacherReport({});
        // 神奇点: 方案2
        // fetch('/api/live/teacher/report');
    };
    useEffect(() => {
        getTeacherResult();
    }, []);
    return (
        <div>
            simple content
        </div>
    );
}

import { connect } from 'react-redux';

export default connect(() => {
    // 神奇点: 方案1
    // return {};
    // 神奇点: 方案2
    let res = { loading: {} };
    return res;
}, (dispatch) => {
    return {
        dispatch: {
            getTeacherReport: dispatch.modelLiveTeacher.getTeacherReport,

        },
    };
})(TeacherResult);
