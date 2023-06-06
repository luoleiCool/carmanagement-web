import { createRouter, createWebHashHistory } from "vue-router"
import LayOut from '@/views/layout/index.vue'
import Home from '@/views/homepage/index.vue'
import Login from '@/views/login/index.vue'
import Area from '@/views/area/index.vue'
import AreaUser from '@/views/areauser/index.vue'
import Car from '@/views/car/index.vue'
import User from '@/views/user/index.vue'
import Log from '@/views/log/index.vue'

// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。
const routes = [
  {
    path: '/',
    component: LayOut,
    meta: {
      title: '首页'
    },
    children: [{
      name: 'Home',
      path: '/',
      component: Home,
    }]
  },
  {
    path: '/',
    component: LayOut,
    meta: {
      title: '车辆管理'
    },
    children: [{
      name: 'Car',
      path: '/carManage',
      component: Car,
    }]
  },
  {
    path: '/',
    component: LayOut,
    meta: {
      title: '区域管理'
    },
    children: [{
      name: 'area',
      path: '/areaManage',
      component: Area,
    },
    {
      name: 'areaUser',
      path: '/areaUserManage',
      component: AreaUser,
    }
  ]
  },
  {
    path: '/',
    component: LayOut,
    meta: {
      title: '系统管理'
    },
    children: [{
      name: 'User',
      path: '/userManage',
      component: User,
    },
    {
      name: 'User',
      path: '/userManage',
      component: User,
    },
    {
      name: 'Log',
      path: '/logManage',
      component: Log,
    }
  ]
  },
  {
    name: 'Login',
    path: '/login',
    component: Login,
    meta: {
      title: '登录页'
    }
  },
]

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
})

export default router