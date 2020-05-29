<template>
  <div class="hello">
	  <ul class="theme_ul">
	           <li @click="themeDefault">默认(蓝色)</li>
	           <li @click="themeGreen">青绿色</li>
	           <li @click="themLink">暖色</li>
	       </ul>
	  <h4>bjaisfjvbahldvbaghdv</h4>
	  <div class="demo">ajisbdiajsbdahbdhj</div>
	  <div class="index1"></div>
	  <div class="index2"></div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {

    }
  },
  methods:{
		themeDefault() {
		      document.body.className = 'theme_default';
		      localStorage.setItem('themeColor', 'theme_default')
		},
			// 青绿色
		themeGreen() {
		  document.body.className = 'theme_darkgreen';
		  localStorage.setItem('themeColor', 'theme_darkgreen')
		},
		// 暖色
		themLink() {
		  document.body.className = 'thenm_warm';
		  localStorage.setItem('themeColor', 'thenm_warm')
		},
  },
  mounted() {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped lang="less">
	@import '../assets/color.less';
	.hello{
		height: 100%;
		width: 100%;
	}
	.index1{
		height:40px;
		width: 100px;
		margin: 10px 0;
	}
	.index2{
		height: 10px;
		width: 100%;
	}
</style>
