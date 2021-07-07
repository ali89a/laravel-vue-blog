require("./bootstrap");

import Form from "vform";

window.Form = Form;

// ES6 Modules or TypeScript
import toastr from "toastr";
window.toastr = toastr;
import Swal from "sweetalert2";
window.Swal = Swal;
const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: toast => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
    }
});
window.Toast = Toast;

window.Vue = require("vue").default;
import VueRouter from "vue-router";
import Vuex from 'vuex'
Vue.use(Vuex)

import storeData from './store/store'
const store = new Vuex.Store(storeData);

Vue.use(VueRouter);
import { routes } from "./routes/routes";

const router = new VueRouter({
    routes,
    mode: "history"
});

Vue.component("home", require("./components/backend/Home.vue").default);

const app = new Vue({
    el: "#app",
    router,
    store
});
