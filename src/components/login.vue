<template>
    <div class="login">
        <form class="form">
            <label>
                <input type="text" placeholder="用户名" v-model="user">
            </label>
            <label>
                <input type="password" placeholder="密码" v-model="password" autocomplete>
            </label>
            <button :plain="true" @click.prevent="go()">登录</button>
        </form>
    </div>
</template>

<script>
    import store from '../store'
    export default {
        name: "login",
        data(){
            return{
                user: '',
                password: '',
                list:[]
            }
        },
        store,
        methods:{
            loadComments() {
                var list = JSON.parse(localStorage.getItem("cmts") || '[]')
                this.list = list
            },
            go(){
                if(this.user !== '' && this.password !== '') {
                    for (var i = 0; i < this.list.length; i++) {
                        if (this.user === this.list[i].user) {
                            if (this.user !== this.list[i].user) {
                                this.$message({
                                    center: true,
                                    showClose: true,
                                    message: '用户名错误!!!',
                                    type: 'error'
                                })
                            }else if( this.password !== this.list[i].password){
                                this.$message({
                                    center: true,
                                    showClose: true,
                                    message: '错误哦，密码错了!!!',
                                    type: 'error'
                                })
                            }else {
                                this.resetSetItem('watchStorage', this.user);
                                sessionStorage.setItem('token',100)
                                // this.$store.commit('changelogin', '100')
                                this.$Progress.start()
                                this.$router.push('/contacts/links')
                                this.$Progress.finish()
                            }
                        }
                    }
                }else {
                    this.$message({
                        center: true,
                        showClose: true,
                        message: '错误哦，输入不能为空!!!',
                        type: 'error'
                    });
                }
            }
        },
        created() {
            this.loadComments()
        }
    }
</script>

<style scoped>
    @import "../assets/css/login.css";
.login{
    width: 994px;
    margin: 0 auto;
}
</style>