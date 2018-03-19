<template>
	<div class="vcomputed-main">
		{{ even }}
	</div>
</template>

<script>
export default {

  name: 'vcomputed',

  data () {
    return {
    	message:[1,2,3,4,5,6]
    }
  },
  computed: {
  	even: function() {
  		// 过滤数组，取偶数
  		return this.message.filter((obj, index) => {
  			return obj%2 === 0
  		})
  	}
  }
}
</script>

<style lang="scss" scoped>
</style>