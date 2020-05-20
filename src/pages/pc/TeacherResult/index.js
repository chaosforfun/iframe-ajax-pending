/* eslint-disable import/first */
import React, { useEffect } from 'react';
import { getNormalAllQueryString } from 'common/util';

function TeacherResult({
    dispatch,
}) {
    console.log('component render', dispatch);
    // 神奇点: 方案1
    let params = getNormalAllQueryString();
    // 神奇点: 方案2
    // let params = getNormalAllQueryString();
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
// 神奇点: 方案1
import connect from 'common/connect';

export default connect(['modelLiveTeacher'], 'modelLiveTeacher')(TeacherResult);

// 神奇点: 方案2
// import { connect } from 'react-redux';

// export default connect(() => ({}), (dispatch) => {
//     return {
//         dispatch: {
//             getTeacherReport: dispatch.modelLiveTeacher.getTeacherReport,

//         },
//     };
// })(TeacherResult);
