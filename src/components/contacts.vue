<template>
    <div>
        <div class="header">
            <div class="header-head">速 讯</div>
            <div class="welcome">
                <span>{{name}},你好</span>
                <div class="img">
                    <img src="../assets/img/contact.jpg">
                </div>
            </div>
        </div>
        <div class="main">
            <ul>
                <li><router-link to="/contacts/links"><i class="el-icon-phone-outline"></i>通 讯 录</router-link></li>
                <li><router-link to="/contacts/add"><i class="el-icon-folder-add"></i>添 加 信 息</router-link></li>
                <li><router-link to="/contacts/user"><i class="el-icon-user"></i>个 人 中 心</router-link></li>
            </ul>
        </div>
        <div class="out" @click="out()"><i class="el-icon-setting"></i>退出登录</div>
        <div class="right">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import store from '../store'
    export default {
        name: "contacts",
        store,
        data() {
            return{
                name: '',
            }
        },
        methods:{
            out() {
                sessionStorage.setItem('token',0)
                // this.$store.commit('changelogin', '0')
                this.$Progress.start()
                this.$router.push('/home/login')
                this.$Progress.finish()
            },
            getlist(){
                this.name = sessionStorage.getItem('watchStorage');
            }
        },
        created() {
            this.getlist()
            window.addEventListener('setItem', ()=> {
                this.name = sessionStorage.getItem('watchStorage');
            })
        }
    }
</script>

<style scoped>
    @import "../assets/css/contacts.css";
</style>
