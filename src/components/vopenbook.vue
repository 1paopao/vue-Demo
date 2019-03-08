<template>
	<div class="open-book">
		<div class="container">
			<div class="imgicon1" :class="{ open : isOpen }" @click="tap">
				<div class="pic img1">
					<img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2825071599,4182964107&fm=27&gp=0.jpg" alt="">
				</div>
			</div>
			<div class="imgicon2" :class="{ open2 : isOpen }">
				<div class="pic img2">
					<img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=986074539,2072992813&fm=27&gp=0.jpg" alt="">
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {

	name: 'vopenbook',

	data () {
		return {
			isOpen: false
		}
	},
	methods: {
		tap() {
			console.log(111)
			this.isOpen = true
		}
	}
}
</script>

<style lang="css" scoped>
/* 3d */
@keyframes move{
	form {width: 300px;}
	to {width: 100%;}
}
.imgicon1.active {
	animation:move 2s;
	}
	
.open-book {
	overflow: hidden;
}
.container {
}
.imgicon1, .imgicon2 {
	z-index: 999;  /* 绝对定位的那一层要比普通文档的层级要高，否则事件作用不到这个页面上 */
	width: 300px;
	height: 300px;
	overflow: hidden;
	border: 1px solid #ddd;
	position: absolute;
	left: 0;
	top: 0;
}
.imgicon1 {
	z-index: 9999;
	opacity: 1;
	transform-origin: 10% 20%;
	transition: width .3s, height 1.3s, transform 5s, opacity 6s;
}
.imgicon2 {
	opacity: 0;
	transition: opacity 15s;
}
img {
	width: 100%;
}

	.imgicon1.open {
		width: 100%;
		height: 500px;
		transform: rotateY(60deg);
		opacity: 0;
	}
	.imgicon2.open2 {
		opacity: 1;
	}
	.imgicon1.open img {
		height: 500px;
	}
	</style>