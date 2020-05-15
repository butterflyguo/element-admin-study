<template>
<div class="login-container">
    <el-form :model="loginForm" :rules="rules" ref="ruleForm" class="login-form">
        <div class="container-title">
            <h3>登录</h3>
        </div>
        <el-form-item prop="username">
            <el-input placeholder="账号" v-model.trim="loginForm.username" autocomplete="on">
                <i slot="prefix" class="el-input__icon el-icon-user-solid"></i>
            </el-input>
        </el-form-item>
        <el-form-item prop="password">
            <el-input placeholder="密码" :type="showPwd?'text':'password'" v-model.trim="loginForm.password" @keyup.enter.native="handleLogin" tabindex='2' autocomplete="on" ref="password">
                <span slot="prefix" class="iconfont " :class="showPwd?'iconlock_open_fill':'iconlock_fill'"></span>
                <span slot="suffix" class="iconfont " @click="changePwd" :class="showPwd?'iconeye':'iconeye_slash'"></span>
            </el-input>
        </el-form-item>
        <el-button type="primary" v-loading="loading" style="width:100%" @click.native.prevent="handleLogin">登录</el-button>
    </el-form>
    
</div>
</template>

<script>
export default {
    data() {
        var checkUsername = (rule, value, callback) => {
            if (!value) {
                return callback(new Error('用户名不能为空'));
            }
        };
        var checkPass = (rule, value, callback) => {
            const reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/;
            if (!value) {
                return callback((new Error('密码不能为空')));
            }
            setTimeout(() => {
                if (value.length >= 6) {
                    callback()
                } else {
                    //   callback((new Error('密码必须由8-16位的数字和字母组成')));
                    callback((new Error('密码不能小于6位')));
                }
            }, 100)
        }
        return {
            loginForm: {
                username: '',
                password: ''
            },
            showPwd: false,
            loading:false,
            rules: {
                username: [{
                    validator: checkUsername,
                    trigger: 'blur'
                }],
                password: [{
                    validator: checkPass,
                    trigger: 'blur'
                }]

            }
        }
    },
    methods:{
        changePwd(){
            this.showPwd = !this.showPwd;
            this.$nextTick(()=>{
                this.$refs.password.focus(); //输入框聚焦
            })
        },
        //登录
        handleLogin(){
            
        }
    }
}
</script>

<style lang="scss">
$bg: #2d3a4b;
$light_gray:#fff;
$cursor: #fff;

// @supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
//   .login-container .el-input input {
//     color: $cursor;
//   }
// }

.login-container {
    .el-input {
        display: inline-block;
        height: 47px;
        width: 100%;

        input {
            background: transparent;
            border: 0px;
            -webkit-appearance: none;//appearance: normal|icon|window|button|menu|field;appearance 属性允许您使元素看上去像标准的用户界面元素,所有主流浏览器都不支持 appearance 属性。
                                      //Firefox 支持替代的 -moz-appearance 属性。
                                     //Safari 和 Chrome 支持替代的 -webkit-appearance 属性。
            border-radius: 0px;
            padding: 12px 5px 12px 25px;
            color: $light_gray;
            height: 47px;
            caret-color: $cursor; //改变输入框插入光标的颜色，同时又不改变输入框里面的内容的颜色。

            &:-webkit-autofill { //https://www.cnblogs.com/qingfengliuyun092815/p/10412462.html
                box-shadow: 0 0 0px 1000px $bg inset !important;
                -webkit-text-fill-color: $cursor !important;
            }
        }
    }

    .el-form-item {
        border: 1px solid rgba(255, 255, 255, 0.1);
        background: rgba(0, 0, 0, 0.1);
        border-radius: 5px;
        color: #454545;
    }

    .el-input__prefix,
    .el-input__suffix {
        line-height: 47px;
    }
}
</style><style lang="scss" scoped>
$bg: #2d3a4b;
$light_gray:#fff;
$cursor: #fff;

.login-container {
    background-color: $bg;
    height: 100%;

    .login-form {
        width: 520px;
        padding-top: 160px;
        margin: 0 auto;
    }

    .container-title {
        width: 100%;
        height: 40px;
        color: #fff;
    }
}
</style>
