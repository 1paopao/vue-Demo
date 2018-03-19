<template>
	<div class="vimg">
		<p>使用$refs访问某个标签对象</p>
		<dl>
			<dt>
				<img src="../assets/pic01.jpg" alt="" ref='oldImg'>
			</dt>
			<dd>
				图片1
			</dd>
		</dl>
	</div>
</template>

<script>
export default {

  name: 'Vimg',

  data () {
    return {

    }
  },
  created() {
  	console.log(1)
  	console.log(this.$refs.oldImg)
  },
  mounted() {
  	console.log(this.$refs.oldImg)
  }
}
</script>

<style lang="css" scoped>
	* {
			margin: 0;
			padding: 0;
		}
		dl {
			width: 100%;
			border: 1px solid red;
			margin: 30px auto;
			overflow: hidden;
			padding: 20px;
			box-sizing: border-box;
			text-align: center;
		}
		dt {
			width: 200px;
			/*height: 200px;*/
			/*border: 1px solid #ddd;*/
			margin: 0 auto;
			box-sizing: border-box;
		}
		img {
			width: 100%;
		}
</style>