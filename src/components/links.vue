<template>
    <div class="links">
        <div class="content">
            <el-input type="search" placeholder="请输入搜索联系人"
                      prefix-icon="el-icon-search"  v-model="search">
            </el-input>
        </div>
        <p>共有{{total}}个联系人</p>
        <div class="radio">
            <el-radio-group v-model="radio">
                <el-radio label="全部"  @change="onradio(1)"></el-radio>
                <el-radio label="朋友" @change="onradio(2)"></el-radio>
                <el-radio label="亲人" @change="onradio(3)"></el-radio>
                <el-radio label="同学" @change="onradio(4)"></el-radio>
            </el-radio-group>
        </div>
        <div class="main-bor">
            <ul>
                <li v-for="(list,index) in newlist" :key="index">
                    <img src="../assets/img/userImg.png">
                    <input class="header-h1" type="text" v-model="list.name" :disabled="isC"
                           :class="{'change-header': index!==currentIndex}">
                    <input type="text" class="number" v-model="list.tel" :disabled="isC"
                           :class="{'change-number': index!==currentIndex}">
                    <icon :index="index" :items="items" @compent="getdata"></icon>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import store from '../store'
    import icon from './icno'
    export default {
        name: "links",
        store,
        components:{
            icon
        },
        data(){
            return{
                search: '',
                radio: '全部',
                items: [],
                newitem: [],
                iconOK: true,
                currentIndex: null,
                isC: true
            }
        },
        computed:{
            total(){
                return store.state.itmes.length
            },
            newlist(){
                return this.newitem.filter(value=>value.name.indexOf(this.search)!==-1)
            }
        },
        methods:{
            onradio(number){
                switch (number) {
                    case 1: this.newitem = this.items; break
                    case 2: this.newitem = this.items.filter((item)=>{return item.status==='朋友'});break
                    case 3: this.newitem = this.items.filter((item)=>{return item.status==='亲人'});break
                    case 4: this.newitem = this.items.filter((item)=>{return item.status==='同学'});break
                }
            },
            loading(){
                this.items = store.state.itmes
                this.newitem = this.items
            },
            getdata(value1,value2){
                this.isC = value1
                this.currentIndex = value2
            }
        },
        created() {
            this.loading()
        }
    }
</script>

<style scoped>
    .content{width: 600px;margin-left: 200px;margin-top: 80px;}
.links p{
    margin-left: 230px;font-size: 14px;font-weight: 400;color: #555555;}
    .radio{margin-left: 200px;}
    img{width: 100%;height: 100%;}
    ul li img{width: 50px;height: 50px;float: left;margin: 5px;}
    .main-bor{margin-left: 200px;margin-top: 20px;}
    .main-bor ul li{float: left;width: 230px;height: 60px;
        margin-right: 30px;border: 3px solid #f7fafc;margin-bottom: 30px;}
    .main-bor ul li:hover{border: 3px solid cornflowerblue;border-radius: 15px;}
    .main-bor ul{display: inline-block;width: 800px;}
    .main-bor ul li .header-h1{width: 105px;display: inline-block;margin-left: 8px;color: #555555;margin-top: 8px;}
    .main-bor ul li .number{width: 105px;font-size: 15px;display: inline-block;margin-left: 8px;color: #555555;}

    .change-header{background: #f7fafc;font-weight: 700;border: none;font-size: 18px;cursor: default;}
    .change-number{background: #f7fafc;border: none;cursor: default;}
</style>
