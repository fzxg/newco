<template>
  <Container>
    <el-form :model="formInline" class="demo-form-inline" size="mini">
      <el-form :inline="true" size="mini">
        <el-form-item label="姓名" size="mini">
          <el-input v-model="formInline.user" placeholder="审批人"></el-input>
        </el-form-item>
        <el-form-item label="身份证">
          <el-input v-model="formInline.user" placeholder="审批人"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-input v-model="formInline.user" placeholder="审批人"></el-input>
        </el-form-item>
        <el-form-item label="出生日期">
          <el-date-picker type="date" placeholder="选择日期" v-model="formInline.date"
                          style="width: 100%;"></el-date-picker>
        </el-form-item>
      </el-form>
      <el-form :inline="true" size="mini">
        <el-form-item label="民族" size="mini">
          <el-input v-model="formInline.user" placeholder="审批人"></el-input>
        </el-form-item>
        <el-form-item label="曾用名">
          <el-input v-model="formInline.user" placeholder="审批人"></el-input>
        </el-form-item>
        <el-form-item label="职业">
          <el-input v-model="formInline.user" placeholder="审批人"></el-input>
        </el-form-item>
        <el-form-item label="政治面貌">
          <el-date-picker type="date" placeholder="选择日期" v-model="formInline.date"
                          style="width: 100%;"></el-date-picker>
        </el-form-item>
        <el-form :inline="true" size="mini">
          <el-form-item label="户口籍贯" size="mini">
            <el-input v-model="formInline.user" placeholder="审批人"></el-input>
          </el-form-item>
          <el-form-item label="联系方式">
            <el-input v-model="formInline.user" placeholder="审批人"></el-input>
          </el-form-item>
        </el-form>
        <el-form :inline="true" size="mini">
          <el-form-item label="户号" size="mini">
            <el-input v-model="formInline.user" placeholder="审批人"></el-input>
          </el-form-item>
          <el-form-item label="户主关系">
            <el-input v-model="formInline.user" placeholder="审批人"></el-input>
          </el-form-item>
          <el-form-item label="户口性质">
            <el-input v-model="formInline.user" placeholder="审批人"></el-input>
          </el-form-item>
          <el-form-item label="婚姻">
            <el-date-picker type="date" placeholder="选择日期" v-model="formInline.date"
                            style="width: 100%;"></el-date-picker>
          </el-form-item>
          <el-form :inline="true" size="mini">
            <el-form-item label="宗教信仰" size="mini">
              <el-input v-model="formInline.user" placeholder="审批人"></el-input>
            </el-form-item>
            <el-form-item label="职业类别">
              <el-input v-model="formInline.user" placeholder="审批人"></el-input>
            </el-form-item>
          </el-form>
          <el-form :inline="true" size="mini">
            <el-form-item label="户籍所在">
              <el-input v-model="formInline.user" placeholder="审批人"></el-input>
            </el-form-item>
            <el-form-item label="现居住地">
              <el-input v-model="formInline.user" placeholder="审批人"></el-input>
            </el-form-item>
          </el-form>
          <el-form :inline="true" size="mini">
            <el-form-item label="户籍详址" size="mini">
              <el-input v-model="formInline.user" placeholder="审批人"></el-input>
            </el-form-item>
            <el-form-item label="现住详址">
              <el-input v-model="formInline.user" placeholder="审批人"></el-input>
            </el-form-item>
          </el-form>
        </el-form>
      </el-form>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>
  </Container>
</template>

<script>
import Container from '../Manage'

export default {
  components: {
    Container
  },
  name: 'WCWork',
  data () {
    return {
      formInline: {
        user: '',
        region: ''
      }
    }
  },
  methods: {
    onSubmit () {
      console.log('submit!')
    }
  }
}
</script>

<style scoped>

</style>
