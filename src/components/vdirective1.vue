<template>
	<div class="directive">
		<p>自定义指令的使用&作用：
			1. 用来操作DOM的；
			2. 可复用的；
			3. 集成第三方插件；
		</p>
		<p>{{ msg }}</p>
		<!-- 准备实现需求：
    在h1标签上面，加上一个按钮，当点击按钮时候，对count实现一次
    自增操作，当count等于5的时候，在控制台输出‘it is a test’
  -->
  <button @click="handleClick">clickMe</button>
  <h1 v-if="count < 6" v-change="count">it is a custom directive</h1>
</div>
</template>

<script>
export default {

	name: 'vdirective1',

	data () {
		return {
			msg: 'Hello Vue',
			count:0,
		}
	},
	methods: {
		handleClick() {
			this.count++
		}
	},
	directives: { // vue的自定义指令
		change: { 
      bind: (el, bindings) => { // 页面一加载，就调用了bind函数；--被绑定
				console.log('指令已经绑定到元素了');
				console.log('el**bind', el);
				console.log('bindings**bind', bindings);
				console.log('bindings**bind', bindings.value);
				//准备将传递来的参数
        // 显示在调用该指令的元素的innerHTML
        el.innerHTML = bindings.value
      },
      inserted: (el, bindings) => { // 页面一加载，就调用了inserted函数；--被插入
      	console.log('指令的数据被插入');
      	console.log('el**inserted', el);
      	console.log('bindings**inserted', bindings);
      	console.log('bindings**inserted', bindings.value);
      },
    	update: (el, bindings) => { // 修改数据,修改页面相对应的变量；--更新
    		console.log('指令的数据有所变化');
      	console.log('el**update', el);
      	console.log('bindings**update', bindings);
				console.log('bindings**update', bindings.value);
      	el.innerHTML = bindings.value;
      	if (bindings.value == 5) {
      		console.log('5 it is just a test')
      	}
    	},
    	componentUpdated: (el, bindings) => { // 更新完成之后，进行调用；--更新完成
    		console.log('更新完成');
    		console.log('el**componentUpdated', el);
    		console.log('bindings**componentUpdated', bindings);
    		console.log('bindings**componentUpdated', bindings.value);
    	},
      unbind: (el, bindings) => { // 满足条件后，接触绑定
      	console.log('解除绑定了');
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