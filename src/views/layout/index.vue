<template>
  <div class="common-layout">
    <el-container>
      <el-aside class="aside">
        <Menu></Menu>
      </el-aside>
      <el-container>
        <el-header class="header">
          <div style="float: left;">
            <h1>校园车辆管理系统</h1>
          </div>
          <div style="float: right;">
            <el-avatar :src="avat" />
            <el-dropdown trigger="click" style="margin-top: 25px;">
                admin
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item @click="logOut">退出</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div>
        </el-header>
        <el-main>
          <router-view>
          </router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script >
import Menu from './module/Menu.vue'
import avat from '@/assets/03b0d39583f48206768a7534e55bcpng.png'

export default {
  components: {
    Menu
  },
  data(){
    return {
      avat:avat
    }
  },
  methods:{
    // logout
    logOut(){
      sessionStorage.removeItem('token')
      sessionStorage.removeItem('ms_user')

       // 跳转
       this.$router.push('/login')
    }
  }
}
</script>
<style scoped>
.common-layout {
  height: 100%;
}

.el-container {
  height: 100%;
}

.aside {
  width: 200px;
}

.header {
  width: 100%;
  border: 1px solid var(--el-border-color);
}
</style>