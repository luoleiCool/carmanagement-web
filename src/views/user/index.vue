<template>
    <div class="app-contain">
        <div class="app-header">
            <el-button type="primary" size="small" @click="openDialog">新增</el-button>
        </div>
        <div class="app-content">
            <el-table :data="tableData" border style="width: 100%" >
                <el-table-column prop="id" label="Id" width="180" />
                <el-table-column prop="userName" label="用户名" width="180" />
                <el-table-column  label="操作"  >
                    <template #default="scope">
                        <el-button type="primary" size="small" @click="editDialog(scope.row)">编辑</el-button>
                        <el-popconfirm title="确定要删除此信息吗？" @confirm="delUser(scope.row.id)" >
                            <template #reference>
                                <el-button type="danger" size="small">删除</el-button>
                            </template>
                        </el-popconfirm>
                    </template>
                </el-table-column>
                <!-- <el-table-column prop="password" label="PassWord" /> -->
            </el-table>
        </div>
        <el-pagination background layout="prev, pager, next" :total="total" @size-change="handleSizeChange"
                @current-change="handleCurrentChange" />
                <el-dialog v-model="dialogFormVisible" :title="title" append-to-body size="small" width="30%" @close="resetData">
        <el-form :model="form">
            <el-form-item label="用户名称">
                <el-input v-model="form.userName" autocomplete="off" />
            </el-form-item>
            <el-form-item label="用户密码">
                <el-input v-model="form.password" autocomplete="off" />
            </el-form-item>
        </el-form>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取消</el-button>
                <el-button type="primary" @click="saveUser">
                    确定
                </el-button>
            </span>
        </template>
    </el-dialog>
    </div>
</template>
  
<script>

import { getUserList,saveUser,editUser,delUser } from '@/api/user'

export default {
    data() {
        return {
            tableData: [],
            total: 0,
            pageInfo: {
                pageNum: 0,
                size: 10
            },
            title:'',
            dialogFormVisible: false,
            form: {
                id: 0,
                userName: '',
                password: '',
            }
        }
    },
    created() {
        this.init()
    },
    methods: {
        init() {
            getUserList(this.pageInfo).then(res => {
                this.tableData = res.data.content
                this.total = res.data.totalElements
            })
        },
        handleSizeChange(val) {
            console.log(`${val} items per page`)
        },
        handleCurrentChange(val) {
            console.log(`${val} items per page`)
            this.pageInfo.pageNum = val - 1
            this.init()
        },
         // 重置表格
         resetData() {
            this.form.id = 0
            this.form.userName = ''
            this.form.password = ''
        },
        openDialog(){
            this.dialogFormVisible = true
            this.title = '添加用户'
        },
        editDialog(row){
            this.dialogFormVisible = true
            this.title = '修改用户'
            this.form.id = row.id
            this.form.userName = row.userName
            this.form.password = ''+row.password
        },
        // 添加区域信息
        saveUser() {
            saveUser(this.form).then(res => {
                this.init()
                this.dialogFormVisible = false
                this.resetData()
                ElNotification({
                    title: 'Success',
                    message: '执行成功',
                    type: 'success',
                })
            })
        },
        // 删除区域信息
        delUser(id) {
            delUser(id).then(res => {
                this.init()
                ElNotification({
                    title: 'Success',
                    message: '删除成功',
                    type: 'success',
                })
            })
        }
    }
}
</script>
  
<style scoped>


</style>