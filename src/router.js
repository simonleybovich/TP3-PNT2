import { createRouter, createWebHistory } from 'vue-router'
import Formulario from './components/Formulario.vue'
import Usuarios from './components/Usuarios.vue'

const routes = [
    {path: '/', component: Formulario},
    {path: '/src/components/Formulario.vue', component: Formulario},
    {path: '/src/components/Usuarios.vue', component: Usuarios},
    {path: '/:pathmatch(.*)*', component: Formulario},
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
})

export default router 