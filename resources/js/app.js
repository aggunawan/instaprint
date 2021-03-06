/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('current-user-component', require('./components/CurrentUserComponent.vue').default);
Vue.component('recomendations-component', require('./components/RecomendationsComponent.vue').default);
Vue.component('employee-list-component', require('./components/EmployeeListComponent.vue').default);
Vue.component('current-employee-component', require('./components/CurrentEmployeeComponent.vue').default);
Vue.component('employee-dashboard-component', require('./components/EmployeeDashboardComponent.vue').default);
Vue.component('employee-attendance-rank-component', require('./components/EmployeeAttendanceRankComponent.vue').default);
Vue.component('employee-failure-rank-component', require('./components/EmployeeFailureRankComponent.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
});
