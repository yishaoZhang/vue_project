<template>
    <svg ref="drawLine" width="850" height="530" version="1.1" xmlns="http://www.w3.org/2000/svg" class="draw-line-svg">
      <path :d="getLineD1" class="draw-line1" />
      <path :d="getLineD2" class="draw-line2" />
    </svg>
</template>

<script>
// 点与点之间的插值，不知如何处理 interpolate, 13种类型
import * as d3 from 'd3'
export default {
  data () {
    let linePath2 = d3.line()
      .x((d) => {
        return d + 120
      })
      .y((d, i) => {
        return (i % 2) ? 120 : 40
      })
    return {
      points1: [[40, 40], [160, 60], [160, 160], [60, 160]],
      points2: [80, 120, 160, 200, 240, 280],
      linePath1: d3.line(),
      linePath2
    }
  },
  components: {

  },
  computed: {
    // 线构造器一般使用
    getLineD1 () {
      return this.linePath1(this.points1)
    },
    // 线构造器修改访问器
    getLineD2 () {
      return this.linePath2(this.points2)
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style scoped lang="scss">
.draw-line-svg{
  border: 1px solid red;
  .draw-line1{
    stroke: black;
    stroke-width: 3px;
    fill: none;
  }
  .draw-line2{
    stroke: blue;
    stroke-width: 3px;
    fill: none;
  }
}
</style>
