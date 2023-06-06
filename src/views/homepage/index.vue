<template>
  <div class="homeback">
    欢迎您，{{ this.userName }}
  </div>
</template>

<script>
import { getUserInfo } from '@/api/user'

export default {
  data(){
    return{
      userName:''
    }
  },
  created(){
    // 初始化首页 用户信息
    this.init()
  },
  methods:{
    init(){
      getUserInfo().then(res => {
        // 存放到state状态管理中
        this.userName =  res.data.userName
      })
    }
  }
}
</script>

<style scoped>
  .homeback{
    padding: 0;
  }
</style>