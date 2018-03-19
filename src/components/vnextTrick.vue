<template>
	<div class="vnextTrick-main">
		<p>$nextTick的作用： $nextTick回调中获取该数据在相应 DOM 元素所绑定的内容（或属性）</p>
		<p>使用的场景：你有一个 jQuery 插件，希望在 DOM 元素中某些属性发生变化之后重新应用该插件，这时候就需要在 $nextTick 的回调函数中执行重新应用插件的方法。</p>
		<div ref="msgDiv">{{msg}}</div>
  	<div v-if="msg1">Message got outside $nextTick: {{msg1}}</div>
  	<div v-if="msg2">Message got inside $nextTick: {{msg2}}</div>
  	<div v-if="msg3">Message got outside $nextTick: {{msg3}}</div>
  	<button @click="changeMsg" style="width:180px;height:35px;border:1px solid #ddd;text-align:center">
	    Change the Message
	  </button>
	</div>
</template>

<script>
export default {

  name: 'vnextTrick',

  data () {
    return {
    	msg: 'Hello Vue.',
	    msg1: '',
	    msg2: '',
	    msg3: ''
    }
  },
  methods: {
  	changeMsg() {
  		console.log(this)
      this.msg = "Hello world."
      // msg1显示的是Hello Vue
      this.msg1 = this.$refs.msgDiv.innerHTML
      // msg2显示的是新定义的Hello world
      this.$nextTick(() => {
        this.msg2 = this.$refs.msgDiv.innerHTML
      })
      // msg3显示的是新定义的Hello Vue.
      this.msg3 = this.$refs.msgDiv.innerHTML
    }
  }
}
</script>

<style lang="scss" scoped>
</style>