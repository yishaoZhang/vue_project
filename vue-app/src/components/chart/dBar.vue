<template>
  <div>
    <svg :width="getWidth" :height="getHeight" version="1.1" xmlns="http://www.w3.org/2000/svg" class="svg-bar-box" id="svgBarBox">
      <rect v-for="(item, $index) in dataSet" :key="$index" :x="padding.left + $index * rectStep" :y="getHeight - item - padding.bottom" :width="rectWidth" :height="item"
        class="chart-bar" />
      <text v-for="(item, $index) in dataSet" :key="$index + 'a'" class="text-show" text-anchor="middle" :x="padding.left + rectWidth / 2 + $index * rectStep" :y="getHeight + 16 - item - padding.bottom">{{ item }}</text>
    </svg>
    <br>
    <br>
    <el-button type="primary" plain @click="addData">添加数据</el-button>
    <el-button type="primary" plain @click="sortData">排序</el-button>
  </div>
</template>

<script>
import * as d3 from 'd3'
export default {
  data () {
    return {
      dataSet: [50, 43, 120, 87, 99, 167, 142],
      padding: {
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      },
      rectStep: 35,
      rectWidth: 30
    }
  },
  computed: {
    getHeight () {
      return d3.max(this.dataSet, (d) => {
        return Math.ceil(d / 50) * 50 + this.padding.top + this.padding.bottom
      })
    },
    getWidth () {
      return this.dataSet.length * this.rectStep + this.padding.left + this.padding.right
    }
  },
  components: {

  },
  mounted () {
    this.init()
  },
  methods: {
    addData () {
      let re = parseInt(this.getHeight * Math.random())
      this.dataSet.push(re)
    },
    sortData () {
      this.dataSet.sort((a, b) => { return a - b })
    },
    init () {
      const svg = d3.select('#svgBarBox')
      const xScale = d3.scaleLinear()
        .domain([0, 10])
        .range([0, 300])
      svg.append('g')
        .attr('transform', `translate(10, ${this.getHeight - this.padding.bottom})`)
        .call(d3.axisBottom(xScale))
    }
  }
}
</script>

<style scoped lang="scss">
.svg-bar-box{
  border: 1px solid red;
  .chart-bar{
    fill:steelblue;
    stroke:steelblue;
    stroke-width:1;
  }
  .text-show{
    fill: #fff;
    font-size: 14px;
  }
}
</style>
