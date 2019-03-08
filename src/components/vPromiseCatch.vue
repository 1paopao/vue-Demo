<template>
	<div class="promise-catch">
		<p>promise 失败后的回调； catch</p>
		<p>作用1:它和then的第二个参数一样，用来指定reject的回调;</p>
		<p>作用2:如果执行resolve的回调中，跑出异常，那么并不会报错卡死js，而是会进到catch方法</p>
	</div>
</template>

<script>
export default {

  name: 'vPromiseCatch',

  data () {
    return {
    	hotMovie: []
    }
  },
  mounted() {
  	let _this = this
  	// then方法可以接受两个参数，第一个对应resolve的回调，第二个对应reject的回调
  	this.getNumber()
  	.then(
  		function(data){
  			console.log('成功回调 resolved');
  			console.log(data);
  			console.log(somedata); //检查resolve报错，是否进入catch函数； 与使用的try、catch功能相似；
  		})
  	.catch(
  		function(data){
  			console.log('失败回调 rejected');
  			console.log(data);
  			_this.showPao()
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
  	// 随机获取一个数字
  	getNumber() {
  		let _self = this;
  		var p = new Promise(function(resolve, reject){
        //做一些异步操作
        _self.getDouban()
        setTimeout(function(){
          var num = Math.ceil(Math.random()*10); //生成1-10的随机数
          if(num <= 5){
          	resolve(num);
          }
          else{
          	reject('数字太大了');
          }
        }, 2000);
      });
  		return p;
  	},
  	showPao() {
  		console.log('泡泡心情')
  	}
  }
}
</script>

<style lang="css" scoped>
</style>