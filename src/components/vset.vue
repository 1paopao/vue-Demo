<template>
	<div class="set-main">
		<p>vue 的 $set</p>
		姓名：{{ data.name }}<br>
    年龄：{{ data.age }}<br>
    性别：{{ data.sex }}<br>
    说明：{{ data.info.content }}
		<br><br><br>

    <button @click="tap" style="width:60px;height:45px;border:1px solid #ccc">修改sex</button>
	</div>
</template>

<script>
var userdata = {
	name: 'paopao',
	age: 21,
	info: {
		content: 'this is a parground'
	}
}

var key = 'content'

export default {

  name: 'vset',

  data () {
    return {
    	data: userdata
    }
  },
  created() {
  },
  methods: {
  	tap() {
  		console.log(1)
  		// 直接赋值新的属性，结果不显示
  		// data.sex = '男'

  		// 打印this
  		console.log(this)
  		// 使用$set,进行设置
  		// userdata  为需要添加属性的对象；   sex 添加的属性名；     ’男‘ 为新添加的属性设置属性值；
  		this.$set(userdata,'sex', '男')
  	}
  }
}

</script>

<style lang="scss" scoped>
</style>