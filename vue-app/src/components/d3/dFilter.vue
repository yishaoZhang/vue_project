<template>
    <svg width="500" height="300" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="GaussianBlur">
          <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
        </filter>
      </defs>
        <rect x="100" y="100" width="150" height="100" fill="blue" />
        <rect x="300" y="100" width="150" height="100" fill="blue" filter="url(#GaussianBlur)" />
    </svg>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  components: {

  },
  mounted () {

  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
</style>
