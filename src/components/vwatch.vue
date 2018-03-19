<template>
	<div class="vwatch-main">
		<p>watch的使用方法：监测的值发生变化时，就会调用对应的回调函数，并执行里面的代码</p>
		<p>使用情况：注意：数组的改变不需要使用深度watch。</p>
		<input type="text" v-model="childrens.name" style="width:60px;height:25px;border:1px solid #ccc;padding-left:8px">
		<br><br><br><br>
		<input type="text" v-model="lastName" style="width:60px;height:25px;border:1px solid #ddd;padding-left:8px">
		<br><br><br><br>
		<button @click="tap" style="width:80px;height:25px;border:1px solid #ddd;">点击我</button>
	</div>
</template>

<script>
export default {

  name: 'vwatch',

  data () {
    return {
    	childrens: {  
        name: '小强',  
        age: 20,  
        sex: '男'  
      }, 
      tdArray:["1","2"],  
      lastName:"张三" 
    }
  },
  watch: {
  	// 对象路径需要封装为一个对象
  	childrens: {
  		handler:function(curVal, oldVal) {
  			console.log(curVal.name)
  		},
		  deep:true  //对象内部的属性监听，也叫深度监听,这个在检测对象的时候一定要带
  	},

  	// 键路径必须加上引号
  	'childrens.name': function(curVal, oldVal) {
  		console.log(curVal+"aaa")
  	},

  	// 方法1：检测全局变量的变化
  	lastName: function(curVal, oldVal) {
  		console.log(curVal)
  		console.log(this.lastName)
  	}
  },
  created() {
  	// 方法2： 也可以直接主动调用$watch方法来进行数据监测
	  this.$watch('lastName', function(curVal,oldval) {
			console.log(curVal+'使用的是this.$watch')
		})
  },
  methods: {
  	tap() {
  		console.log(this)
  	}
  }
}
</script>

<style lang="scss" scoped>
</style>