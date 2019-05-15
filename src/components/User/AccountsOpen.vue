<template>
  <Container>
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
  </Container>
</template>

<script>
import Container from '../Login'
export default {
  components: {
    Container
  },
  name: 'AccountsOpen',
  data () {
    return {
      tableData: [{
        date: '1999-09-01',
        name: '王小虎',
        income: '234',
        pay: '3.2',
        memo: 10
      }, {
        date: '1999-09-01',
        name: '王小虎',
        income: '234',
        pay: '3.2',
        memo: 10
      }, {
        date: '1999-09-01',
        name: '王小虎',
        income: '234',
        pay: '3.2',
        memo: 10
      }, {
        date: '1999-09-01',
        name: '王小虎',
        income: '234',
        pay: '3.2',
        memo: 10
      }, {
        date: '1999-09-01',
        name: '王小虎',
        income: '234',
        pay: '3.2',
        memo: 10
      }, {
        date: '1999-09-01',
        name: '王小虎',
        income: '234',
        pay: '3.2',
        memo: 10
      }, {
        date: '1999-09-01',
        name: '王小虎',
        income: '234',
        pay: '3.2',
        memo: 10
      }, {
        date: '1999-09-01',
        name: '王小虎',
        income: '234',
        pay: '3.2',
        memo: 10
      }, {
        date: '1999-09-01',
        name: '王小虎',
        income: '234',
        pay: '3.2',
        memo: 10
      }, {
        date: '1999-09-01',
        name: '王小虎',
        income: '234',
        pay: '3.2',
        memo: 10
      }, {
        date: '1999-09-01',
        name: '王小虎',
        income: '234',
        pay: '3.2',
        memo: 10
      }, {
        date: '1999-09-01',
        name: '王小虎',
        income: '234',
        pay: '3.2',
        memo: 10
      }, {
        date: '1999-09-01',
        name: '王小虎',
        income: '234',
        pay: '3.2',
        memo: 10
      }]
    }
  },
  methods: {
    getSummaries (param) {
      const { columns, data } = param
      const sums = []
      columns.forEach((column, index) => {
        if (index === 0) {
          sums[index] = '总价'
          return
        }
        const values = data.map(item => Number(item[column.property]))
        if (!values.every(value => isNaN(value))) {
          sums[index] = values.reduce((prev, curr) => {
            const value = Number(curr)
            if (!isNaN(value)) {
              return prev + curr
            } else {
              return prev
            }
          }, 0)
          sums[index] += ' 元'
        } else {
          sums[index] = 'N/A'
        }
      })

      return sums
    }
  }
}
</script>

<style scoped>

</style>
