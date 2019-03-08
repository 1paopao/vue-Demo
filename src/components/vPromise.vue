<template>
	<div class="promise-box">
		<p>promise 操作</p>
		<p>promise 成功后的回调； resolve</p>
		<ul class="row">
			<li class="m-lst" v-for="(value,index) in hotMovie">
				<div>
					<img class="img-responsive center-block" :src="value.images.large" />
				</div>
				<div class="caption">
					<!--:title为v-bind的缩写 旨在获取API中的title值赋给title属性-->
					<h4 class="h4 text-center" :title="value.title">{{value.title}}</h4>
					<p class="m-casts"><i class="glyphicon glyphicon-user"></i><a class="u-cast" :href="val.alt" v-for="val in value.casts">{{val.name}}</a></p>
					<p class="m-genres"><i class="glyphicon glyphicon-tags"></i> <span class="text-danger u-genres" v-for="val in value.genres">{{val}}</span> </p>
					<p class="m-time"><i class="glyphicon glyphicon-time"></i><span class="text-success u-time">{{value.year}}</span></p>
					<p class="text-right"><a href="03-detail.html" class="btn btn-info" @click="link(value.id)">查看详情</a></p>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default {

	name: 'vPromise',

	data () {
		return {
			hotMovie: []
		}
	},
	mounted() {
		// 1.验证jquery是否导入成功
		// console.log($)
		// 2.未使用promise 获取豆瓣电影数据
		// this.getDouban()
		// 3.使用promise 获取豆瓣电影数据
		// this.runAsync()
		// 4.promise对象有then,catch方法
		// this.runAsync().then(function(data) {
		// 	//打印出来resolve传来的参数
		// 	console.log(data); 
  	//   	//后面可以用传过来的数据做些其他操作
  	// console.log('111')
		// })
		// 5.链式操作 适用于 多层回调
		let _this = this
		this.runAsync1()
		.then(function(data) {
			console.log(data)
			return _this.runAsync2()
		})
		.then(function(data) {
			console.log(data)
			// return _this.runAsync3() 
			// 也可以返回 数据
			return '泡泡'
		})
		.then(function(data) {
			console.log(data)
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
		// 将promise存放在一个方法里，需要的时候在进行调用
		runAsync() {
			let _this = this
			// resolve：异步操作执行成功后的回调函数； reject：异步操作执行失败后的回调函数
			var p = new Promise(function(resolve, reject) {
				// 做一些异步操作
				_this.getDouban()
				setTimeout(function() {
					console.log('执行完成');
					// resolve('随便什么数据'); //将需要的数据作为resolve参数，调用返回的promise对象，通过then方法获取传入的数据；
					resolve(_this.hotMovie);
				}, 2000)
			})
			// 返回promise对象
			return p;
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
		}
	}
}
</script>

<style lang="css" scoped>
* {
	margin: 0;
	padding: 0;
}
ul,li {
	list-style: none;
}
.m-lst {
	width: 100px;
	overflow: hidden;
	display: inline-block;
	white-space: nowrap;
	margin-right: 30px;
}
</style>