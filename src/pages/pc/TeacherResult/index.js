/* eslint-disable import/first */
import React, { useEffect } from 'react';
import { getNormalAllQueryString } from 'common/util';

function TeacherResult({
    dispatch,
}) {
    console.log('component render', dispatch);
    // 这一行删掉就没事了
    let params = getNormalAllQueryString();
    let getTeacherResult = () => {
        // 用 GET 代替 rematch也没事
        // GET('/api/live/teacher/report');
        dispatch.getTeacherReport({});
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

import connect from 'common/connect';

export default connect(['modelLiveTeacher'], 'modelLiveTeacher')(TeacherResult);

// import { connect } from 'react-redux';

// export default connect(() => ({}), (dispatch) => {
//     return {
//         dispatch: {
//             getTeacherReport: dispatch.modelLiveTeacher.getTeacherReport,

//         },
//     };
// })(TeacherResult);
