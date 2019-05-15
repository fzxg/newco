<template>
  <Container>
    <div style="height: 85%">
      <div class="nav-content">
        <el-col :span="12">
          <el-tag style="width: 100%;height: 60px;font-size: large;padding-top: 5%">收发文件</el-tag>
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-menu-item index="1">
              <span slot="title" @click="isShow=1">发送文件</span>
            </el-menu-item>
            <el-menu-item index="2">
              <span slot="title" @click="isShow=2">收到的文件</span>
            </el-menu-item>
          </el-menu>
        </el-col>
      </div>
      <div class="main-content">
        <div class="doc-fasong" v-show="isShow==1" style="height: 100%"><!--发送文件-->
          <div style="margin-top: 15px;"><!--发送对象-->
            <el-input placeholder="请输入内容" v-model="input3" class="input-with-select">
              <el-select v-model="select" slot="prepend" placeholder="请选择" style="width: 130px;">
                <el-option label="输入内容" value="1"></el-option>
                <el-option label="B" value="2"></el-option>
                <el-option label="" value="3"></el-option>
              </el-select>
              <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
          </div>
          <quill-editor style=" text-align: left; height: 100%"
                        v-model="content"
                        ref="myQuillEditor"
                        :options="editorOption"
                        @blur="onEditorBlur($event)"
                        @focus="onEditorFocus($event)"
                        @change="onEditorChange($event)">
          </quill-editor><!--正文-->
        </div>
        <div class="doc-jieshou" v-show="isShow==2" style="height: 100%"><!--接收文件-->
          <div style="margin-top: 15px;">
            <el-table
              :data="tableData"
              style="width: 100%">
              <el-table-column
                label="状态"
                width="80">
                <template slot-scope="scope">
                  <span style="margin-left: 10px">{{ scope.row.dule }}</span>
                </template>
              </el-table-column>
              <el-table-column
                label="日期"
                width="150">
                <template slot-scope="scope">
                  <i class="el-icon-time"></i>
                  <span style="margin-left: 10px">{{ scope.row.date }}</span>
                </template>
              </el-table-column>
              <el-table-column
                label="来源"
                width="100">
                <template slot-scope="scope">
                  <span size="medium">{{ scope.row.region }}</span>
                </template>
              </el-table-column>
              <el-table-column
                label="题目"
                width="480">
                <template slot-scope="scope">
                  <span size="medium">{{ scope.row.title }}</span>
                </template>
              </el-table-column>
              <el-table-column
                label="操作">
                <template slot-scope="scope">
                  <el-button type="text" @click="open">查看</el-button>
                  <el-button
                    size="mini"
                    type="danger"
                    @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
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
  name: 'Document',
  data () {
    return {
      isShow: 1,
      input1: '',
      input2: '',
      input3: '',
      select: '',
      tableData: [{
        dule: '已读',
        date: '2016-05-02',
        title: '哈哈哈哈',
        region: '凤林村'
      }, {
        dule: '已读',
        date: '2016-05-02',
        title: '哈哈哈哈',
        region: '凤林村'
      }, {
        dule: '已读',
        date: '2016-05-02',
        title: '哈哈哈哈',
        region: '凤林村'
      }]
    }
  },
  methods: {
    handleDelete (index, row) {
      console.log(index, row)
    },
    open () {
      this.$alert('<strong>这是 <i>HTML</i> 片段</strong>', 'HTML 片段', {
        dangerouslyUseHTMLString: true
      })
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
