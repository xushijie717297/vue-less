<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
	*{
		margin: 0;
		padding: 0;
	}
body,html,#app{
height: 100%;
width: 100%;
background-color: #cecece;
}
</style>
