<template>
	<div class="promise-all">
		<p style="BORDER-TOP: #00686b 1px dashed; OVERFLOW: hidden; HEIGHT: 1px">promise 的all方法</p>
		<p style="BORDER-TOP: #00686b 1px dashed; OVERFLOW: hidden; HEIGHT: 1px">作用：提供了 【并行执行异步操作】 的能力，并且 【在所有异步操作执行完后】 才执行回调</p>
		<p style="BORDER-TOP: #00686b 1px dashed; OVERFLOW: hidden; HEIGHT: 1px">实现的步骤：用Promise.all来执行，all接收一个数组参数，里面的值最终都算返回Promise对象。</p>
		<p style="BORDER-TOP: #00686b 1px dashed; OVERFLOW: hidden; HEIGHT: 1px">三个异步操作返回的数据哪里去了呢？【都在then里面呢，all会把所有异步操作的结果放进一个数组中传给then】</p>
		<p style="BORDER-TOP: #00686b 1px dashed; OVERFLOW: hidden; HEIGHT: 1px">使用场景：一些游戏类的素材比较多的应用，打开网页时，预先加载需要用到的各种资源如图片、flash以及各种静态文件。所有的都加载完后，我们再进行页面的初始化。  </p>
		<p>效果实际：谁跑的慢，以谁为准执行回调</p>
	</div>
</template>

<script>
export default {

  name: 'vPromiseAll',

  data () {
    return {
    	hotMovie: []
    }
  },
  mounted() {
  	let _this = this
  	Promise
  	.all([this.runAsync1(), this.runAsync2(), this.runAsync3()])
  	.then(function(results) {
  		console.log(results)
  	})
  },
	methods: {
  	// 获取豆瓣数据
  	getDouban() {
  		let _self = this;
  		$.ajax({
  			type:"get",
  			url:"https://api.douban.com//v2/movie/in_theaters",
  			dataType :"jsonp",
  			success:function(data){
  				_self.hotMovie=data.subjects;
  			}
  		})
  	},
  	// 定义多个promise
  	runAsync1() {
  		let _self = this;
  		var p1 = new Promise(function(resolve, reject) {
  			// 做一些异步操作
  			_self.getDouban()
  			setTimeout(function() {
  				console.log('异步任务1执行完成');
  				resolve('随便什么数据1');
  			}, 2000)
  		})
  		return p1;
  	},
  	runAsync2() {
  		let _self = this;
  		var p2 = new Promise(function(resolve, reject) {
  			// 做一些异步操作
  			_self.getDouban()
  			setTimeout(function() {
  				console.log('异步任务2执行完成');
  				resolve('随便什么数据2');
  			}, 2000)
  		})
  		return p2;
  	},
  	runAsync3() {
  		let _self = this;
  		var p3 = new Promise(function(resolve, reject) {
  			// 做一些异步操作
  			_self.getDouban()
  			setTimeout(function() {
  				console.log('异步任务3执行完成');
  				resolve('随便什么数据3');
  			}, 2000)
  		})
  		return p3;
  	},
  	showPao() {
  		console.log('泡泡心情')
  	}
  }
}
</script>

<style lang="css" scoped>
</style>