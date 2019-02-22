export default {
    singular: true,
    routes:[
        {
            path: '/tabs',
            component: './tabs',
            routes: [{
                path: 'list',
                component: 'email',
            }]
        },
        {
            path: '/user',
            component: 'tree',
        }
    ],
    plugins: [
        ['umi-plugin-react',{
            antd: true,
            dva: true,
        }],
    ],

}
/*{
            path: '/',
            component: './index',
            routes: [
                {
                    path: '/',
                    component: 'tabs'
                },
                {
                    path: '/dashboard',
                    routes:[
                        { path: '/dashboard/analysis', component: 'Dashboard/Analysis' },
                        { path: '/dashboard/monitor', component: 'Dashboard/Monitor' },
                        { path: '/dashboard/workplace', component: 'Dashboard/Workplace' }
                    ]
                }
            ]
        },
        {
            path: '/user',
            component: 'tree',
        }


* {
            path: '/tabs',
            component: './tabs',
            routes: [{
                path: 'list',
                component: 'email',
            }]
        },
        {
            path: '/user',
            component: 'tree',
        }*/