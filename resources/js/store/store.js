export default {
    state: {
        categoryData:[],
        postData:[],
    },
    getters: {
        categories(state){
            return state.categoryData;
        } ,
        posts(state){
            return state.postData;
        }
    },

    actions: {
            getCategories(context){
                axios.get("api/category")
                    .then((response) => {

                        context.commit('categories',response.data.categories)

                    })
                    .catch((error) => {
                        console.log(error);
                    });
            },
        getPosts(context){
            axios.get("api/posts")
                .then((response) => {

                    context.commit('posts',response.data.posts)

                })
                .catch((error) => {
                    console.log(error);
                });
        }
        },
    mutations: {
        categories(state,data){
            return state.categoryData=data;
        },
        posts(state,data){
            return state.postData=data;
        }
    },
};
