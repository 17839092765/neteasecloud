<template>
  <div class="ksong">
    <form action="/">
  <van-search
  v-if="showss"
    v-model="value"
    @input="oninput(value)"
    show-action
    placeholder="请输入搜索关键词"
    @search="onSearch"
    @cancel="onCancel"
  />
</form>
<ul v-if="ulshow" class="ullist"> 
  <li class="lilist" v-for="(item, index) in arreylist" :key="index"><van-icon name="search" size="0.3rem" />{{item.keyword}}</li>
</ul>
<div v-if="shows">
 <span class="tutu"><van-icon name="search" size="0.6rem" @click="onbtn" /></span> 
</div>
    
  </div>
</template>

<script>
import axios from "axios";
  export default {
    data() {
      return {
        value: '',
        showss:false,
        shows:true,
        arreylist:[],
        ulshow:false
        };
    },
    computed: {},
    watch: {},
    methods: {
      onSearch(val) {
      
    },
    onCancel() {    
      this.shows=true,
      this.showss=false,
      this.ulshow=false
      console.log(this.ulshow)
    },
    onbtn(){
      this.showss=true,
      this.shows=false
    },
    oninput(value){  
      console.log(value);
      this.ulshow=false
      this.arreylist=[] 
      let times =Date.now()
      console.log(times)
    this.$request.post("/search/suggest",{timestamp:times,keywords:value,type:"mobile"}).then(res=>{
        console.log(res.result.allMatch)
        const list =res.result.allMatch;
        this.ulshow=true
        this.arreylist = list
        
      })
    }
    },
    created() {},
    mounted() {},
    beforeCreate() {},
    beforeMount() {},
    beforeUpdate() {},
    updated() {},
    beforeDestroy() {},
    destroyed() {},
    activated() {},
    components: {},
   
  };
</script>

<style lang="scss" scoped>
.tutu{
  float: right;
  margin-top:0.2rem ;margin-right: 0.1rem;
}
.van-search{
 width: 100%;
  position: absolute;
  top: 0;left: 0;z-index: 30;
}
.ullist{
  position: absolute;
  top: 8%;left: 5%;
}
 .lilist{
  width: 3rem;
  height: 0.5rem;
  line-height: 0.5rem;
  .van-icon{
    margin-right: 0.2rem;
  }
}
</style>
