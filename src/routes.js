import User from './components/user/User.vue';
import UserStart from './components/user/UserStart.vue'
import UserDetails from './components/user/UserDetail.vue'
import UserEdit from './components/user/UserEdit.vue'
import Home from './components/Home.vue';

export const routes = [
    { path: '', component: Home, name: 'homePath' },
    { path: '/user', component: User, children: [
        { path: '', component: UserStart },
        { path: ':id', component: UserDetails},
        { path: ':id/edit', component: UserEdit, name: 'userEdit'}
    ] }
    // { path: '/user', component: User }
    // { path: '/user/:id', component: User }
];