<template>
  <div>
    <h1>Edit User</h1>
    <form @submit.prevent="updateUser">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>User name:</label>
            <input type="text" class="form-control" v-model="user.name">
          </div>
        </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label>User Email:</label>
              <input class="form-control" v-model="user.email">
            </div>
          </div>
        </div><br />
        <div class="form-group">
          <button class="btn btn-primary">Update</button>
        </div>
    </form>
  </div>
</template>

<script>
    export default {

      data() {
        return {
          user: {}
        }
      },
      beforeCreate(){
            if(!store.state.isLogged){
                this.$router.push({name: 'login'})
            }
        },
      created() {
        let uri = `http://localhost:8000/user/edit/${this.$route.params.id}`;
        let token = localStorage.token
        uri = uri.concat("?token=").concat(token)
        this.axios.get(uri).then((response) => {
            this.user = response.data;
        });
      },
      methods: {
        updateUser() {
          let uri = `http://localhost:8000/user/update/${this.$route.params.id}`;
          let token = localStorage.token
          uri = uri.concat("?token=").concat(token)
          this.axios.post(uri, this.user).then(() => {
            this.$router.push({name: 'users'});
          });
        }
      }
    }
</script>