<template>
	<div class="scroll-box">
		<div class="header">header</div>

		<div class="scroll-top" :class="{ fix : isFixed }">scroll-top</div>
		<!-- 达到临界点时承载的容器 -->
		<div class="box-top" :style="{ 'height': isFixed ? headerHeight + 'px': 0 }"></div>

		<div class="scroll-cont1 single-cont1">cont1</div>
		<div class="scroll-cont1 single-cont2">c
			出现的问题：<br />
			1）上滑动，吸顶之后为什么会出现下面内容往上跑的情形？<br />
				 思路：在需要固定的div的同级，设置一个div，未滑动的时候设置height为0，当达到滑动的条件的时候，需要固定的div通过一个calss设置position：fixed，然后一定要设置top，否则虽然固定了，但是还是木有吸顶；并且设置容器的高度为相对于页面的高度，防止下面的内容出现抖动；（注意这里的top会影响到下滑）<br />

			2) 为什么在下拉的时候，会有一部分空白？<br />
			因为在设置为position为fixed的时候，top设置了为0，那原来获取的offsetTop的通过
  		let offsetTop = document.querySelector('.scroll-top').offsetTop(相对于文档的距离)，
  		当滑动到顶部之后，top为0，其实offsetTop已经一直是0，所以在进行scolltop与offsetTop进行判断的时候，
  		scolltop 一直大于 offsetTop（0），所以空白的区域就是box-top;
  		所以解决的问题就是，
  		方法1：不通过document.querySelector('.scroll-top').offsetTop进行获取，通过上面的元素进行获取高度；（上面元素的高度+margin+padding+height，其实最好不给其设置margin，通过padding控制上下的距离，进而获取宽度）
		</div>
		<div class="scroll-cont1">cont3</div>

		<div class="scroll-bottom">bottom</div>
	</div>
</template>

<script>
export default {

  name: 'Vscroll',

  data () {
    return {
    	// 是否固定
    	isFixed: false,
    	// .scroll-top的高度
    	headerHeight: 0
    }
  },
  methods: {
  	// 滚动
  	handscroll() {
  		// 文档滚动的高度
  		let scrolltop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
  		// scroll-top距离文档的高度 = 上面元素的高度 
  		let offsetTop = document.querySelector('.header').offsetHeight
  		console.log(scrolltop, offsetTop)
  		if (scrolltop > offsetTop) {
  			// 如果滚动高度高于offsetTop,通过一个变量控制一个class类的显示，通过这个class类固定头部
  			this.isFixed = true
  		} else {
  			console.log(this.isFixed + '1')
  			this.isFixed = false
  		}
  	},
  	// 页面重新加载
  	reload() {
  		location.reload()
  		// 设置高度为0
  		let top = document.documentElement.scrollTop || document.body.scrollTop
  		if (top != 0) {
  			document.documentElement.scrollTop = document.body.scrollTop = 0
  		}
  	}
  },
  mounted() {
  	// headerheight设置为top的高度
		this.$nextTick(() => {
			// 10代表：scroll-top的margin-bottom
			this.headerHeight = document.querySelector('.scroll-top').offsetHeight + 10
		})
  	// 监听滚动事件 ？？？  如果不用监听事件
  	window.addEventListener('scroll', this.handscroll)
  },
  destroyed() {
  	window.removeEventListener('scroll', this.handscroll)
  },
  watch:{
  	// 页面重新加载，就执行reload
  	'$route' : 'reload'
  }
}
</script>

<style>
	*{
		margin: 0;
		padding: 0;
	}
</style>
<style lang="scss" scoped>
.scroll-box {
	width: 100%;
	text-align: center;

	.header {
		width: 100%;
		height: 90px;
		background: #ccc;
		margin-bottom: 10px;
		// padding: 50px;
	}

	.scroll-top {
		// position: relative;
		width: 100%;
		height: 80px;
		background: pink;
		&.fix {
			position: fixed;
			// 问题
			top: 0; 
			left: 0;
			right: 0;
		}
	}

	.scroll-cont1 {
		height: 200px;
		background: hotpink;
		margin-bottom: 30px;
		&.single-cont1 {
			margin-top: 30px;
		}
		&.single-cont2 {
			height: 800px;
		}
	}


	.scroll-bottom {
		height: 80px;
		background: gray;
	}

}
</style>