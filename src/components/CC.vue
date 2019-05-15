<template>
  <BB @over="handle"></BB>
</template>

<script>
import BB from '@/components/BB'
export default {
  name: 'CC',
  components: {
    BB
  },
  data () {
    return {
      data: ' '
    }
  },
  created () {
    console.log('1')
  },
  mounted () {
    console.log('2')
  },
  watch: {
    data () {
      console.log('c')
    }
  },
  methods: {
    handle (str) {
      console.log(str)
    }
  }
}
</script>

<style scoped>

</style>
