import { init } from '@rematch/core';
import createLoadingPlugin from '@rematch/loading';

const loading = createLoadingPlugin({});
const store = init({
    models: {
        modelLiveTeacher: {
            state: {},
            effects: {
                async getTeacherReport(payload) {
                    await fetch('/api/live/teacher/report', payload);
                },
            },
        },
    },
    plugins: [loading],
});
export default store;
