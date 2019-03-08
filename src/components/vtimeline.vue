<template>
	<div class="time">
		<div class="time-box">
			<div class="line"></div>
			<div class="item1">
				<span class="date">2018-07-06</span>
				<div class="circle">
					<i></i>
				</div>
				<div class="msg">
					“AI智能大赛”2018年创业中国人工智能创业大赛
				</div>
			</div>
			<div class="item1">
				<span class="date">2018-07-06</span>
				<div class="circle">
					<i></i>
				</div>
				<div class="msg">
					“AI智能大赛”2018年创业中国人工智能创业大赛
				</div>
			</div>
			<div class="item1">
				<span class="date">2018-07-06</span>
				<div class="circle">
					<i></i>
				</div>
				<div class="msg">
					“AI智能大赛”2018年创业中国人工智能创业大赛
				</div>
			</div>
			<div class="item1">
				<span class="date">2018-07-06</span>
				<div class="circle">
					<i></i>
				</div>
				<div class="msg">
					“AI智能大赛”2018年创业中国人工智能创业大赛
				</div>
			</div>
			<div class="item1">
				<span class="date">2018-07-06</span>
				<div class="circle">
					<i></i>
				</div>
				<div class="msg">
					“AI智能大赛”2018年创业中国人工智能创业大赛
				</div>
			</div>
			<div class="item1">
				<span class="date">2018-07-06</span>
				<div class="circle">
					<i></i>
				</div>
				<div class="msg">
					“AI智能大赛”2018年创业中国人工智能创业大赛
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {

	name: 'vtimeline',

	data () {
		return {

		}
	}
}
</script>

<style lang="css" scoped>
.time {
	padding: 20px;
	overflow: hidden;
}
.time-box {
	width: 100%;
	/* height: 300px; */
	border: 1px solid red;
	position: relative;
}
.line {
	width: 1px;
	height: 100%;
	background: #3333;
	position: absolute;
	left: 100px;
	top: 1px;
}
.item1 {
	width: 100%;
	margin-bottom: 30px;
	height: 50px;
}
.date {
	float: left;
}
.circle {
	width: 16px;
	height: 16px;
	border: 1px solid #333333;
	border-radius: 50%;
	background: #323c48;
	position: absolute;
	left: 90px;
}
/* 点击的时候不显示 */
.circle:active i {
	background: #ff7200;
}
.circle:active .date {
	color:#ff7200;
}
.circle:active .msg {
	color:#ff7200;
}
i {
	width: 10px;
	height: 10px;
	background: #333333;
	border-radius: 5px;
	display: block;
	margin-left: 3px;
	margin-top: 3px;
}
.msg {
	float: right;
	width: 220px;
	margin-bottom: 30px;
	height: 50px;
}
</style>