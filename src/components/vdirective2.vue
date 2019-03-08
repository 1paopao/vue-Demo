<template>
	<div class="directive">
		<p>自定义指令的使用</p>
		<p>{{ msg }}</p>
		<!-- 准备实现需求：
    在h1标签上面，加上一个按钮，当点击按钮时候，对count实现一次
    自增操作，当count等于5的时候，在控制台输出‘it is a test’
  -->
  <button @click="handleClick">clickMe</button>
  <h1 v-if="count < 6" v-change="count">it is a custom directive</h1>

  <button @click="handleClick1">clickMe</button>
  <!-- 注意，如果指令需要调用我们调用接口获取的数据，则一定要在数据获取之后在进行调取数据，否则打印出的值为空；所以需要加判断 -->
  <h2 v-if="count1" v-change="count1.a">it is a custom directive</h2>
</div>
</template>

<script>
export default {

	name: 'vdirective2',

	data () {
		return {
			msg: 'Hello Vue',
			count:0,
			count1: '',
		}
	},
	methods: {
		handleClick() {
			this.count++
		},
		handleClick1() {
			this.count1 = { a: 1, b: 2}
		}
	},
	directives: {
		change: {
			bind: function(el, bindings) {
				console.log('指令已经绑定到元素了');
				console.log('el**', el);
				console.log('bindings**', bindings);
				//准备将传递来的参数
        // 显示在调用该指令的元素的innerHTML
        el.innerHTML = bindings.value
			}
		}
	}
}
</script>

<style lang="css" scoped>
p:nth-child(1) {
	font-size: 26px;
	padding: 10px;
	border: 1px solid #ddd;
	background-color: tan;
}
button {
	padding: 10px 20px;
	background-color: pink;
	text-align: center;
	display: block;
	margin: 0 auto;
	margin-top: 30px;
}
h1,h2 {
	width: 100%;
	padding: 10px;
	border: 1px solid #eee;
}
</style>