<template>
	<div class="varr-box">
		varrObject
		<ul>
			<li v-for="item in popGoodsList">{{ item.sid }} </li>
		</ul>
	</div>
</template>

<script>
export default {

	name: 'varrObject',

	data () {
		return {
			newArr: [],
			popGoodsList: [
			{
				"goods_sales_name":"飞利浦（PHILIPS）HX6730/02 充电式声波震动牙刷（雾白）",
				"category_id":"103088",
				"supplier_sid":"-1",
				"sale_category_id":"302000003650",
				"priceTag":"近90天最低价",
				"sale_price":"349.0",
				"url":"http://Img33.iblimg.com/goods-35/3020/2016/11/SP_3020_302000340678_01_10009.jpg",
				"store_sid":"null",
				"brand_sid":"209559",
				"sid":"220147",
				"com_sid":3020
			},
			{
				"goods_sales_name":"飞利浦（PHILIPS）HX6730/02 充电式声波震动牙刷（雾白）",
				"category_id":"103088",
				"supplier_sid":"-1",
				"sale_category_id":"302000003650",
				"priceTag":"近90天最低价",
				"sale_price":"349.0",
				"url":"http://Img33.iblimg.com/goods-35/3020/2016/11/SP_3020_302000340678_01_10009.jpg",
				"store_sid":"null",
				"brand_sid":"209559",
				"sid":"220147",
				"com_sid":3122
			}
			]
		}
	},
	methods: {
		transArr(list) {
			// 定义数组
			// var newArr = []
			list && list.forEach((obj, i) => {
				// 定义一个对象
				let newObj = {
					brandSid: obj.brand_sid,
					buid: obj.com_sid,
					categoryid: obj.category_id,
					goodsDetSid: obj.sid,
					shopid: '-1',
					supplySid: obj.supplier_sid
				}
				// 存放在数组
				this.newArr.push(newObj)
			})
		}
	},
	created() {
		/* 方法1： */
		// 定义数组
		// let newArr = []
		// 遍历数组
		// this.popGoodsList && this.popGoodsList.forEach((obj, i) => {
		// 	console.log(obj +'------'+ i)
		// 	// 定义一个对象
		// 	let newObj = {
		// 		brandSid: obj.brand_sid,
		// 		brandSid: obj.brand_sid,
		// 		buid: obj.com_sid,
		// 		categoryid: obj.category_id,
		// 		goodsDetSid: obj.sid,
		// 		shopid: '-1',
		// 		supplySid: obj.supplier_sid
		// 	}
		// 	// 存放在数组
		// 	newArr.push(newObj)
		// })
		/* 方法2：*/
		this.transArr(this.popGoodsList)
		console.log(this.newArr)
	}
}
</script>

<style lang="css" scoped>
</style>