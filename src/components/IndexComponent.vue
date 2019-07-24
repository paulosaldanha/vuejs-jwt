<template>
  <div>
      <h1>Users</h1>
        <div class="row">
          <div class="col-md-10"></div>
          <div class="col-md-2">
            <router-link :to="{ name: 'create' }" class="btn btn-primary">Create User</router-link>
          </div>
        </div><br />

        <table class="table table-hover">
            <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
            </thead>
            <tbody>
                <tr v-for="user in users" :key="user.id">
                  <td>{{ user.name }}</td>
                  <td>{{ user.email }}</td>
                  <td><router-link :to="{name: 'edit', params: { id: user.id }}" class="btn btn-primary">Edit</router-link></td>
                  <td><button class="btn btn-danger" @click.prevent="deleteUser(user.id)">Delete</button></td>
                </tr>
            </tbody>
        </table>
  </div>
</template>

<script>
  import store from '@/store'
  export default {
      data() {
        return {
          users: []
        }
      },
      beforeCreate(){
            if(!store.state.isLogged){
                this.$router.push({name: 'login'})
            }
        },
      created() {
      let uri = 'http://localhost:8000/users?token=';
      let token = localStorage.token
      uri = uri.concat(token)
      console.log(uri)
      this.axios.get(uri).then(response => {
        this.users = response.data;
      });
    },
    methods:{
        deleteUser(id){
            console.log(id)
            let uri = `http://localhost:8000/user/delete/${id}`;
            let token = localStorage.token
            uri = uri.concat("?token=").concat(token)
            this.axios.delete(uri).then(response => {
            this.users.splice(this.users.indexOf(id), 1);
        });
        }
    }
  }
</script>