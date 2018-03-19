<template>
	<div class="app">
    <p>练习v-if</p>
		<p v-if="seen">you see me</p>
		<template v-if="ok">
			<h1>菜鸟教程</h1>
      <p>学的不仅是技术，更是梦想！</p>
      <p v-if="Math.random() > 0.5">哈哈哈，打字辛苦啊！！！</p>
      <p v-else>啦啦啦啦，打字一点都不辛苦啊！！！</p>
		</template>
    <template>
      <div v-if="type === 'A'">
        A
      </div>
      <div v-else-if="type === 'B'">
        B
      </div>
      <div v-else-if="type === 'C'">
        C
      </div>
      <div  v-else>
        not a/b/c
      </div>
    </template>
	</div>
</template>

<script>
export default {

  name: 'Vif',

  data () {
    return {
    	seen: true,
    	ok: true,
      type: 'D'
    }
  }
}
</script>

<style lang="css" scoped>
</style>