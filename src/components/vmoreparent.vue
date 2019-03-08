<template>
	<div class="box">
		<button style="border: 1px solid red; padding: 40px" @click="tap">点击我</button>
		<div style="border: 1px solid red; padding: 10px">
			<div style="padding: 10px 60px;border: 1px solid #ddd">
				<div style="padding: 5px 20px;border: 1px solid pink" v-for="item1 in parArr2" v-if="index == 0">{{item1}}</div>
				<div style="" v-for="(item, index) in parArr">
					<div v-if="isActive.id == index">
						<p v-if="index == 0">
							<span v-for="pao in item" style="border: 1px solid pink; padding: 10px;margin:5px">{{pao}}</span>
							<!-- {{item + '&&&10'}} -->
						</p>
						<p v-else>{{ item + '2' }}</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {

  name: 'vmoreparent',

  data () {
    return {
    	isActive: {
    		id: 0
    	},
    	parArr: [[0,1,2],3,4,5],
    	parArr2: [6,7,8],
    	index: 0
    }
  },
  methods: {
  	tap() {
  		this.index = (this.index > this.parArr.length - 2 ? 0 : ++this.index)
  		console.log(this.index)
  		this.isActive.id = this.index
  	}
  }
}
</script>

<style lang="css" scoped>
</style>