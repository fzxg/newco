<template>
<div>
  <el-button type="primary" @click="click">123</el-button>
  <Login>
    assss
  </Login>
</div>
</template>

<script>
import Login from './Login'
export default {
  name: 'BB',
  data () {
    return {
      data: ''
    }
  },
  methods: {
    click () {
      this.$emit('over', 123)
    }
  },
  components: {
    Login
  },
  props: {
  },
  watch: {
  },
  computed: {
  }
}
</script>

<style scoped>

</style>
