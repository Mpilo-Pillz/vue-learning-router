import Home from './components/Home.vue';
import Header from './components/Header.vue'
// import { resolve } from 'dns';

const User = resolve => {
    require.ensure(['./components/user/User.vue'], () => {
        resolve(require('./components/user/User.vue'));
    }, 'user');  
};

const UserStart = resolve => {
    require.ensure(['./components/user/UserStart.vue'], () => {
        resolve(require('./components/user/UserStart.vue'));
    }, 'user');  
};

const UserDetails = resolve => {
    require.ensure(['./components/user/UserDetail.vue'], () => {
        resolve(require('./components/user/UserDetail.vue'));
    }, 'user');  
};

const UserEdit = resolve => {
    require.ensure(['./components/user/UserEdit.vue'], () => {
        resolve(require('./components/user/UserEdit.vue'));
    }, 'user');  
};

export const routes = [
    // { path: '', component: Home, name: 'homePath' },
    { path: '', name: 'homePath', components: {
        default: Home,
        'header-top': Header
    } },
    { path: '/user', components: {
        default: User,
        'header-bottom': Header
    }, children: [
        { path: '', component: UserStart },
        { path: ':id', component: UserDetails, beforeEnter: (to, from, next) => {
           console.log('inside route set up');
           next();
        }},
        { path: ':id/edit', component: UserEdit, name: 'userEdit'}
    ] },
    { path: '/redirect-me', redirect: {name: 'home'}},
    { path: '*', redirect: '/'}
    // { path: '/redirect-me', redirect: '/user'}
    // { path: '/user', component: User, children: [
    //     { path: '', component: UserStart },
    //     { path: ':id', component: UserDetails},
    //     { path: ':id/edit', component: UserEdit, name: 'userEdit'}
    // ] }
    // { path: '/user', component: User }
    // { path: '/user/:id', component: User }
];


// import User from './components/user/User.vue';
// import UserStart from ''
// import UserDetails from ''
// import UserEdit from ''