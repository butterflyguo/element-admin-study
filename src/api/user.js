import request from '@/utils/request.js';

//登录
export const login = (params) =>{
    return request({
        url: '/user/login',
        methods: 'post',
        params
    })
}