<template>
	<div class="flex-box">
		<div class="flex-cont">1</div>
		<div class="flex-cont">2</div>
		<div class="flex-cont">3</div>
		<div class="flex-cont">4</div>
		<div class="flex-cont">5</div>
		<div class="flex-cont">6</div>
		<div class="flex-cont">7</div>
		<div class="flex-cont">8</div>
	</div>
</template>

<script>
export default {

  name: 'vueflex',

  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
	.flex-box {
		padding: 20px;
		display: flex;
		flex-wrap: wrap;
		.flex-cont {
			width: 85px;
	    height: 40px;
	    margin-top: 20px;
			margin-right: 20px;
			border: 2px solid red;
			&:nth-child(3n) {
				color: blue;
				margin-right: 0;
			}
		}
	}
</style>