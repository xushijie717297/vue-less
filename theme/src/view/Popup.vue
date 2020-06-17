<template>
  <div class="popup">
	  <van-cell is-link @click="showPopup">展示弹出层</van-cell>
	  <van-popup v-model="show" position="left" :style="{ height: '100%'}" :safe-area-inset-bottom="true" >
		  <div style="height: 20px;width: 20px;background-color: red;"></div>
	  </van-popup>
  </div>
</template>

<script>
import Vue from 'vue';
import { Popup ,Cell } from 'vant';
Vue.use(Popup);
Vue.use(Cell);
export default {
  name: 'Popup',
  data () {
    return {
		show: false,
    }
  },
  methods:{
	  showPopup() {
	        this.show = true;
	      },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.popup{
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
}
.popup /deep/ .van-popup--left{
	width: 200px;
}
</style>
