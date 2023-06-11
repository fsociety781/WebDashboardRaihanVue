import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Profile from "../views/Profile.vue";
import Signup from "../views/Signup.vue";
import Signin from "../views/Signin.vue";
import DataTodo from "../views/DataTodo.vue";
import EditTodo from "../views/EditTodo.vue";

const routes = [
  {
    path: "/",
    name: "/",
    redirect: "/signin",
    children: [
      {
        path: "/dashboard",
        name: "Dashboard",
        component: Dashboard,
        meta: { auth: true },
      },
      {
        path: "/profile",
        name: "Profile",
        component: Profile,
        meta: { auth: true },
      },
      {
        path: "/signin",
        name: "Signin",
        component: Signin,
        meta: { auth: true },
      },
      {
        path: "/signup",
        name: "Signup",
        component: Signup,
        meta: { auth: true },
      },
      {
        path: "/datatodo",
        name: "Datatodo",
        component: DataTodo,
      },
      {
        path: "/datatodo/:id",
        name: "Edittodo",
        component: EditTodo,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkActiveClass: "active",
});

export default router;
