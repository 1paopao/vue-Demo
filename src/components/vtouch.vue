<template>
	<div class="vtouch">
		<p>vue 长按事件</p>
		<div class="touch-box" v-for="item in list" @touchstart.native="showDeleteButton(item.id)" @touchend.native="clearLoop(item.id)">{{ item.id }}</div>
	</div>
</template>

<script>
export default {

  name: 'vtouch',

  data () {
    return {
    	Loop: '',
    	list: [
    		{ id: '0' },
    		{ id: '1' },
    		{ id: '2' },
    		{ id: '3' }
    	]
    }
  },
  methods: {
  	showDeleteButton(e) {
  		console.log(e)
  		clearInterval(this.Loop)
  		this.Loop = setTimeout(function() {
  			console.log(22)
  		}.bind(this), 2000)
  	},
  	clearLoop(e) {
  		clearInterval(this.Loop)
  	}
  }
}
</script>

<style lang="css" scoped>
.touch-box {
	width: 100%;
	line-height: 100px;
	background: #ddd;
	margin-bottom: 20px;
}
</style>