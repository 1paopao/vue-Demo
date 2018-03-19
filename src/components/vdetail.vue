<template>
	<div class="vdetail">
    <p>截取15个字符，之后的用省略号拼接~~~</p>
		<h2>{{data}}</h2>
    <HelloWorld></HelloWorld>
	</div>
</template>

<script>
export default {

  name: 'vdetail',

  data () {
    return {
    	data:'我是泡泡大人，完成一张图的效果到底是什么，我也不太清楚'
    }
  },
  mounted() {
  	console.log(this.data.length)
  	if(this.data.length > 16) {
  		//方法1：截取15个字符，之后的用省略号拼接~~~
  	  console.log(this.data.slice(0,15).concat('...'))

  	  //方法2:直接在后面加...
  	  console.log(this.data.substring(0,15)+'...')

  	}

  }

}
</script>

<style lang="css" scoped>
	h2 {
		text-align: left;
	}
</style>