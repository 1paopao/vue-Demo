<template>
	<div class="goods">
    <p>使库存为0的自动沉底，方法2：</p>
		<div class="showgoods" v-for="item in newGoods">
			<p>库存：<span>{{ item.availableStockSum }}</span></p>
			<div class="pic">
				<img :src="item.pictureUrl" alt="">
			</div>
		</div>
	</div>
</template>

<script>
export default {

  name: 'vsort2',

  data () {
    return {
    		havegoodlist: [],
    		nogoodlist: [],
    		newGoods: [],
    		goodList: [
    			{
    				"recommendGoodId":"67711",
    				"goodsEntity":{
    					"availableStockSum":2,
    					"pictureUrl":"http://img.st.iblimg.com/photo-1/2000/10598625_360x360.jpg"
    				}
    			},
    			{
    				"recommendGoodId":"67712",
    				"goodsEntity":{
    					"availableStockSum":0,
    					"pictureUrl":"http://img1.imgtn.bdimg.com/it/u=1643173077,3008305592&fm=27&gp=0.jpg"
    				}
    			},
    			{
    				"recommendGoodId":"67713",
    				"goodsEntity":{
    					"availableStockSum":3,
    					"pictureUrl":"http://img.st.iblimg.com/photo-1/2000/10598625_360x360.jpg"
    				}
    			},
    			{
    				"recommendGoodId":"67714",
    				"goodsEntity":{
    					"availableStockSum":0,
    					"pictureUrl":"http://img3.imgtn.bdimg.com/it/u=421737467,2830752778&fm=27&gp=0.jpg"
    				}
    			},
    			{
    				"recommendGoodId":"67715",
    				"goodsEntity":{
    					"availableStockSum":4,
    					"pictureUrl":"http://img.st.iblimg.com/photo-1/2000/10598625_360x360.jpg"
    				}
    			}
    		]
    }
  },
  created() {
  	// 遍历goolist
  	this.goodList.forEach((obj, index) => {
  		console.log(obj.goodsEntity)
  		console.log(index)
  		// 存放到新数组
  		this.newGoods.push(obj.goodsEntity)
  		console.log(this.newGoods)
  		// 利用sort将num为0的商品进行库存沉底
  		this.newGoods.sort((a, b) => {
  			// return b.availableStockSum - a.availableStockSum;
  			return a.availableStockSum == 0
  		})
  	})
  }
}
</script>

<style lang="scss" scoped>
	.showgoods {
		width: 100%;
		overflow: hidden;
		padding-bottom: 10px;
		border-bottom: 1px solid pink;
		p {
			span {
				color: red;
			}
		}
		.pic {
			height: 100px;
			overflow:hidden;
			img {
				width: 100%;
				height: 100%;
			}
		}
	}
</style>