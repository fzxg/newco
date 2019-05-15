<template>
  <Container>
    <div style="height: 85%">
    <div class="nav-content">
      <el-col :span="12">
        <el-tag style="width: 100%;height: 60px;font-size: large;padding-top: 5%">村情简介</el-tag>
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-menu-item index="1">
            <span slot="title" @click="isShow=1">更改图片</span>
          </el-menu-item>
          <el-menu-item index="2">
            <span slot="title" @click="isShow=2">更改描述</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </div>
    <div class="main-content">
      <div class="vill-pictrue" v-show="isShow==1" style="height: 100%"><!--更改图片-->
        <el-upload style="margin-top: 15px;"
          action="https://jsonplaceholder.typicode.com/posts/"
          list-type="picture-card"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove">
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
      </div>
      <div class="vill-con" v-show="isShow==2" style="height: 100%"><!--更改描述-->
        <div style="margin-top: 15px;"></div>
      <quill-editor style=" text-align: left; height: 100%"
        v-model="content"
        ref="myQuillEditor"
        :options="editorOption"
        @blur="onEditorBlur($event)"
        @focus="onEditorFocus($event)"
        @change="onEditorChange($event)">
      </quill-editor>
        </div>
      </div>
    </div>
  </Container>
</template>

<script>import Container from '../Manage'
export default {
  components: {
    Container
  },
  name: 'Village',
  data () {
    return {
      isShow: 1,
      dialogImageUrl: '',
      dialogVisible: false
    }
  },
  methods: {
    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
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
  .ql-toolbar,ql-snow{
    height: 50px;
  }
</style>
