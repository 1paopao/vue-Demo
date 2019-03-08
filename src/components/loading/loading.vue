<template>
	<div class="loading-box">
		----组件加载----
		<h2>{{ messageone }}</h2>
    <button style="width: 130px; height: 60px; border: 1px solid red;" @click="tap">点击</button>
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
      i: 0
    }
  },
  methods: {
    tap() {
      this.$emit('data', ++this.i)
    }
  }
}
</script>

<style lang="css" scoped>
</style>