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
                  <th style="width: 10px">#</th>
                  <th>Name</th>
                  <th>Status</th>
                  <th style="width: 40px">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1.</td>
                  <td>Update software</td>
                  <td>Update software</td>
                  <td>
                      <div class="btn-group" role="group" aria-label="Basic example">
                          <button type="button" class="btn btn-secondary">Left</button>
                          <button type="button" class="btn btn-secondary">Middle</button>
                          <button type="button" class="btn btn-secondary">Right</button>
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
  name: "home",
  mounted() {
    console.log("Component mounted.");
  },
};
</script>

<style scoped>
</style>

