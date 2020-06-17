<template>
  <div class="demo1">
	 <h4>bjais</h4>
	 <div class="demo ">ajisbdiajsbdahbdhj</div>
	 <div class="index1">111111111</div>
	 <div class="index2"  @click="isShow"></div>
     <div class="box  animated bounceInDown" style="animation-duration: 1500ms">测试动画</div>
     <transition enter-active-class="bounceInUp" leave-active-class="bounceInRight">
        <div  v-show="show" class="box animated">测试动画</div>
     </transition>
     <div class="box  animated bounceInLeft">测试动画</div>
     <div class="box  animated bounceInRight">测试动画</div>
     <div class="box  animated bounceInUp">测试动画</div>

  </div>
</template>

<script>

export default {
  name: 'Gif',
  data () {
    return {
        show:false
    }
  },
  methods: {
      isShow(){
          this.show = !this.show
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped lang="less">
	@import '../assets/color.less';
	.demo1{
		height: 100%;
		width: 100%;
	}
	.index1{
		height:40px;
		width: 100px;
		margin: 10px 0;
	}
	.index2{
		height: 60px;
		width: 80%;
    }
    .box{
        height: 100px;
        width: 200px;
        background: aqua;
        
    }
</style>
