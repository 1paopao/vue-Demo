<template>
	<div class="vfloor-box">
		<div class="header-title">header-title</div>
		<!-- floor -->
		<div class="vfloor2">
			<!-- update code -->
			<div class="big-box">
				<div class="menu-box">
					<!-- left box -->
					<div class="left-box">
						<ul>
							<li @click="go('热销')"><span>热销</span></li>
							<li @click="go('扫码送红包')"><span>扫码送红包</span></li>
							<li @click="go('绿叶产品')"><span>绿叶产品</span></li>
							<li @click="go('矿泉水')"><span>矿泉水</span></li>
							<li><span>饮料系列</span></li>
							<li><span>功能性饮料</span></li>
							<li><span>热销</span></li>
							<li><span>扫码送红包</span></li>
							<li><span>绿叶产品</span></li>
							<li><span>矿泉水</span></li>
							<li><span>饮料系列</span></li>
							<li><span>功能性饮料</span></li>
							<li><span>热销</span></li>
							<li><span>扫码送红包</span></li>
							<li><span>绿叶产品</span></li>
							<li><span>矿泉水</span></li>
							<li><span>饮料系列</span></li>
							<li><span>功能性饮料</span></li>
							<li><span>功能性饮料</span></li>
							<li><span>热销</span></li>
							<li><span>扫码送红包</span></li>
							<li><span>绿叶产品</span></li>
							<li><span>矿泉水</span></li>
							<li><span>饮料系列</span></li>
							<li><span>功能性饮料</span></li>
						</ul>
					</div>
					<!-- right box -->
					<div class="right-box">
						<div id="热销" class="item">
							<div class="title">热销</div>
							<div class="item-01">
								<span>可乐</span>
							</div>
							<div class="item-01">
								<span>可乐2</span>
							</div>
							<div class="item-01">
								<span>可乐03</span>
							</div>
							<div class="item-01">
								<span>可乐04</span>
							</div>
							<div class="item-01">
								<span>可乐05</span>
							</div>
							<div class="item-01">
								<span>可乐06</span>
							</div>
							<div class="item-01">
								<span>可乐07</span>
							</div>
						</div>
						<div id="扫码送红包" class="item">
							<div class="title">扫码送红包</div>
							<div class="item-01">
								<span>红包</span>
							</div>
							<div class="item-01">
								<span>红包2</span>
							</div>
							<div class="item-01">
								<span>红包03</span>
							</div>
							<div class="item-01">
								<span>红包04</span>
							</div>
							<div class="item-01">
								<span>红包05</span>
							</div>
							<div class="item-01">
								<span>红包06</span>
							</div>
							<div class="item-01">
								<span>红包07</span>
							</div>
						</div>
						<div id="绿叶产品" class="item">
							<div class="title">绿叶产品</div>
							<div class="item-01">
								<span>绿叶</span>
							</div>
							<div class="item-01">
								<span>绿叶2</span>
							</div>
							<div class="item-01">
								<span>绿叶03</span>
							</div>
							<div class="item-01">
								<span>绿叶04</span>
							</div>
							<div class="item-01">
								<span>绿叶05</span>
							</div>
							<div class="item-01">
								<span>绿叶06</span>
							</div>
							<div class="item-01">
								<span>绿叶07</span>
							</div>
						</div>
						<div id="矿泉水" class="item">
							<div class="title">矿泉水</div>
							<div class="item-01">
								<span>矿泉水</span>
							</div>
							<div class="item-01">
								<span>矿泉水2</span>
							</div>
							<div class="item-01">
								<span>矿泉水03</span>
							</div>
							<div class="item-01">
								<span>矿泉水04</span>
							</div>
							<div class="item-01">
								<span>矿泉水05</span>
							</div>
							<div class="item-01">
								<span>矿泉水06</span>
							</div>
							<div class="item-01">
								<span>矿泉水07</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {

	name: 'vfloor2',

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
* {
	margin: 0;
	padding: 0;
	text-align: left;
	font-size: 12px;
}
ul {
	list-style: none;
}
.vfloor-box {
	display: flex;
	flex-direction: row;
}
/* header-title */
.header-title {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 80px;
	background: red;
}

.vfloor2 {
	width: 100%;
	/* height: 100%; */
	overflow: hidden;
	position: fixed;
	top: 80px;
	bottom: 0;
	left: 0;
	right: 0;
}
.big-box {
	width: 100%;
	height: 100%;
}

.menu-box {
	background-color: pink;
	display: flex;
	height: 100%; 
}
/* left box */
.left-box {
	width: 100px;
	margin-right: 20px;
	background: hotpink;
}
.left-box ul {
	height: 100%;
	border-right: 1px solid #ddd;
	overflow-y: auto;
	overflow-x: hidden;
}
.left-box ul li {
	padding: 10px;
	font-size: 12px;
	text-align: center;
	border-bottom: 1px solid #ddd;
}
/* right box */
.right-box {
	flex: 1;
	background-color: greenyellow;
	overflow-x: hidden;
	overflow-y: auto;
}
.right-box .item {
	margin-bottom: 30px;
}
.right-box .item .title {
	padding: 5px 0 5px 10px;
	border-bottom: 1px solid #ddd;
	font-size: 14px;
	font-weight: 600;
}
.right-box .item .item-01 {
	padding: 20px 5px;
	border: 1px solid #ccc;
	border-left: 0;
	margin-top: 10px;
}
</style>