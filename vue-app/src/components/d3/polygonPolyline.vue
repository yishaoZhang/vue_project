<template>
    <div class="polygon-polyline-box">
      <svg width="600" height="220" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <polygon points="100, 20 20, 90 60, 160 140, 160 180, 90"
          style="fill:LawnGreen;stroke:black;stroke-width:3;" />
        <polyline points="100, 20 20, 90 60, 160 140, 160 180, 90"
          style="fill:white;stroke:black;stroke-width:3;" transform="translate(200,0)"/>
      </svg>
    </div>
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
