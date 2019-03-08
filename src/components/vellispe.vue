<template>
	<div class="ellispe">
		<!-- 1.普通的单行省略 -->
		<p>1.普通的单行省略</p>
		<div class="test ellipse-demo">1.普通的单行省略普通的单行省略普通的单行省略普通的单行省略普通的单行省略</div>
		<!-- 2.平时开发单行省略 -->
		<p>2.flex布局单行省略</p>
		<div class="test test1">
			<div class="left">我是左侧内容部</div>
			<div class="right">
				<!-- <div class="right-inner"> -->
					<p>p1:我是右侧内容部我是右侧内容部我是右侧内容部我是右侧内容部</p>
					<p>p2:我是右侧内容部我是右侧内容部我是右侧内容部我是右侧内容部</p>
					<!-- </div> -->
				</div>
			</div>
			<!-- 3.float -->
			<p>3.float布局单行省略</p>
			<div class="test test2">
				<div class="test2-box">
					<div class="left fl">我是左侧内容部</div>
					<div class="right fl">
						<p class="ellipse-demo">p1:我是右侧内容部我是右侧内容部我是右侧内容部我是右侧内容部</p>
					</div>
				</div>
			</div>
		</div>
	</template>

	<script>
	export default {

		name: 'vellispe',

		data () {
			return {

			}
		}
	}
	</script>

	<style lang="css" scoped>
	.ellipse-demo {
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.fl {
		float: left;
	}
	.test {
		margin-bottom: 50px;
		padding: 5px 20px;
		border: 1px dotted tan;
	}
	.test1 {
		display: flex;
	}
	.test1 .left {
		width: 100px;
		height: 100px;
		background: coral;
		overflow: hidden;
		margin-right: 20px;
	/* 
	不换行
	white-space: nowrap;
	text-overflow: ellipsis; */
	/* 换行 */
	white-space: pre-line;
}
.test1 .right {
	flex: 1;
	width: 100%;
	overflow: hidden;
	background: coral;
}
.test1 .right p {
	margin: 10px;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	border: 1px solid red;
}
.test2-box .left{
	display: inline-block;
	width: 40%;
	height: 100px;
	background: pink;
	margin-right: 10px;
}
.test2-box .right{
	display: inline-block;
  overflow: hidden;
  width: 50%;
  background: azure;
}
</style>