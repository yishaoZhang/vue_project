## css居中 ##
+ margin-top: 15%
  + 此百分比是宽度的百分比
+ left: 50%; top: 50%; tranform: translate(-50%, -50%);
  + 父需有足够高度支撑

## mongodb remove 与delete区别 ##
+ remove 删document 不删 collection 及index
+ 数据库一般不做物理删除
  + 单独设定一个字段，做逻辑删除即可