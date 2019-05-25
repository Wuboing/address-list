<template>

    <div class="user">
            <h1>添加信息</h1>
            <label>
                <span>姓名:</span>
                <input type="text" placeholder="请输入姓名" v-model="user">
            </label>
            <label>
                <span>电话号码:</span>
                <input type="text" placeholder="请输入电话号码" v-model="phone">
            </label>
            <label>
                <span>与我的关系:</span>
                <select v-model="option">
                    <option selected>朋友</option>
                    <option>亲人</option>
                    <option>同学</option>
                </select>
            </label>
            <button @click="add">添加</button>
    </div>
</template>

<script>
    import store from '../store'
    export default {
        name: "add",
        store,
        data(){
            return{
                user: '',
                phone: '',
                option: '朋友'
            }
        },
        methods:{
            add(){
                if(this.user !== '' && this.phone !== ''){
                    store.commit('totalall',{
                        name: this.user,
                        tel: this.phone,
                        status: this.option
                    })
                    this.user = ''
                    this.phone = ''
                    this.option = '朋友'
                }else {
                    this.$message({
                        center: true,
                        showClose: true,
                        message: '不能为空!!!',
                        type: 'error'
                    })
                }
            }
        }
    }
</script>

<style scoped>
    h1{
        text-align: center;
        padding-top: 50px;
    }
    label{
        text-align: left;
        padding-left: 347px;
        display: block;
        font-size: 15px;
        margin-bottom: 20px;
    }
    input{
        width: 300px;
        height: 42px;
        line-height: 42px;
        padding: 10px 8px 10px 8px;
        background-color: #fff;
        box-sizing: border-box;
        border: 1px solid #d5d5d5;
    }
    button{
        width: 300px;
        margin-top: 30px;
        height: 41px;
        margin-left: 430px;
        line-height: 41px;
        background-color: #0f88eb;
        cursor: pointer;
        border: 0;
        color: #fff;
        border-radius: 3px;
        font-size: 15px;
    }
    label span{
        display: inline-block;
        width: 87px;
    }
    select{
        width: 100px;
        height: 42px;
    }

</style>
