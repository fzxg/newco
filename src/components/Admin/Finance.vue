<template>
  <Container>
    <div style="height: 70%">
      <div class="nav-content">
      <el-col :span="12">
        <el-tag style="width: 100%;height: 60px;font-size: large;padding-top: 5%">财务记账</el-tag>
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-menu-item index="1">
            <span slot="title" @click="isShow=1">查看记录</span>
          </el-menu-item>
          <el-menu-item index="2">
            <span slot="title" @click="isShow=2">添加记录</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      </div>
      <div class="main-content">
        <div class="fin-record" v-show="isShow==1" style="height: 100%"><!--查看记录-->
          <div style="margin-top: 15px;"></div><!---->
          <el-table
            :data="tableData"
            border
            height="100%"
            :summary-method="getSummaries"
            show-summary
            style="width: 100%; margin-top: 20px">
            <el-table-column
              prop="date"
              label="日期"
              width="180">
            </el-table-column>
            <el-table-column
              prop="name"
              label="名目">
            </el-table-column>
            <el-table-column
              prop="income"
              label="收入（元）">
            </el-table-column>
            <el-table-column
              prop="pay"
              label="支出（元）">
            </el-table-column>
            <el-table-column
              prop="memo"
              label="备注（元）">
            </el-table-column>
          </el-table>
        </div>
        <div class="fin-add" v-show="isShow==2" style="height: 100%"><!--添加纪录-->
          <div style="margin-top: 15px;">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" style="width: 70%" :show-message="false">
              <div>
              <el-form-item label="名目" style="width: 500px" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
              </el-form-item>
              <el-form-item label="收支" style="width: 300px;text-align: left" prop="inout">
                <el-select v-model="ruleForm.inout" placeholder="请选择支出或收入">
                  <el-option label="收入" value="income"></el-option>
                  <el-option label="支出" value="pay"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="时间" style="width: 500px" required>
                <el-col :span="11">
                  <el-form-item prop="date">
                    <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date" style="width: 100%;"></el-date-picker>
                  </el-form-item>
                </el-col>
              </el-form-item>
              <el-form-item label="金额" style="width: 300px" prop="money">
                <el-input v-model="ruleForm.money"></el-input>
              </el-form-item>
              <el-form-item label="备注" style="width: 500px" prop="memo">
                <el-input type="textarea" v-model="ruleForm.memo"></el-input>
              </el-form-item>
              </div>
              <el-form-item style="text-align: left">
                <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
              </el-form-item>
            </el-form>
          </div><!--收件箱-->
        </div>
      </div>
    </div>
  </Container>
</template>
<script>
import Container from '../Manage'
export default {
  components: {
    Container
  },
  name: 'Finance',
  data () {
    return {
      isShow: 1,
      tableData: [
        {
          date: '2016-05-02',
          name: '读书',
          income: '0',
          pay: '100',
          memo: '凤林村'
        }, {
          date: '2016-05-02',
          name: '读书',
          income: '0',
          pay: '100',
          memo: '凤林村'
        }, {
          date: '2016-05-02',
          name: '读书',
          income: '0',
          pay: '100',
          memo: '凤林村'
        }, {
          date: '2016-05-02',
          name: '读书',
          income: '0',
          pay: '100',
          memo: '凤林村'
        }, {
          date: '2016-05-02',
          name: '读书',
          income: '0',
          pay: '100',
          memo: '凤林村'
        }],
      ruleForm: {
        name: '',
        inout: '',
        date: '',
        money: '',
        memo: ''
      },
      rules: {
        name: [
          { required: true, trigger: 'blur' }
        ],
        inout: [
          { required: true, trigger: 'change' }
        ],
        date: [
          { type: 'date', required: true, trigger: 'change' }
        ],
        money: [
          { required: true, trigger: 'blur' }
        ],
        memo: [
          { required: false, trigger: 'blur' }
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
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style scoped>
  .nav-content{
    width: 40%;
  }
  .main-content{
    margin-left: 20%;
    padding-left: 20px;
    height: 70%;
  }
</style>
<style>
  .el-form-item {
    height: 50px;
  }
</style>
