import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '@/components/Login'
import NotebookList from '@/components/NotebookList'
import NoteDetail from '@/components/NoteDetail'
import Trash from '@/components/Trash'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/notebooks',
    name: 'NotebookList',
    component: NotebookList
  },
  {
    path: '/note/:noteId',
    name: 'NoteDetail',
    component: NoteDetail
  },
  {
  path: '/trash/:noteId',
    name: 'TrashDetail',
    component: Trash
  }
]

const router = new VueRouter({
  routes
})

export default router
