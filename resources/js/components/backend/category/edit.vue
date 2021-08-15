<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card card-info">
                    <div class="card-header">
                        <h3 class="card-title">Edit Category{{ this.$route.params.id}}</h3>
                        <div class="float-right">
                            <router-link to="/categories">Category</router-link>
                        </div>
                    </div>
                    <!-- /.card-header -->
                    <!-- form start -->
                    <form
                        @submit.prevent="updateCategory"
                        @keydown="form.onKeydown($event)"
                        class="form-horizontal"
                    >
                        <div class="card-body">
                            <div class="form-group row">
                                <label for="name" class="col-sm-2 col-form-label">Name</label>
                                <div class="col-sm-10">
                                    <input
                                        v-model="form.name"
                                        type="text"
                                        name="name"
                                        placeholder="name"
                                        class="form-control"
                                    />
                                    <div
                                        v-if="form.errors.has('name')"
                                        v-html="form.errors.get('name')"
                                    />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="status" class="col-sm-2 col-form-label"
                                >Status</label
                                >
                                <div class="col-sm-10">
                                    <div class="form-check form-check-inline">
                                        <input
                                            class="form-check-input"
                                            type="radio"
                                            name="status"
                                            v-model="form.status"
                                            id="inlineRadio1"
                                            value="1"
                                        />
                                        <label class="form-check-label" for="inlineRadio1"
                                        >Active</label
                                        >
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input
                                            class="form-check-input"
                                            type="radio"
                                            v-model="form.status"
                                            name="status"
                                            id="inlineRadio2"
                                            value="0"
                                        />
                                        <label class="form-check-label" for="inlineRadio2"
                                        >Inactive</label
                                        >
                                    </div>

                                    <div
                                        v-if="form.errors.has('status')"
                                        v-html="form.errors.get('status')"
                                    />
                                </div>
                            </div>
                        </div>
                        <!-- /.card-body -->
                        <div class="card-footer">
                            <button type="submit" :disabled="form.busy" class="btn btn-info">
                                Sign in
                            </button>
                            <button type="reset" class="btn btn-default float-right">
                                Cancel
                            </button>
                        </div>
                        <!-- /.card-footer -->
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "edit",
        data: () => ({
            form: new Form({
                id: "",
                name: "",
                status: "",
            }),
        }),

        methods: {
            updateCategory() {

                let vm=this;
                vm.form.post("/api/update-category").then((response)=>{
                  vm.$router.push("/categories")
                    toastr.success('successfully added');

                }).catch(()=>{

                })

            },
            getCategory() {
                let vm=this;
              axios.get("/api/get-category/"+this.$route.params.id).then((response)=>{
                    vm.form.fill(response.data.category);
              }).catch(()=>{

              })
            },
        },
        beforeMount() {
            this.getCategory();
        }
    }
</script>

<style scoped>

</style>
