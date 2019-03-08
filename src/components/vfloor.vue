<template>
	<div class="vfloor">
		<div class="city">
			<!-- 城市列表 -->
			<div class="list">
				<div id="A" class="item">
					<div class="title">A</div>
					<div class="item-01">
						<span>阿坝县01</span>
					</div>
					<div class="item-01">
						<span>阿坝县02</span>
					</div>
					<div class="item-01">
						<span>阿坝县03</span>
					</div>
					<div class="item-01">
						<span>阿坝县04</span>
					</div>
					<div class="item-01">
						<span>阿坝县05</span>
					</div>
					<div class="item-01">
						<span>阿坝县06</span>
					</div>
					<div class="item-01">
						<span>阿坝县07</span>
					</div>
				</div>
				<div id="B" class="item">
					<div class="title">B</div>
					<div class="item-01">
						<span>巴楚县01</span>
					</div>
					<div class="item-01">
						<span>巴楚县02</span>
					</div>
					<div class="item-01">
						<span>巴楚县03</span>
					</div>
					<div class="item-01">
						<span>巴楚县04</span>
					</div>
					<div class="item-01">
						<span>巴楚县05</span>
					</div>
					<div class="item-01">
						<span>巴楚县06</span>
					</div>
					<div class="item-01">
						<span>巴楚县07</span>
					</div>
				</div>
				<div id="C" class="item">
					<div class="title">C</div>
					<div class="item-01">
						<span>苍南县01</span>
					</div>
					<div class="item-01">
						<span>苍南县02</span>
					</div>
					<div class="item-01">
						<span>苍南县03</span>
					</div>
					<div class="item-01">
						<span>苍南县04</span>
					</div>
					<div class="item-01">
						<span>苍南县05</span>
					</div>
					<div class="item-01">
						<span>苍南县06</span>
					</div>
					<div class="item-01">
						<span>苍南县07</span>
					</div>
				</div>
			</div>
			<!-- 右侧的梯子 -->
			<div class="floor">
				<span @click="go('A')">A</span>
				<span @click="go('B')">B</span>
				<span @click="go('C')">C</span>
			</div>
		</div>
	</div>
</template>

<script>
export default {

	name: 'vfloor',

	data () {
		return {

		}
	},
	methods: {
		go(index) {
			console.log(11)
			location.href = "#" + index
		} 
	}
}
</script>

<style lang="css" scoped>
.vfloor {
	text-align: left;
}
/* 城市列表 */
.city {
	height: 100%;
	overflow-y: scroll;
}
.list {
	color: #333;
}
.item {
	font-size: 24px;
}
.title {
	padding: 8px 0 6px 7px;
	background: #f5f5f5;
	color: #666;
	border-bottom: 1px solid #ddd;
}
.item-01 {
	font-size: 16px;
	height: 50px;
	line-height: 50px;
	margin-left: 20px;
	border-bottom: 1px solid #ddd;
}
.item .item-01:last-child {
	border-bottom: 0;
}
.item span {
	display: inline-block;
	width: 80%;
	height: 100%;
}

/* 楼梯列表 */
.floor {
	position: fixed;
	right: 20px;
	top: 150px;
	width: 20px;
	/* background: pink; */
	text-align: center;
	display: flex; /* 使用flex布局使其竖直显示 */
	flex-direction: column;
}
.floor span {
	display: inline-block;
	background: pink;
	width: 100%;
	height: 20px;
	line-height: 20px;
	margin-bottom: 10px;
}
</style>