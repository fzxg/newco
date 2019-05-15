<template>
  <Container>
  </Container>
</template>
<script>
import Container from '../Manage'
export default {
  components: {
    Container
  },
  name: 'AccountsOpen',
  data () {
    return {
      tableData: [{
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
          { required: true, message: '名目', trigger: 'blur' },
          { min: 3, max: 10, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        inout: [
          { required: true, message: '选择收支', trigger: 'change' }
        ],
        date: [
          { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
        ],
        money: [
          { required: true, message: '请填写金额', trigger: 'blur' }
        ],
        memo: [
          { required: false, message: '请填写备注', trigger: 'blur' }
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
    },
    onSubmit () {
      console.log('submit!')
    }
  }
}
</script>

<style scoped>

</style>
