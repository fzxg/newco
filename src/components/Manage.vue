<template>
  <el-container class="container">
    <el-header class="header" height="60px" style="background-color: #3E3E3E;color: #409EFF" >新农村管理系统</el-header><!--网页头部-->
    <el-container class="middle"><!--网页主体-->
      <el-main class="main" style="background-color: #FFFFFF"><!--右部-->
        <el-menu  class="el-menu-demo" mode="horizontal" style="height: 15%"><!--导航栏-->
          <el-submenu index="1">
            <template slot="title">村务公开</template>
            <el-menu-item index="2-1" @click="$router.push({name: 'Village'})">村情简介</el-menu-item>
            <el-menu-item index="2-2" @click="$router.push({name: 'Affairs'})">政务公开</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">日常办公</template>
            <el-menu-item index="2-1" @click="$router.push({name: 'Documents'})">收发文件</el-menu-item>
            <el-menu-item index="2-2" @click="$router.push({name: 'Finance'})">财务记账</el-menu-item>
            <el-menu-item index="2-3" @click="$router.push({name: 'Statistics'})">数据统计</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">人口管理</template>
            <el-menu-item index="2-1" @click="$router.push({name: 'PermanentPopulation'})">常住人口</el-menu-item>
            <el-menu-item index="2-2" @click="$router.push({name: 'TemporaryPopulations'})">暂住人口</el-menu-item>
            <el-menu-item index="2-3" @click="$router.push({name: 'BirthReg'})">出生登记</el-menu-item>
            <el-menu-item index="2-3" @click="$router.push({name: 'DeathReg'})">死亡登记</el-menu-item>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">党群展示</template>
            <el-menu-item index="2-1" @click="$router.push({name: 'PartyMember'})">党员信息</el-menu-item>
            <el-menu-item index="2-2" @click="$router.push({name: 'PartyMasses'})">党群工作</el-menu-item>
            <el-menu-item index="2-3" @click="$router.push({name: 'LeagueBranch'})">团支部工作</el-menu-item>
            <el-menu-item index="2-4" @click="$router.push({name: 'WCWork'})">妇代会工作</el-menu-item>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">资源管理</template>
            <el-menu-item index="2-1" @click="$router.push({name: 'ResidentialLand'})">居民用地</el-menu-item>
            <el-menu-item index="2-2" @click="$router.push({name: 'AgriculturalLand'})">农业用地</el-menu-item>
            <el-menu-item index="2-2" @click="$router.push({name: 'OtherLand'})">其他用地</el-menu-item>
          </el-submenu>
          <el-submenu index="6">
            <template slot="title">经营管理</template>
            <el-menu-item index="2-1" @click="$router.push({name: 'VillageEnterprises'})">村办企业</el-menu-item>
            <el-menu-item index="2-2" @click="$router.push({name: 'FarmerCooperation'})">农民合作</el-menu-item>
            <el-menu-item index="2-3" @click="$router.push({name: 'ContractManage'})">合同管理</el-menu-item>
          </el-submenu>
          <el-submenu index="7">
            <template slot="title">公共咨询</template>
            <el-menu-item index="2-1" @click="$router.push({name: 'Insurance'})">养老保险</el-menu-item>
            <el-menu-item index="2-2" @click="$router.push({name: 'MedicalService'})">合作医疗</el-menu-item>
            <el-menu-item index="2-3" @click="$router.push({name: 'MinGuarantee'})">最低保障</el-menu-item>
            <el-menu-item index="2-4" @click="$router.push({name: 'PovertyGuarantee'})">扶贫保障</el-menu-item>
            <el-menu-item index="2-5" @click="$router.push({name: 'OtherGuarantee'})">其他保障</el-menu-item>
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
  name: 'Manage',
  data () {
    return {
      isShow: 1
    }
  },

  methods: {
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
