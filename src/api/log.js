import request from "../utils/request"

// 日志分页
export function getLogList(data) {
    return request({
        url: '/log/getSystemLog',
        method: 'post',
        data
    })
}

