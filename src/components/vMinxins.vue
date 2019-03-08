<template>
	<div class="mixin-box">
		mixin: 混合对象，
		作用：多个组件可以共享数据和方法，在使用mixin的组件中引入后，mixin中的方法和属性也就并入到该组件中，可以直接使用。钩子函数会两个都被调用，mixin中的钩子首先执行。
	</div>
</template>

<script>
import miXin from './js/mixin.js'
export default {

  name: 'vMinxins',

  data () {
    return {

    }
  },
  mixins: [miXin]
}
</script>

<style lang="css" scoped>
</style>