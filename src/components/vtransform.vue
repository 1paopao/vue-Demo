<template>
	<div class="box">
		<div class="hori-box box1">1</div>
		<div class="hori-box box2">2</div>
	</div>
</template>

<script>
export default {

	name: 'vtransform',

	data () {
		return {

		}
	}
}
</script>

<style lang="css" scoped>
/* 
	以左上角为原点：

	百分比形式：
		transform-origin: (1/2 * height) / width ;
  px形式：
    transform-origin: (1/2 * height) px;
 */

.hori-box {
	position: absolute;
	margin-top: 100px;
	margin-left: 30px;
	width: 200px;
	height: 20px;
	background-color: #ddd;
}
.box1 {
	z-index: 7;
	/* transform: rotateZ(90deg); */
	transform: rotate(90deg);
	/* transform-origin: left bottom; */
	/* transform-origin: 27px 27px; */
	/* transform-origin: 8.333%; */
	transform-origin: 5%;
}
.box2 {
	background: #4f626d;
}
</style>