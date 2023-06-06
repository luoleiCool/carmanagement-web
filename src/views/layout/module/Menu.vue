<template>
  <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
      <el-radio-button :label="false">expand</el-radio-button>
      <el-radio-button :label="true">collapse</el-radio-button>
    </el-radio-group> -->
  <el-menu active-text-color="#ffd04b" background-color="#545c64" default-active="2" text-color="#fff"
    router height="100%">
    <MenuItem :menuList="menuList">
    </MenuItem>
  </el-menu>
</template>
  
<script>
import { ref } from 'vue'
import MenuItem from './MenuItem.vue';

export default {
  components: {
    MenuItem
  },
  data() {
    return {
      menuList: [
        {
          id: 1,
          parentid: '0',
          name: '主页',
          icon: 'HomeFilled',
          url: '/',
        },
        {
          id: 2,
          parentid: '0',
          name: '区域管理',
          icon: 'School',
          children: [
            {
              id: 3,
              parentid: '2',
              name: '信息管理',
              icon: '',
              url: '/areaManage',
            }, {
              id: 10,
              parentid: '2',
              name: '区域用户',
              icon: '',
              url: '/areaUserManage',
            }
          ]
        },
        {
          id: 8,
          parentid: '0',
          name: '车辆管理',
          icon: 'Van',
          children: [
            {
              id: 9,
              parentid: '8',
              name: '出入信息',
              icon: '',
              url: '/carManage',
            }
          ]
        },
        {
          id: 4,
          parentid: '0',
          name: '系统管理',
          icon: 'UserFilled',
          children: [
            {
              id: 5,
              parentid: '4',
              name: '用户管理',
              icon: '',
              url: '/userManage',
            },
            // {
            //   id: 6,
            //   parentid: '4',
            //   name: '权限管理',
            //   icon: '',
            //   url: '/perManage',
            // },
            {
              id: 7,
              parentid: '4',
              name: '日志管理',
              icon: '',
              url: '/logManage',
            },
          ]
        }
      ],
    }
  }
}
</script>
  
<style scoped>
.el-menu {
  height: 100%;
}
</style>
  