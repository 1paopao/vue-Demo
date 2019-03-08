<template>
	<div class="vfilter-box">
		vfilter
		<p>自定义过滤器
		<br />
		使用场景：<h4>{{}}或者v-bind</h4>
		</p>
		<br>
		<hr>
		<p>{{ message | capitalize }}</p>
		<div v-bind:id="message | capitalize"></div>
		<hr>
		<p>{{ message | capitalize1('a','b') }}</p>
		<hr>
		<p>{{ message | capitalize1('a','b') | gl }}</p>
		<hr>
	</div>
</template>

<script>
export default {

  name: 'vfilter',

  data () {
    return {
    	message: 'pwd'
    }
  },
  filters: { // 自定义过滤器，页面一加载，就修改变量的值；
  	capitalize(value) {
  		return value + '泡泡'
  	},
  	capitalize1(value, x, y) {
  		return value + x + y;
  	},
  	gl(value) {
  		value=value.toString()
  		return value.toUpperCase() //将字符串小写字符转为大写
  	}
  }
}
</script>

<style lang="css" scoped>
</style>