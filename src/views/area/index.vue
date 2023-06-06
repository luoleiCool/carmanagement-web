<template>
    <div class="app-contain">
        <div class="app-header">
            <el-button type="primary" size="small" @click="openDialog">新增</el-button>
        </div>
        <div class="app-content">
            <el-table :data="tableData" border style="width: 100%">
                <el-table-column prop="id" label="Id" width="180" />
                <el-table-column prop="areaName" label="区域名称" width="180" />
                <el-table-column prop="areaType" label="区域类型" width="180">
                    <template #default="scope">
                        <el-tag v-if="scope.row.areaType === 1">校园</el-tag>
                        <el-tag v-else-if="scope.row.areaType === 2">办公园区</el-tag>
                        <el-tag v-else-if="scope.row.areaType === 3">小区</el-tag>
                    </template>
                </el-table-column>
                <el-table-column prop="areaAddress" label="区域地址" width="180" />
                <el-table-column prop="areaParkingNum" label="区域车位数量（个）" width="180" />
                <el-table-column prop="createTime" label="创建时间" width="180" />
                <el-table-column label="操作">
                    <template #default="scope">
                        <el-button type="primary" size="small" @click="editDialog(scope.row)">编辑</el-button>
                        <el-popconfirm title="确定要删除此信息吗？" @confirm="delArea(scope.row.id)">
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
            <el-form-item label="区域名称">
                <el-input v-model="form.areaName" autocomplete="off" />
            </el-form-item>
            <el-form-item label="区域类型">
                <el-select v-model="form.areaType" placeholder="请选择区域类型">
                    <el-option label="校园" value="1" />
                    <el-option label="办公园区" value="2" />
                    <el-option label="小区" value="3" />
                </el-select>
            </el-form-item>
            <el-form-item label="区域地址">
                <el-input v-model="form.areaAddress" autocomplete="off" />
            </el-form-item>
            <el-form-item label="车位数量">
                <el-input v-model="form.areaParkingNum" autocomplete="off" />
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

import { getAreaList, delArea, saveArea } from '@/api/area'
import { ElNotification } from "element-plus";


export default {
    data() {
        return {
            title:'新增区域',
            tableData: [],
            total: 0,
            pageInfo: {
                pageNum: 0,
                size: 10
            },
            dialogFormVisible: false,
            form: {
                id: 0,
                areaName: '',
                areaType: '',
                areaAddress: '',
                areaParkingNum: '',
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
            getAreaList(this.pageInfo).then(res => {
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
            this.form.areaName = ''
            this.form.areaType = ''
            this.form.areaAddress = ''
            this.form.areaParkingNum = ''
        },
        openDialog(){
            this.dialogFormVisible = true
            this.title = '添加区域'
        },
        editDialog(row){
            this.dialogFormVisible = true
            this.title = '修改区域'
            this.form.id = row.id
            this.form.areaName = row.areaName
            this.form.areaType = ''+row.areaType
            this.form.areaAddress = row.areaAddress
            this.form.areaParkingNum = row.areaParkingNum
        },
        // 添加区域信息
        saveArea() {
            saveArea(this.form).then(res => {
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
            delArea(id).then(res => {
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