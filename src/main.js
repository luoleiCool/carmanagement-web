import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus  from 'element-plus'
import 'element-plus/dist/index.css'
import store from './state/store'

import './assets/main.css'


router.beforeEach((to, from, next) => {
    document.title = to.meta.title || '';
    // 这里先获取下用户信息，我偷懒用sessionStorage存了
    // 里面包含了用户权限，用户各种信息等
    const user = JSON.parse(sessionStorage.getItem('ms_user'));
    // 这里必须加上to.path !== 'login'的判断，不然会陷入无限循环，
    // 因为逻辑是第一次进来，判断用户信息不存在，即!user为true，由于使用的是next('/login')而非next()，
    // 会再次进入路由跳转，next()方法没有参数是直接进入页面，不会再次进入路由拦截，有参数则会，因为跳转，
    // 所以再次进入路由，再次判断，再次进入路由，再次判断，循环往复无限循环
    // 所以一定要加to.path !== 'login'的判断
    if (!user && to.path !== '/login') {
        next('/login');
    } else if (to.meta.permission) {
        user.permission === to.meta.permission ? next() : message.alert('没有权限');
    } else {
        next();
    }
});
 


const app = createApp(App)

app.use(router)
app.use(store)
app.use(ElementPlus)




app.mount('#app')