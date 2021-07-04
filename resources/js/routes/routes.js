import home from '../components/backend/Home';
import category from '../components/backend/category/index';
import addCategory from '../components/backend/category/create';
export const routes = [
    { path: "/home", component: home },
    { path: "/categories", component: category },
    { path: "/add-category", component: addCategory },

];
