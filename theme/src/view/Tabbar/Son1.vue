<template>
  <div class="son">111111111111111111111111
  </div>
</template>

<script>
export default {
  name: 'Son1',
  data () {
    return {

    }
  },mounted () {
    console.log(1111111)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@r:1rem/37.5;
.son{
	height: 100%;
	width: 275*@r;
	display: flex;
  flex-direction: column;
}
</style>
