import BeforeRoute from 'components/BeforeRoute';
import loadable from '@loadable/component';

export default [
    {
        path: '/iframe',
        component: loadable(() => import('pages/pc/iframe')),
    },
    {
        path: '/external',
        component: BeforeRoute,
        childRoutes: [
            {
                path: '/live/teacherResult',
                component: loadable(() => import('pages/pc/TeacherResult')),
            },
        ],
    },
];
