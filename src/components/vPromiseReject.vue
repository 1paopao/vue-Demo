<template>
	<div class="promise-reject">
		vPromiseReject
		<p>promise 失败后的回调； reject</p>
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

	name: 'vPromiseReject',

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
			},
			function(data){
				console.log('失败回调 rejected');
				console.log(data);
				_this.showPao()
			}
		)
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