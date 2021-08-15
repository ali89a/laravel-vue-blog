<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-10">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">
                            Post
                        </h3>
                        <div class="float-right"><router-link to="/add-post">Add Post</router-link></div>

                    </div>
                    <!-- /.card-header -->
                    <div class="card-body p-0">
                        <table class="table table-sm">
                            <thead>
                            <tr>
                                <th style="width: 10px"><input type="checkbox"/></th>
                                <th style="width: 10px">#</th>
                                <th>Category</th>
                                <th>Title</th>
                                <th>Content</th>
                                <th>Image</th>
                                <th>Created By</th>
                                <th>Status</th>
                                <th style="width: 40px">Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="(post,index) in posts">
                                <td><input type="checkbox" :value="post.id" v-model="categoryIds"/></td>
                                <td>{{ ++index }}</td>
                                <td>{{ post.title }}</td>
                                <td>{{ post.category.name }}</td>
                                <td>{{ post.content }}</td>
                                <td><img :src="post.img" width="100"></td>
                                <td>{{ post.user.name }}</td>
                                <td>{{ post.status }}</td>
                                <td>
                                    <div class="btn-group" role="group" aria-label="Basic example">
                                        <router-link :to="`/edit-post/${post.slug}`" class="btn btn-sm btn-primary">Edit</router-link>

                                        <button type="button" class="btn btn-sm btn-danger" @click="removePost(post.id)">Delete</button>
                                    </div>
                                </td>
                            </tr>


                            </tbody>
                        </table>
                    </div>
                    <!-- /.card-body -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Post",
        data:function(){
            return{
                categoryIds:[]
            }
        },
        mounted() {
            this.$store.dispatch("getPosts");
        },
        computed:{
            posts(){
                return this.$store.getters.posts;
            }
        },
        methods:{
            removePost(id){
                Swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                }).then((result) => {
                    if (result.isConfirmed) {
                        axios.delete("api/posts/"+id)
                            .then((response) => {
                                console.log(response.data);
                                this.$store.dispatch("getPosts");
                            })
                            .catch((error) => {
                                console.log(error);
                            });
                    }
                });
            }
        }
    };
</script>

<style scoped>
</style>

