<template>
	<div class="more-click">
		more-click
		<p><button type="button" @click="a();b()">vue按钮</button></p>
	</div>
</template>

<script>
export default {

	name: 'moreClick',

	data () {
		return {

		}
	},
	methods: {
		a() {
			console.log('a');
		},
		b() {
			console.log('b');
		}
	}
}
</script>

<style lang="css" scoped>
p {
	padding: 20px;
	border: 1px solid red;
}
button {
	padding: 8px 18px;
	background-color: tan;
}
</style>