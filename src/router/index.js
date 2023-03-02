import {createRouter,createWebHistory} from 'vue-router'
import MyMainscreen from '../components/Mainscreen.vue'



const routes = [
  { path: '/', component: MyMainscreen }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
  })
  
  export default router
