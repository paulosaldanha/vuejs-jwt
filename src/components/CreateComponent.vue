<template>
  <div>
    <h1>Create A User</h1>
    <form @submit.prevent="addUser">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>User Name:</label>
            <input type="text" class="form-control" v-model="user.name">
          </div>
        </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label>User Email:</label>
              <input type="email" class="form-control" v-model="user.email">
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label>User Password:</label>
              <input type="password" class="form-control" v-model="user.password">
            </div>
          </div>
        </div>
        <br />
        <div class="form-group">
          <button class="btn btn-primary">Create</button>
        </div>
    </form>
  </div>
</template>

<script>
    export default {
        data(){
        return {
          user:{}
        }
    },
    methods: {
      addUser(){
        let uri = 'http://localhost:8000/user/create';
        let token = localStorage.token
        uri = uri.concat("?token=").concat(token)
        this.axios.post(uri, this.user).then(() => {
        this.$router.push({name: 'users'});
        });
      }
    }
  }
</script>