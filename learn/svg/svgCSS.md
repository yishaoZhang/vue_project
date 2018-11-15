## 使用类选择器 ##
```
.linestyle{
  stroke:red;
  stroke-width:2
}
<line class="linestyle" x1="10" y1="10" x2="100" y2="100" />
```

## 样式当成属性单独写 ##
```
<line fill="yellow" stroke="blue" stroke-width="4" x1="10" y1="10" x2="100" y2="100" />
```
## 将属性合并写 ##
```
<line style="fill:yellow;stroke:blue;stroke-width:4" />
```

## 常见属性 ##
+ fill
+ stroke
+ stroke-width
+ stroke-linecap
  + 线头端点样式
+ stroke-dasharray
  + 虚线样式
+ opacity
+ font-family
+ font-size
+ font-weight
+ font-style
  + 字体样式，如斜体
+ text-decoration