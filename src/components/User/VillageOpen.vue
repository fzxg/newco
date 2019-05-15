<template>
  <Container>
  <div class="package">
  <div class="block">
    <el-carousel height="300px"><!--幻灯片-->
      <el-carousel-item v-for="item in img" :key="item">
        <img :src="item" width="100%" height="300">
      </el-carousel-item>
    </el-carousel>
    <div class="villin_content"><!--文字简介-->
      <p style="line-height: 2em;"> <span class="texttype" name="villintext">设教学研究与评估科、教务科、实践教学科、学籍管理科、教学质量管理科、教材科。教务处是负责学校普通本、专科教学与相关工作的职能部门，下设教学研究与评估科、教务科、实践教学科、学籍管理科、教学质量管理科、教材科。教务处是负责学校普通本、专科教学与相关工作的职能部门，下设教学研究与评估科、教务科、实践教学科、学籍管理科、教学质量管理科、教材科。</span><br></p>
    </div>
  </div>
  </div>
  </Container>
</template>

<script>
import a from '@/assets/山水1.jpg'
import b from '@/assets/山水2.jpg'
import c from '@/assets/山水3.jpg'
import d from '@/assets/山水4.jpg'
import Container from '../Login'
export default {
  name: 'VillageIntroduction',
  components: {
    Container
  },
  data () {
    return {
      img: [
        a,
        b,
        c,
        d
      ]
    }
  }
}
</script>

<style scoped>

</style>
<style>
  .package {
    border: 1px;
  }
  tab1{
    position: relative;
    left: 30px;
    top: 20px;
  }
  p{
    text-align: left;
  }
  .texttype{
    color: rgb(0, 0, 0);
    text-transform: none;
    text-indent: 0px;
    letter-spacing: normal;
    font-family: "Microsoft YaHei", "Helvetica Neue", Arial, verdana, sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    word-spacing: 0px;
  }

</style>
