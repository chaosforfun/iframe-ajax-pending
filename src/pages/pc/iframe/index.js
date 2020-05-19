import React, { useState } from 'react';

export default function Iframe() {
    let [show, toggleShow] = useState(true);
    return (
        <div
            style={{ height: '100%' }}
        >
            < button onClick={() => toggleShow(!show)
            }
            > {show ? '关闭' : '打开'}
            </ button>
            {
                show
                && (
                    <iframe
                        src='/external/live/teacherResult?userType=0&lessonFrom=1&lessonId=43519&resourceId=63861&paperId=5de8b9c7e6f2b2e42042072b&liveId=6018&userId=73652862&orderNo=4571316319&productId=104264&testType=3'
                        width="100%"
                        height="100%"
                    >
                    </iframe>
                )
            }
        </div>
    );
}
