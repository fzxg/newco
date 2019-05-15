<template>
  <Container>
  <div class="content-main-body">
    <form name="_newscontent_fromname">
      <div class="title">
        <h1 style="font-size:20px;color:#9f080c;text-align:center;">{{title}}</h1>
        <div style="text-align:center;margin-top:15px;"> <em>[发表时间]：{{date}} </em> </div>
      </div>
      <p>&nbsp;</p>
      <div id="vsb_content">
        <div class="v_news_content" v-html="content_html">
        </div>
      </div>
    </form>
  </div>
  </Container>
</template>

<script>
import Container from './Login'
export default {
  components: {
    Container
  },
  name: 'Info',
  data () {
    return {
      title: '<button></button>',
      date: '<button></button>',
      content_html: '<button></button>'
    }
  }
}
</script>

<style scoped>

</style>
