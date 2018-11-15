<template>
    <svg width="500" height="300" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="myGradientH" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#F00" />
          <stop offset="100%" stop-color="#0FF" />
        </linearGradient>
        <linearGradient id="myGradientV" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#F00" />
          <stop offset="100%" stop-color="#0FF" />
        </linearGradient>
      </defs>
        <rect x="100" y="100" width="150" height="100" fill="url(#myGradientH)" />
        <rect x="300" y="100" width="150" height="100" fill="url(#myGradientV)" />
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
