<template>
    <canvas width="500" height="500" class="d-arc" id="dArcCanvas"></canvas>
</template>

<script>
import * as d3 from 'd3'
export default {
  data () {
    return {
    }
  },
  computed: {
  },
  components: {
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      var data = [1, 1, 2, 3, 5, 8, 13]

      var canvas = document.querySelector('#dArcCanvas')
      let context = canvas.getContext('2d')

      var width = canvas.width
      let height = canvas.height
      let radius = Math.min(width, height) / 2
      var dot = d3.symbol()
        .context(context)
      var colors = [
        '#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd',
        '#8c564b', '#e377c2', '#7f7f7f', '#bcbd22', '#17becf'
      ]

      // arc 来求得移动轨迹
      var arc = d3.arc()
        .outerRadius(radius - 10)
        // .innerRadius(0)
        .innerRadius(radius - 70)
        .cornerRadius(5)
        .padAngle(0.03)
        .context(context)

      // 饼图数据格式化构造器
      var pie = d3.pie()

      // 格式化数据
      var arcs = pie(data)

      // 图形居中
      context.translate(width / 2, height / 2)

      context.globalAlpha = 0.5
      arcs.forEach(function (d, i) {
        context.beginPath()
        arc(d)
        context.fillStyle = colors[i]
        context.lineWidth = 1.5
        // 边缘部分绘制放入此，如下代码注释比较可理
        context.stroke()
        context.fill()
      })
      /* context.globalAlpha = 1
      context.beginPath()
      arcs.forEach(arc)
      context.lineWidth = 1.5
      context.stroke() */

      context.beginPath()
      arcs.forEach(function (d) {
        var c = arc.centroid(d)
        context.save()
        // 这个translate有可能跟之前设想的不一致
        context.translate(c[0], c[1])
        dot()
        context.restore()
      })
      context.fillStyle = '#000'
      context.fill()
    }
  }
}
</script>

<style scoped lang="scss">
.d-arc{
  border: 1px solid red;
}
</style>
