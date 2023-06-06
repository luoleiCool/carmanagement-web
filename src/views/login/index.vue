<template>
    <div class="common-layout">
        <div class="box">
            <div class="box_title">
                <h1>车辆管理系统</h1>
            </div>
            <div class="box_form">
                <div  class="box_login">
                    <el-form :model="form" label-width="100px" >
                        <el-form-item label="用户名" class="box_item">
                            <el-input v-model="form.name" />
                        </el-form-item>
                        <el-form-item label="密码" class="box_item">
                            <el-input type="password" v-model="form.password" />
                        </el-form-item>
                        <el-form-item>
                            <el-button :loading="loading"  type="primary" @click="submitForm()">
                                登录
                            </el-button>
                        </el-form-item>
                    </el-form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { login} from '@/api/login'


export default {
    data() {
        return {
            form: {
                name: 'admin',
                password: '123456'
            },
            loading:false
        }
    },
    methods:{
        submitForm(){
            this.loading=true
            this.$message.success('登录成功！')
            // 发起请求
            login(this.form).then(res=>{
                const ms_user = {
                    permission:['/home','/login'],
                    name:'admin'
                }
                // 存cookie
                sessionStorage.setItem("ms_user",JSON.stringify(ms_user))
                sessionStorage.setItem("token",res.data)
                // 跳转
                this.$router.push('/')
            })

        }
    }
}
</script>

<style scoped>
.common-layout {
    background: url('@/assets/background/desola-lanre-ologun-zYgV-NGZtlA-unsplash.jpg');
    width: 100%;
    height: 100%;
    position: fixed;
    background-size: 100% 100%;
}

.box {
    min-width: 600px;
    min-height: 260px;
    background: rgba(255, 255, 255, 0.2);
    width: 30vw;
    height: 10vw;
    display: flex;
    align-items: center;
    flex-direction: column;
    left: 50%;
    top: 40%;
    position: absolute;
    transform: translate(-50%, -50%);
    border-radius: 25px;
    backdrop-filter: blur(10px);
}

.box_title{
    padding: 10px;
}

.box_form {
    width: 100%;
    height: 100%;
    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;
    display: flex;
    justify-content: center;
}

.box_login {
    width: 50%;
}

.box_item .el-form-item__label{
    color: black;
}


</style>