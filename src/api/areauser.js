import request from "../utils/request"

// 区域分页
export function getAreaUserList(data) {
    return request({
        url: '/areaUser/getAreaUserList',
        method: 'post',
        data
    })
}


// 添加区域
export function saveAreaUser(data) {
    return request({
        url: '/areaUser/saveAreaUser',
        method: 'post',
        data
    })
}

// 修改区域
export function editAreaUser(data) {
    return request({
        url: '/areaUser/editAreaUser',
        method: 'post',
        data
    })
}


// 删除区域
export function delAreaUser(id) {
    return request({
        url: '/areaUser/delAreaUser/' + id,
        method: 'delete'
    })
}

