<template>
  <el-container class="container">
    <el-header class="header" height="60px" style="background-color: #3E3E3E;color: #409EFF" >新农村管理系统</el-header><!--网页头部-->
    <el-container class="middle"><!--网页主体-->
      <el-aside class="aside" style="background-color: #E4E7ED"><!--左部-->
        <div class="logo" style="padding-bottom: 20px;padding-top: 20px;"><img src="../assets/无标题.jpg" style="height:200px;width:200px;margin:10px;padding:10px;" alt="上海鲜花港 - 郁金香" /></div><!--logo-->
        <div class="login" style="padding-right: 20px;padding-bottom: 20px;padding-top: 20px;"><!--登陆框-->
        <el-form :model="loginForm" status-icon :rules="rules" ref="loginForm" label-width="50px "
                 class="demo-loginForm" style="padding-right: 20px;">
          <el-form-item label="账号" prop="account" >
            <el-input type="text" v-model="loginForm.account" autocomplete="off" minlength="6"
                      maxlength="12" clearable></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="loginForm.password" autocomplete="off" minlength="6"
                      maxlength="20" clearable show-password></el-input>
          </el-form-item>
          <el-form-item>
            <el-button style="margin-right: 30px" type="primary" @click="submitForm('loginForm')">提交</el-button>
            <el-button @click="logUp()">注册</el-button>
          </el-form-item>
        </el-form>
        </div>
      </el-aside>
      <el-main class="main" style="background-color: #FFFFFF"><!--右部-->
        <el-menu  class="el-menu-demo" mode="horizontal"><!--导航栏-->
          <el-submenu index="1">
            <template slot="title">村务公开</template>
            <el-menu-item index="2-1" @click="$router.push({name: 'VillageOpen'})">村情简介</el-menu-item>
            <el-menu-item index="2-2" @click="$router.push({name: 'AffairsOpen'})">政务公开</el-menu-item>
            <el-menu-item index="2-3" @click="$router.push({name: 'AccountsOpen'})">帐务公开</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">党群展示</template>
            <el-menu-item index="2-1" @click="$router.push({name: 'PartyMemberOpen'})">党员信息</el-menu-item>
            <el-menu-item index="2-2" @click="$router.push({name: 'PartyMassesOpen'})">党群工作</el-menu-item>
            <el-menu-item index="2-3" @click="$router.push({name: 'LeagueBranchOpen'})">团支部工作</el-menu-item>
            <el-menu-item index="2-4" @click="$router.push({name: 'WCWorkOpen'})">妇代会工作</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">公共咨询</template>
            <el-menu-item index="2-1" @click="$router.push({name: 'LifeGuideOpen'})">生活指南</el-menu-item>
            <el-menu-item index="2-2" @click="$router.push({name: 'RegulationsOpen'})">政策法规</el-menu-item>
            <el-menu-item index="2-3" @click="$router.push({name: 'DietOpen'})">饮食常识</el-menu-item>
            <el-menu-item index="2-4" @click="$router.push({name: 'HealthyOpen'})">健康广角</el-menu-item>
            <el-menu-item index="2-5" @click="$router.push({name: 'AgriculturalOpen'})">农业生产</el-menu-item>
          </el-submenu>
        </el-menu>
        <slot></slot>
      </el-main>
    </el-container>
    <el-footer class="footer" height="60px" style="background-color: #3E3E3E;color: #409EFF">赵智敏</el-footer><!--网页脚部-->
  </el-container>
</template>
<script>
export default {
  name: 'Login',
  data () {
    var validateaccount = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入账号'))
      } else {
        callback()
      }
    }

    var validatePassword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        callback()
      }
    }
    return {
      isShow: 1,
      loginForm: {
        account: '',
        password: ''
      },
      rules: {
        account: [
          {validator: validateaccount, trigger: 'blur'}
        ],
        password: [
          {validator: validatePassword, trigger: 'blur'}
        ]
      }
    }
  },

  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    logUp () {
      alert('logup!')
    }
  }
}

</script>

<style scoped>

  .header, .footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
    height: 20%;
  }

  .middle{
    width: 100%;
    height: 537px;
  }

  .aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    width: 400px;
    height: 100%;
  }

  .main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    /*line-height: 160px;*/
    height: 537px;
  }

</style>
<style>
  .logo{
    margin: 10px;
    padding:10px;
  }

</style>
