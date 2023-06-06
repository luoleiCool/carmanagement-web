import request from "../utils/request"

// 获取用户信息
export function getUserInfo() {
    return request({
        url: '/user/loadUser',
        method: 'post'
    })
}

// 用户分页
export function getUserList(data) {
    return request({
        url: '/user/getSystemUser',
        method: 'post',
        data
    })
}


// 添加用户
export function saveUser(data) {
    return request({
        url: '/user/saveUser',
        method: 'post',
        data
    })
}

// 修改用户
export function editUser(data) {
    return request({
        url: '/user/editUser',
        method: 'post',
        data
    })
}


// 删除用户
export function delUser(id) {
    return request({
        url: '/user/delUser/' + id,
        method: 'delete'
    })
}
