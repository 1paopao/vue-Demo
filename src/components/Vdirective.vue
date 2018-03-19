<template>
	<div class="vdirective">
		<div v-html="msg"></div>
	</div>
</template>

<script>
export default {

  name: 'Vdirective',

  data () {
    return {
    	msg: '<h1>练习中</h1>'
    }
  }
}
</script>

<style lang="css" scoped>

</style>