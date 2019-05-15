<template>
  <Container>
    <el-table
      :data="tableData"
      height="100%"
      border
      style="width: 100%">
      <el-table-column
        label="照片"
        width="180">
        <template slot-scope="scope">
          <img :src="scope.row.date " height="160" width="160"/>
        </template>
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="80">
      </el-table-column>
      <el-table-column
        prop="address"
        label="信息">
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
  name: 'PartyMemberOpen',
  data () {
    return {
      tableData: [{
        date: require('@/assets/无标题.jpg'),
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: require('@/assets/无标题.jpg'),
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: require('@/assets/无标题.jpg'),
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: require('@/assets/无标题.jpg'),
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: require('@/assets/无标题.jpg'),
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: require('@/assets/无标题.jpg'),
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: require('@/assets/无标题.jpg'),
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: require('@/assets/无标题.jpg'),
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }]
    }
  }
}
</script>
<style scoped>
  .el-table th, .el-table tr {
    background-color: #FFF;
    height: 180px;
  }
  el-table labal{
    text-align: center;
  }
</style>
