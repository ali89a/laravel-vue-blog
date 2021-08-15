<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">
                Category
            </h3>
            <div class="float-right"><router-link to="/add-category">Add Category</router-link></div>

          </div>
          <!-- /.card-header -->
          <div class="card-body p-0">
            <table class="table table-sm">
              <thead>
                <tr>
                  <th style="width: 10px"><input type="checkbox" @click="checkAll" v-model="checkedAll" /></th>
                  <th style="width: 10px">#</th>
                  <th>Name</th>
                  <th>Slug</th>
                  <th>Status</th>
                  <th style="width: 40px">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(category,index) in categories">
                  <td><input type="checkbox" :value="category.id" v-model="checked"/></td>
                  <td>{{ ++index }}</td>
                  <td>{{ category.name }}</td>
                  <td>{{ category.slug }}</td>
                  <td>{{ category.status }}</td>
                  <td>
                      <div class="btn-group" role="group" aria-label="Basic example">
                          <router-link :to="`/edit-category/${category.slug}`" class="btn btn-sm btn-primary">Edit</router-link>

                          <button type="button" class="btn btn-sm btn-danger" @click="removeCategory(category.id)">Delete</button>
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
  name: "Category",
    data:function(){
        return{
            checked:[],
            checkedAll:false
        }
    },
  mounted() {
   this.$store.dispatch("getCategories");
  },
    computed:{
      categories(){
            return this.$store.getters.categories;
        }
    },
    methods:{
        checkAll(){
            console.log('test');
        },
            removeCategory(id){
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
                    axios.delete("api/category/"+id)
                        .then((response) => {
                            console.log(response.data);
                            this.$store.dispatch("getCategories");
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

