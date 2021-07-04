<template>

    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
    <div class="card card-info">
        <div class="card-header">
            <h3 class="card-title">Add Category</h3>
            <div class="float-right"><router-link to="/categories">Category</router-link></div>
        </div>
        <!-- /.card-header -->
        <!-- form start -->
        <form class="form-horizontal">
            <div class="card-body">
                <div class="form-group row">
                    <label for="name" class="col-sm-2 col-form-label">Name</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" id="name" placeholder="Enter name">
                    </div>
                </div>
            </div>
            <!-- /.card-body -->
            <div class="card-footer">
                <button type="submit" class="btn btn-info">Sign in</button>
                <button type="submit" class="btn btn-default float-right">Cancel</button>
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
        name: "create"
    }
</script>

<style scoped>

</style>
