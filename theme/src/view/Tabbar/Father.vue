
<template>
	<div class="father" >
    <component :is="roleComponent" />
    <div @click="change">组件切换</div>
  </div>
</template>

<script>
import Son1 from './Son1'
import Son2 from './Son2'
import Son3 from './Son3'

    export default {
        name: "index",
        components: {
          Son1,
          Son2,
          Son3
        },
        data() {
            return {
              roleComponents:{
                admin:Son1,
                book:Son2,
                user:Son3
              },
              role:"user",//显示哪个的参数
              roleComponent:undefined
            };
          },
          created () {
            // this.role = 'admin'
            // console.log(this.roleComponents[this.role])
            // const {role, roleComponents} = this
            // console.log({role, roleComponents})
            this.roleComponent = this.roleComponents[this.role]
            console.log(this.roleComponent)
          },
          methods: {
            change(){
              this.roleComponent = this.roleComponents['admin']
              
            }
          },
          mounted () {
            const {aa, bb} = {'aa':11,'cc':33,'bb':22}
            console.log({aa, bb})
            let {a,b,d} = {"a":1,"b":2,"c":3}
            console.log({a,b,d})
          }
    }
</script>

<style scoped lang="less">
@r : 1rem/37.5;
@color : red;
.father{
	height: 100%;
  // width: 100%;
  width: 300*@r;
  // width: calc(300*@r + 20px);
	display: flex;
  flex-direction: column;
  // background: @color;
  &:after{
    content: '';
    height: 40px;
    width: 100%;
    background: aqua;
  }
}
</style>