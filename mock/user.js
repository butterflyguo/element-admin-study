const tokens = {
    admin: {
        token: 'admin-token'
    },
    editor: {
        tonen: 'editor-token'
    }
}
const users = {
    'admin-token': {
        roles:['admin'],
        introduction: '超级管理员',
        avtatar: '',
        name: '超级管理员'

    },
    'editor-token': {
        roles:['editor'],
        introduction: '普通用户',
        avtatar: '',
        name: '普通用户'
    }
}

export default [{
    url:'/user/login',
    type: 'post',
    response: config => {
        const { username } = config.body
        const token = tokens[username]
        if(!token) {
            code: 60204
            message: '账号和密码不正确'
        }
        return {
            code: 20000,
            data: token
        }
    }
}]