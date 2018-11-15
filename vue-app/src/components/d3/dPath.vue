<template>
    <div class="path-box">
      <svg width="800" height="600" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <path d="M30,100 L270,300
                 M30,100 H270
                 M30,100 V300"
              style="stroke:black;stroke-width:3;"/>
        <path d="M30, 100 C100,20 190,20 270,100 S400,180 450,100"
              style="fill:red;stroke:black;stroke-width:3" transform="translate(300, 0)"/>
        <path d="M30,100 Q190,20 270,100 T450,100"
              style="fill:white;stroke:black;stroke-width:3" transform="translate(0, 300)"/>
        <path d="M100,200 a200,150 0,1,0 150, -150 Z"
              fill="yellow" stroke="blue" stroke-width="4" transform="translate(300, 200)" />
      </svg>
    </div>
</template>

<script>
// M 移动到某点，作为起点坐标
// L 直线终点
// H 水平线
// V 垂直线
/*
  三次贝塞尔曲线
  C: 两个受控点，一个中点
  S: 一个受控点，一个终点（其实一个受控点由C处一个受控点与中点计算而得）
*/
/*
  二次贝塞尔曲线
  Q：一控制点，一中点（两者生成另一控制点）
  T：终点
*/
/*
  弧线
  A(rx, ry, x-axis-rotation, large-arc-flag, sweep-flag, x, y)
  rx: 椭圆x方向的半轴大小
  ry: 椭圆y方向的半轴大小
  x-axis-rotation: 椭圆x轴与水平轴顺时针方向的夹角
  large-arc-flag: 两个值 1:大角度弧线 0:小角度弧线
  sweep-flag: 两个值 1:顺时针至终点 0:逆时针终点
  x: 终点x坐标
  y: 终点y坐标
  如示例：
  a小写字母，表示相对坐标
  最终终点坐标表示起点与终点的和
  Z:表示封闭
 */
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
