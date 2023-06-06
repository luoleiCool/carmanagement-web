import request from "../utils/request"

// 首页
export function login(data) {
    return request({
        url: '/login',
        method: 'post',
        data
    })
}

