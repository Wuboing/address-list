<template>
    <div class="register">
        <form class="form">
            <label>
                <input type="text" placeholder="姓名"
                       v-model="name" @focus="focus =1" @blur="focus = 0">
                <span class="warn" v-show="focus==1||show==false">*姓名不能为空且只能由字母、数字、下划线组成</span>
            </label>
            <label>
                <input type="text" placeholder="手机号"
                       v-model="phone" @focus="focus=2" @blur="focus=0">
                <span class="warn" v-show="focus==2||show2==false">*手机号全为数字</span>
            </label>
            <label>
                <input type="password" placeholder="密码 (不少于6位)" autocomplete
                       v-model="password" @focus="focus=3" @blur="focus=0">
                <span class="warn" v-show="focus==3||show3==false">*密码不少于6位数</span>
            </label>
            <button @click.prevent="ok()">快速注册</button>
        </form>
    </div>
</template>

<script>
    import store from '../store'
    export default {
        name: "register",
        store,
        data(){
            return{
                name: '',
                phone: '',
                password: '',
                focus: 0,

                show: true,
                show2:true,
                show3:true
            }
        },
        methods:{
            ok (){
                this.show = (this.name ===''|| /\W/g.test(this.name)) ? false : true
                this.show2 = (!this.phone.length)? false : true
                this.show3 = (this.password.length<6)? false : true
                if(this.show&& this.show2&& this.show3){
                    store.commit('add',{
                        id: Date.now(),
                        user: this.name,
                        phone: this.phone,
                        password: this.password
                    })
                    console.log(store.state.username)
                    this.$Progress.start()
                    this.$router.push('/home/login')
                    this.$Progress.finish()
                }
            }
        }
    }
</script>

<style scoped>
    @import "../assets/css/login.css";
    .register{
        width: 994px;
        margin: 0 auto;
    }
</style>
