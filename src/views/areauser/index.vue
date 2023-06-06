<template>
    <div class="app-contain">
        <div class="app-header">
            <el-button type="primary" size="small" @click="openDialog">新增</el-button>
        </div>
        <div class="app-content">
            <el-table :data="tableData" border style="width: 100%">
                <el-table-column prop="id" label="Id" width="180" />
                <el-table-column prop="userName" label="用户名称" width="180" />
                <el-table-column prop="carNo" label="车牌号码" width="180" />
                <el-table-column prop="tel" label="电话号码" width="180" />
                <el-table-column prop="areaId" label="所属区域" width="180" />
                <el-table-column prop="createTime" label="创建时间" width="180" />
                <el-table-column label="操作">
                    <template #default="scope">
                        <el-button type="primary" size="small" @click="editDialog(scope.row)">编辑</el-button>
                        <el-popconfirm title="确定要删除此信息吗？" @confirm="delArea(scope.row.id)" >
                            <template #reference>
                                <el-button type="danger" size="small">删除</el-button>
                            </template>
                        </el-popconfirm>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <el-pagination background layout="prev, pager, next" :total="total" @size-change="handleSizeChange"
            @current-change="handleCurrentChange" />
    </div>

    <el-dialog v-model="dialogFormVisible" :title="title" append-to-body size="small" width="30%" @close="resetData">
        <el-form :model="form">
            <el-form-item label="用户名称">
                <el-input v-model="form.userName" autocomplete="off" />
            </el-form-item>
            <el-form-item label="用户电话">
                <el-input v-model="form.tel" autocomplete="off" />
            </el-form-item>
            <el-form-item label="用户车牌">
                <el-input v-model="form.carNo" autocomplete="off" />
            </el-form-item>
            <el-form-item label="用户区域">
                <el-input v-model="form.areaId" autocomplete="off" />
            </el-form-item>
        </el-form>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取消</el-button>
                <el-button type="primary" @click="saveArea">
                    确定
                </el-button>
            </span>
        </template>
    </el-dialog>
</template>
  
<script>

import { getAreaUserList, delAreaUser, saveAreaUser } from '@/api/areauser'
import { ElNotification } from "element-plus";


export default {
    data() {
        return {
            title:'添加区域用户',
            tableData: [],
            total: 0,
            pageInfo: {
                pageNum: 0,
                size: 10
            },
            dialogFormVisible: false,
            form: {
                id: 0,
                userName: '',
                tel: '',
                carNo: '',
                areaId: 0
            }
        }
    },
    components: {
    },
    created() {
        // 初始化加载表格
        this.init()
    },
    methods: {
        init() {
            // 加载分页表格
            getAreaUserList(this.pageInfo).then(res => {
                this.tableData = res.data.content
                this.total = res.data.totalElements
            })
        },
        // 改变条数
        handleSizeChange(val) {
            console.log(`${val} items per page`)
            this.pageInfo.size = val
            this.init()
        },
        // 改变页数
        handleCurrentChange(val) {
            console.log(`${val} items per page`)
            this.pageInfo.pageNum = val - 1
            this.init()
        },
        // 重置表格
        resetData() {
            this.form.id = 0
            this.form.userName = ''
            this.form.tel = ''
            this.form.carNo = ''
            this.form.areaId = ''
        },
        openDialog(){
            this.dialogFormVisible = true
            this.title = '添加区域用户'
        },
        editDialog(row){
            this.dialogFormVisible = true
            this.title = '修改区域用户'
            this.form.id = row.id
            this.form.userName = row.userName
            this.form.tel = ''+row.tel
            this.form.carNo = row.carNo
            this.form.areaId = row.areaId
        },
        // 添加区域信息
        saveArea() {
            saveAreaUser(this.form).then(res => {
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
        delArea(id) {
            delAreaUser(id).then(res => {
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
  
<style scoped></style>