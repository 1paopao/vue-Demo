<template>
	<div class="vtag">
		vtaG
		{{ '[' + saleInfos[220075].price + ']' }}
	</div>
</template>

<script>
export default {

	name: 'vtag',

	data () {
		return {
			tagInfo: '',
			tagList:{},
			saleInfos: {
				"220075": {
					"price":"168", 
					"stockFlag":"-1", 
					"promotion":[
					{
						"ruletype": '1',
						"popDes": '的地地道道'
					}
					]
				},
				"220147": {
					"price":"349",
					"stockFlag":"-1", 
					"promotion":[
					{
						"ruletype": '2',
						"popDes": '折扣'
					}
					]
				},
				"233030": {
					"price":"949", 
					"stockFlag":"-1", 
					"promotion":[
					{
						"ruletype": '6',
						"popDes": '满赠'
					}
					]
				},
				"1658186": {
					"price":"238", 
					"stockFlag":"-1", 
					"promotion":[
					{
						"ruletype": '4',
						"popDes": '满返'
					}
					]
				},
				"2598074": {
					"price":"299", 
					"stockFlag":"-1", 
					"promotion":[
					{
						"ruletype": '4',
						"popDes": '的地地道道111'
					}
					]
				},
				"2614631": {
					"price":"266", 
					"stockFlag":"-1", 
					"promotion":[]
				}
			}
		}
	},
	methods: {
		extend(source, target) {
			for (var i in source) {
				target[i] = source[i];
			}
			return target;
		}
	},
	created() {
		for(var i in this.saleInfos) {
			// console.log(i + '======' + this.saleInfos[i])
			// console.log(this.saleInfos[i])
			/* 方法1： */
			// if (this.saleInfos[i].promotion && this.saleInfos[i].promotion[0] && this.saleInfos[i].promotion[0].ruletype) {
			// 	if (this.saleInfos[i].promotion[0].ruletype == '6') {
			// 		this.tagInfo = '[满赠]'
			// 	} else if (this.saleInfos[i].promotion[0].ruletype == '2') {
			// 		this.tagInfo = '[折扣]'
			// 	} else if (this.saleInfos[i].promotion[0].ruletype == '4') {
			// 		this.tagInfo = '[满返]'
			// 	} else {
			// 		this.tagInfo = this.saleInfos[i].promotion[0].popDes || ''
			// 	}
			// }
			if (this.saleInfos[i].promotion && this.saleInfos[i].promotion[0]) {
				switch(this.saleInfos[i].promotion[0].ruletype) {
					case '1':
					case '7':
						this.tagInfo = this.saleInfos[i].promotion[0].popDes || ''
						break;
					case '2':
						this.tagInfo = '[折扣]'
						break;
					case '4':
						this.tagInfo = '[满返]'
						break;
					case '6':
						this.tagInfo = '[满赠]'
						break;
				}
			}		
			console.log(i + ' === ' + this.tagInfo)
		}
	}
}
</script>

<style lang="css" scoped>
</style>