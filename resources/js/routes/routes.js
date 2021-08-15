import home from '../components/backend/Home';
//category
import category from '../components/backend/category/index';
import addCategory from '../components/backend/category/create';
import editCategory from '../components/backend/category/edit';
//post
import post from '../components/backend/post/index';
import addPost from '../components/backend/post/create';
import editPost from '../components/backend/post/edit';
export const routes = [
    { path: "/home", component: home },
    { path: "/categories", component: category },
    { path: "/add-category", component: addCategory },
    { path: "/edit-category/:id", component: editCategory },
    { path: "/posts", component: post },
    { path: "/add-post", component: addPost },
    { path: "/edit-post/:id", component: editPost },
];
