<template>
  <div class="dfsfsf">111111111111111111111111333333333333333333
    <div class="box1">试一试 </div>
    <div class="box">我成功了 </div>
    <p class="p1">失败/</p>
    <p class="p2"></p>
    <p class="p3">1111111
      <span>2222222</span>
    </p>
    <span class="span1">1111111111111
      <span>2222222222222</span>
    </span>
    <em class="em1"></em>
    <em class="em2">222222222222222222</em>
    <em class="em3"></em>

  </div>
</template>

<script>
export default {
  name: 'Son3',
  data () {
    return {
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import './css/index.less';
@color:multiply(#ff6600, #333333);//颜色混合必须是六位
@r:1rem/37.5;
// @color:red;
.dfsfsf{
	height: 80%;
	width: 100%;
	display: flex;
  flex-direction: column;
  background-color: @color;
}
.box{
  height: 100px;
  width: 90%;
  background: aqua;
}
.box1{
  border: 1px solid red;
  .box();
}
.p1{
  height: 50px;
  width: 50px;
}
.p3 {
  &:extend(.span1 all);
}
.span1 {
  color: red;
  span {
    color: green;
    font-style: italic;
  }
}
// 编译为
// .span1,
// .p3 {
  // color: red;
// }
// .span1 .span2,
// .p3 .span2 {
//   color: green;
// }
.em1{

}
</style>
