<template>
	<div class="brand-box">
		<div class="box">
			<h2>中英文优先级：中文/英文 > 中文 > 英文</h2>
			{{ tranText(dispBrand) }}
		</div>
	</div>
</template>

<script>
export default {

	name: 'vbrand',

	data () {
		return {
			title: '',
			dispBrand: {
				cn_name: '泡泡',
				en_name: ''
			}
		}
	},
	methods: {
  		// 页面滚动
  		handleScroll() {
  			let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
  			console.log(scrollTop)
  			// if (scrollTop > 10) {
  			// 	/* 方法1： */
  			// 	// if (this.dispBrand && this.dispBrand.cn_name && this.dispBrand.en_name) {
  			// 	// 	this.title = this.dispBrand.cn_name + '/' + this.dispBrand.en_name
  			// 	// } else {
  			// 	// 	this.title = (this.dispBrand.cn_name || this.dispBrand.en_name)
  			// 	// }
  			// 	/* 方法2： */
  			// 	// this.title = (this.dispBrand && this.dispBrand.cn_name && this.dispBrand.en_name) ? (this.dispBrand.cn_name + '/' + this.dispBrand.en_name) : (this.dispBrand.cn_name || this.dispBrand.en_name)
  			// 	/* 方法3： */
  			// 	this.title = (this.dispBrand && this.dispBrand.cn_name && this.dispBrand.en_name) ? this.tranText(this.dispBrand) : (this.dispBrand.cn_name || this.dispBrand.en_name)
  			// } else {
  			// 	this.title = '品牌详情'
  			// }
  			// this.title = scrollTop > 10 ? ((this.dispBrand && this.dispBrand.cn_name && this.dispBrand.en_name) ? this.tranText(this.dispBrand) : (this.dispBrand.cn_name || this.dispBrand.en_name)) : '品牌详情'
  			console.log(this.title)
  		},
  		// 处理名字
  		tranText(dispBrand) {
  			if (this.dispBrand && this.dispBrand.cn_name && this.dispBrand.en_name) {
  				return this.dispBrand.cn_name + '/' + this.dispBrand.en_name
  			} else {
  				return (this.dispBrand.cn_name || this.dispBrand.en_name)
  			}
  		}
  		// tranText(item) {
  		// 	if (item.ioJoin == '1') {
  		// 		return '已报名'
  		// 	} else if (item.ioJoin == '0' || item.ioJoin == null) {
  		// 		if ((item.bookAmount - item.bookNum) <= 0) {
  		// 			return '已报满'
  		// 		}
  		// 		if (item.bookMethod == '2' && item.bookCost) {
  		// 			return (item.bookCost + '积分报名')
  		// 		}
  		// 		return '免费报名'
  		// 	}
  		// },
  	},
  	mounted() {
  		console.time('handleScroll')
  		window.addEventListener('scroll', this.handleScroll)
  		console.timeEnd('handleScroll')
  	},
  	destroyed () {
  		window.removeEventListener('scroll', this.handleScroll)
  	}
  }
  </script>

  <style lang="css" scoped>
  .box {
  	width: 100%;
  	padding-top: 600px;
  	padding-bottom: 600px;
  	border: 1px solid pink;
  }
  </style>