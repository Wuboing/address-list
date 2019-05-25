import Vue from 'vue'
import Router from 'vue-router'

const app = () => import('./components/app');
const login = () => import('./components/login');
const register = () => import('./components/register');

const contacts = () => import('./components/contacts');
const links = () => import('./components/links');
const add = () => import('./components/add');
const user = () => import('./components/user');

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
      {
          path: '/',
          redirect: '/home/register'
      },
      {
          path: '/home',
          component: app,
          children: [
              {path: 'login',component: login,
                  meta: {
                      progress: {
                          func: [
                              {call: 'color', modifier: 'temp', argument: '#ffb000'},
                              {call: 'fail', modifier: 'temp', argument: '#6e0000'},
                              {call: 'location', modifier: 'temp', argument: 'top'},
                              {call: 'transition', modifier: 'temp', argument: {speed: '1.5s', opacity: '0.6s', termination: 400}}
                          ]
                      }
                  }},
              {path: 'register',component: register,
                  meta: {
                      progress: {
                          func: [
                              {call: 'color', modifier: 'temp', argument: '#ffb000'},
                              {call: 'fail', modifier: 'temp', argument: '#FFC0CB'},
                              {call: 'location', modifier: 'temp', argument: 'top'},
                              {call: 'transition', modifier: 'temp', argument: {speed: '1.5s', opacity: '0.6s', termination: 400}}
                          ]
                      }
                  }}
      ]
    },
      {
          path: '/contacts',
          redirect: '/contacts/links',
          component: contacts,
          children: [
              {
                  path: 'links',
                  meta: { login: true },
                  component: links
              },
              {
                  path: 'add',
                  meta: { login: true },
                  component: add
              },
              {
                  path: 'user',
                  meta: { login: true },
                  component: user
              }
          ]
      },
      {
          path: '**',   // 错误路由
          redirect: '/home'   //重定向
      }
  ],
    scrollBehavior (to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return {x: 0, y: 0}
        }
    }
})
