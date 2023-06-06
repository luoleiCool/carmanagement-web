import axios from 'axios'


export const request = axios.create({
    baseURL: 'http://127.0.0.1:8888/car',
    timeout: 5000, // 超时设置为5秒
    
});


request.interceptors.request.use(function (config) {
    // 在发送请求之前添加身份验证标头
    config.headers.token = `${sessionStorage.getItem('token')}`;
    config.headers.Username = sessionStorage.getItem('username');
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});


request.interceptors.response.use(function (response) {
    // 对响应数据做些什么
    const responseData = response.data;
    if (responseData.status !== 200) {
        const error = new Error(response.errorMsg || '请求失败');
        error.response = response;
        throw error;
    }
    return responseData;
}, function (error) {
    // 对响应错误做些什么
    return Promise.reject(error);
});

export default request;