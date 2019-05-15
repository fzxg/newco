<template>
  <Container>
  <el-table
    :data="tableData"
    border
    height="100%"
    style="width: 100%; margin-top: 20px">
    <el-table-column
      prop="date"
      label="日期"
      width="180">
    </el-table-column>
    <el-table-column
      label="题目">
      <template slot-scope="scope">
        <a :href="scope.row.links">{{scope.row.title}}</a>
      </template>
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
  name: 'HealthyOpen',
  data () {
    return {
      tableData: [{
        id: '12987122',
        title: '关于组织申报2019年课程建设项目的通知',
        links: 'https://www.baidu.com/'
      }, {
        id: '12987122',
        title: '关于组织申报2019年课程建设项目的通知',
        links: 'www.baidu.com'
      }, {
        id: '12987122',
        title: '关于组织申报2019年课程建设项目的通知',
        links: 'www.baidu.com'
      }, {
        id: '12987122',
        title: '关于组织申报2019年课程建设项目的通知',
        links: 'www.baidu.com'
      }, {
        id: '12987122',
        title: '关于组织申报2019年课程建设项目的通知',
        links: 'www.baidu.com'
      }, {
        id: '12987122',
        title: '关于组织申报2019年课程建设项目的通知',
        links: 'www.baidu.com'
      }]
    }
  }
}

</script>

<style scoped>
  a {
    text-decoration: none;
    background-color: transparent;
  }
  li {
    display: list-item;
    text-align: left;
  }
  .notify-item-time {
    position: absolute;
    right: 0;
    top: 0;
    color: #a5a8b3;
  }
  a:-webkit-any-link {
    cursor: pointer;
  }
  .notify-item {
    line-height: 40px;
    position: relative;
    padding-right: 80px;
    border-bottom: 1px dashed #DCDEE7;
    color: #565656;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .notify ul {
    list-style: none;
    padding-left: 0;
    margin: 0;
  }
</style>
