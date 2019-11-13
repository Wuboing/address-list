<template>
    <div class="user">
        <h1>个人信息</h1>
        <label>
            <span>姓名:</span>
            <input type="text" v-model="user" :class="{'class-input':isA}" :disabled="isB">
        </label>
        <label>
            <span>电话号码:</span>
            <input type="text" v-model="phone" :class="{'class-input':isA}" :disabled="isB">
        </label>
        <label>
            <span>密  码:</span>
            <input type="text" v-model="password" :class="{'class-input':isA}" :disabled="isB">
        </label>
        <button class="over" v-show="showbu===true" @click="revise">更改信息</button>
        <div v-show="showbu===false">
            <button class="yes" @click="yes">确定</button>
            <button class="no" @click="no">返回</button>
        </div>
    </div>
</template>

<script>
    import store from '../store'
    export default {
        name: "user",
        store,
        data(){
            return{
                isA: true,
                isB: true,
                user: '',
                phone: '',
                password: '',
                showbu: true,
                list: [],
                i: ''
            }
        },
        methods:{
            load() {
                const list = JSON.parse(localStorage.getItem("cmts") || '[]')
                this.list = list
                for(var i=0;i<this.list.length;i++){
                    if(sessionStorage.getItem('watchStorage') === this.list[i].user){
                        this.user = this.list[i].user
                        this.password = this.list[i].password
                        this.phone = this.list[i].phone
                        this.i = i
                    }
                }
                console.log(this.list[this.i].id)
            },
            // 修改用户信息
            revise(){
                // 修改CSS样式
                this.showbu = false
                this.isA = false
                this.isB = false

            },
            // 确定修改信息
            yes(){
                store.commit('add',{
                    id: this.i,
                    user: this.user,
                    phone: this.phone,
                    password: this.password
                })
                // 恢复CSS样式
                this.showbu = true
                this.isA = true
                this.isB = true
                this.$message.success('修改成功');
                this.resetSetItem('watchStorage', this.user);
            },
            // 取消修改信息
            no(){
                //for(var i=0;i<this.list.length;i++){
                  //  if(sessionStorage.getItem('watchStorage') === this.list[i].user){
                        this.user = this.list[this.i].user
                        this.password = this.list[this.i].password
                        this.phone = this.list[this.i].phone
                    //}
                //}
                // 恢复CSS样式
                this.showbu = true
                this.isA = true
                this.isB = true
                this.$message.info('取消修改');
            }
        },
        created() {
            this.load()
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
    .over{
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
    .yes{
        width: 140px;
        margin: 30px 10px 0 430px;
        height: 41px;
        line-height: 41px;
        background-color: #0f88eb;
        cursor: pointer;
        border: 0;
        color: #fff;
        border-radius: 3px;
        font-size: 15px;
    }
    .no{
        width: 140px;
        margin-top: 30px;
        height: 41px;
        line-height: 41px;
        background-color: #d5d5d5;
        cursor: pointer;
        border: 0;
        color: #fff;
        border-radius: 3px;
        font-size: 15px;
    }
    .class-input{
        background: #f7fafc;
        border: 1px solid #f7fafc;
        cursor: default;
    }
</style>
