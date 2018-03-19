<template>
	<div class="loading-box">
		----组件加载----
		<h2>{{ messageone }}</h2>
	</div>
</template>

<script>
export default {

  name: 'loading',
  // 子组件要通过props设置预期的数据
  props: {
    messageone: {
      type: String,
      default: ''
    }
  },

  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
</style>