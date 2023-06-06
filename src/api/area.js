import request from "../utils/request"

// 区域分页
export function getAreaList(data) {
    return request({
        url: '/area/getAreaList',
        method: 'post',
        data
    })
}


// 添加区域
export function saveArea(data) {
    return request({
        url: '/area/saveArea',
        method: 'post',
        data
    })
}

// 修改区域
export function editArea(data) {
    return request({
        url: '/area/editArea',
        method: 'post',
        data
    })
}


// 删除区域
export function delArea(id) {
    return request({
        url: '/area/delArea/' + id,
        method: 'delete'
    })
}

