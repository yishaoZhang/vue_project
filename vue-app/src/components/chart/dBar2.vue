<template>
    <div class="d-bar2-box" id="dBar2Svg">
      <svg id="dBar2Svg" :width="width" :height="height" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <path v-if="item" v-for="(item, index) in getPathArray" :d="`M${item}`" :key="index"
              style="fill:red;stroke:black;stroke-width:3"/>
      </svg>
    </div>
</template>

<script>
import * as d3 from 'd3'
export default {
  data () {
    return {
      useData: d3.range(40).map(function (i) {
        return i % 5 ? { x: i, y: (Math.sin(i / 3) + 2) * 10 } : null
      }),
      marginData: {
        top: 40, right: 40, bottom: 40, left: 40
      },
      pathLine: d3.line()
        .defined(function (d) { return d })
        .x(function (d) { return d.x })
        .y(function (d) { return d.y })
    }
  },
  computed: {
    width () {
      return 960 - this.marginData.left - this.marginData.right
    },
    height () {
      return 500 - this.marginData.top - this.marginData.bottom
    },
    getPathArray () {
      return this.pathLine(this.useData).split('M')
    }
  },
  components: {
  },
  mounted () {
    console.log(this.getPathArray)
  },
  methods: {
  }
}
</script>

<style scoped lang="scss">
.d-bar2-box {
  svg{
    border: 1px solid red;
  }
  .area {
    fill: lightsteelblue;
  }
  .line {
    fill: none;
    stroke: steelblue;
    stroke-width: 1.5px;
  }
  .dot {
    fill: white;
    stroke: steelblue;
    stroke-width: 1.5px;
  }
}
</style>
