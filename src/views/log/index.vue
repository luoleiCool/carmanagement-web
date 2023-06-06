<template>
    <div class="app-contain">
        <el-table :data="tableData" border style="width: 100%">
            <el-table-column prop="createTime" label="创建时间" width="180" />
            <el-table-column prop="description" label="说明" width="180" />
            <el-table-column prop="clazzName" label="类名" width="180" />
            <el-table-column prop="methodName" label="方法名" width="180" />
            <el-table-column prop="consumeTime" label="耗时（ms）" width="180" />
            <el-table-column prop="result" label="响应内容" />
        </el-table>
        <el-pagination background layout="prev, pager, next" :total="total" @size-change="handleSizeChange"
            @current-change="handleCurrentChange" />
    </div>
</template>
  
<script>

import { getLogList } from '@/api/log'

export default {
    data() {
        return {
            tableData: [
                {
                    date: '2016-05-03',
                    name: 'Tom',
                    address: 'No. 189, Grove St, Los Angeles',
                },
                {
                    date: '2016-05-02',
                    name: 'Tom',
                    address: 'No. 189, Grove St, Los Angeles',
                },
                {
                    date: '2016-05-04',
                    name: 'Tom',
                    address: 'No. 189, Grove St, Los Angeles',
                },
                {
                    date: '2016-05-01',
                    name: 'Tom',
                    address: 'No. 189, Grove St, Los Angeles',
                },
            ],
            total: 0,
            pageInfo: {
                pageNum: 0,
                size: 10
            }
        }
    },
    created() {
        this.init()
    },
    methods: {
        init() {
            getLogList(this.pageInfo).then(res => {
                this.tableData = res.data.content
                this.total = res.data.totalElements
            })
        },
        handleSizeChange(val) {
            console.log(`${val} items per page`)
        },
        handleCurrentChange(val) {
            console.log(`${val} items per page`)
            debugger
            this.pageInfo.pageNum = val - 1
            this.init()
        }
    }
}
</script>
  
<style scoped></style>