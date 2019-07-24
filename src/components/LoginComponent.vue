<template>
    <div class="row justify-content-center">
        <form @submit.prevent="logar">
            <div class="row">
                <div class="col-md-12">
                    <div class="alert alert-danger alert-dismissible fade show" v-if="infoError">
                        <strong>Error!</strong> Login failed, please try again.
                        <button type="button" class="close" data-dismiss="alert">&times;</button>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <div class="form-group">
                        <label>Email:</label>
                        <input type="email" class="form-control" v-model="user.email" name="email">
                    </div>
                </div>    
            </div>
            <div class="row">
                <div class="col-md-12">
                    <div class="form-group">
                        <label>Senha:</label>
                        <input type="password" class="form-control" v-model="user.password" name="password">
                    </div>
                </div>
            </div>
            <br>
            <div class="row">
                <div class="col-md-12">
                    <div class="form-group">
                        <button class="btn btn-primary btn-large">Login</button>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>
<script>
    import store from '@/store'
    export default {
        data(){
            return{
                user:{},
                email: '',
                password: '',
                infoError: false,
            }
        },

        beforeCreate(){
            console.log(store);
            if(store.state.isLogged){
                this.$router.push({name: 'users'})
            }
        },
        methods:{
            logar(){
                this.infoError = false
                this.axios.post('http://localhost:8000/auth/login', this.user)
                    .then((response) => {
                        localStorage.setItem('token', response.data.token)
                        store.commit('LOGIN_USER')
                        this.$router.push({name: 'users'});
                    })
                    .catch((err) => {
                        this.infoError = true
                        this.password = ''
                        console.log(err)
                    })
                // this.$http.post('http://localhost:8000/auth/login', {
                //     email: this.email,
                //     password: this.password
                // }).then((response) => {
                //     localStorage.setItem('token', response.body.token)
                //     store.commit('LOGIN_USER')
                //     this.$router.push({name: 'users'});
                // }, () => {
                //     this.infoError = true
                //     this.password = ''
                // })
            }
        }
    }
</script>