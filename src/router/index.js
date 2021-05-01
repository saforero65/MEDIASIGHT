import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
// import Login from '../views/Auth/Login.vue'
// import Register from '../views/Auth/Register.vue'
// import Dashboard from '../views/Dashboard.vue'
import Firebase from 'firebase'
import '../firebase/init'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: '/',
        component: () =>
            import ('../views/Home.vue')
    },
    // {
    //     path: '/home',
    //     name: 'home',
    //     component: () =>
    //         import ('../views/Home.vue')
    // },
    {
        path: '/login',
        name: 'login',
        component: () =>
            import ('../views/Auth/Login.vue')
    }, {
        path: '/dashboard',
        name: 'dashboard',
        component: () =>
            import ('../views/Dashboard.vue'),
        meta: {
            requiresAuth: true
        }
    }, {
        path: '/AgregarProject',
        name: 'AgregarProject',
        component: () =>
            import ('../components/layout/AgregarProject.vue'),
        meta: {
            requiresAuth: true
        }
    }, {
        path: '/AdministrarProyectos',
        name: 'AdministrarProyectos',
        component: () =>
            import ('../components/layout/AdministrarProyectos.vue'),
        meta: {
            requiresAuth: true
        }
    }, {
        path: '/AdministrarContenido',
        name: 'AdministrarContenido',
        component: () =>
            import ('../components/layout/AdministrarContenido.vue'),
        meta: {
            requiresAuth: true
        }
    },

]

const router = new VueRouter({
    routes
})
router.beforeEach((to, from, next) => {
    if (to.matched.some(ruta => ruta.meta.requiresAuth)) {
        const user = Firebase.auth().currentUser;
        if (user) {
            next();
        } else {
            next({
                name: 'login'
            })
        }
    } else {
        next();
    }
})
export default router