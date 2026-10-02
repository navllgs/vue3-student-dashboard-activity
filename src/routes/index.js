import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '../views/DashboardView.vue'
import StudentsView from '../views/StudentsView.vue'
import StudentDetailView from '../views/StudentDetailView.vue'
import AboutView from '../views/AboutView.vue'

const routes = [
  { path: '/', component: DashboardView },
  { path: '/students', component: StudentsView },
  { path: '/students/:id', component: StudentDetailView },
  { path: '/about', component: AboutView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
