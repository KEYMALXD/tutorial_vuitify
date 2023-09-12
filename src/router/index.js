import { createWebHistory, createRouter } from "vue-router";
import Compras from '../components/Compras_Com.vue'
import Ventas from '../components/Ventas_Com.vue'
import Usuarios from '../components/Usuarios_Com.vue'
import Crear from '../components/Crear_usuarios.vue'

const routes =[
    {
        path:"/Compras",
        name: "Compras",
        component: Compras,
    },
   {
        path:"/Ventas",
        name:"ventas",
        component: Ventas,
   },
   {
    path:"/Usuarios",
    name:"Usuarios",
    component: Usuarios,
},
{
    path:"/Crear",
    name:"Crear",
    component: Crear,
},
];

const router = createRouter({
    history: createWebHistory(),routes,
})
export default router;