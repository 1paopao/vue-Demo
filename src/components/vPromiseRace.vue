<template>
	<div class="promise-race">
		<p>网址：https://blog.csdn.net/shan1991fei/article/details/78966297</p>
		<p>promise-race：谁跑的快，以谁为准执行回调</p>
		<p>promise-race：与all用法一样</p>
    <p>使用场景: 这个race有什么用呢？使用场景还是很多的，比如我们可以用race给某个异步请求设置超时时间，并且在超时后执行相应的操作</p>
  </div>
</template>

<script>
export default {

  name: 'vPromiseRace',

  data () {
    return {
    	hotMovie: []
    }
  },
  mounted() {
  	// let _this = this
    // 1. race的使用
  	// Promise
  	// .race([this.runAsync1(), this.runAsync2(), this.runAsync3()])
  	// .then(function(results) {
  	// 	console.log(results)
  	// })
    // 2.加载图片
    Promise
    .race([this.requestImg(), this.timeout(),])
    .then(function(results) {
      console.log(results)
    })
    .catch(function(reason) {
      console.log(reason)
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
  			}, 1000)
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
  	},
    // 请求资源图片
    requestImg() {
      var p = new Promise(function(resolve, reject){
        var img = new Image();
        img.onload = function(){
          resolve(img);
        }
        // img.src = 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2727147682,1291246896&fm=27&gp=0.jpg';
        img.src = '@@@@@@';
      });
      return p;
    },
    // 延时函数，用于给请求计时
    timeout() {
      var p = new Promise(function(resolve, reject){
        setTimeout(function(){
          // resolve('图片加载成功')
          reject('图片请求超时');
        }, 5000);
      });
      return p;
    }
  }
}
</script>

<style lang="css" scoped>
</style>