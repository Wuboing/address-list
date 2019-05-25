<template>
    <div class="icon">
        <span class="change" @click="alter(index)" v-show="iconOK === true"><i class="el-icon-edit"></i></span>
        <span class="del" @click="del(index)" v-show="iconOK === true"><i class="el-icon-delete"></i></span>

        <span class="change" v-show="iconOK === false" @click="define(index)"><i class="el-icon-check"></i></span>
        <span class="del" v-show="iconOK === false" @click="revert"><i class="el-icon-close"></i></span>
    </div>
</template>

<script>
    export default {
        name: "icno",
        props: ['index','items'],
        data(){
            return{
                iconOK: true,
                currentIndex: null,
                isC: true
            }
        },
        methods:{
            // 修改
            alter(index){
                this.currentIndex=index
                this.isC = false
                this.iconOK = false
                this.compent()
            },
            // 确定
            revert(){
                this.currentIndex = null
                this.isC = true
                this.iconOK = true
                this.compent()
            },
            // 返回
            define(){
                this.currentIndex = null
                this.isC = true
                this.iconOK = true
                this.compent()
            },
            del(index){
                this.items.splice(index,1)
            },
            compent(){
                this.$emit('compent',this.isC,this.currentIndex)
            }
        }
    }
</script>

<style scoped>
    .change{color: #0f88eb;cursor: pointer;margin-right: 5px;}
    .del{color: red;cursor: pointer;}
    .icon{
        display: inline-block;
    }
</style>