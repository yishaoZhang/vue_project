## svg viewport ##
+ svg画布大小
  + 纯数字默认象素
  + <svg width="500" height="300"></svg>
    + 上述定义svg viewport 500*300像素
## viewbox ##
+ x, y, width, height
+ 显示区域

## preserveAspectRatio ##
+ 展示
+ preserveAspectRatio="xMidYMid meet"
  + 每一个值
    + x y两个维度对齐, 分左中右（Min, Mid, Max）
    + 如：xMaxYMax
  + 第二值，平铺方式，类似于background-size
    + meet 容器完全覆盖视图，保持宽高比
    + slice 视图完全充满容器，保持宽高比
    + none 放弃宽高经，充满容器