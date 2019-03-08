<template>
	<div class="position-box">
		position
		<p>1.test map</p>
		<div id="container"></div>  
		<br>	

		<p>2.test 定位</p>
		<div id="iCenter"></div>  
	</div>
</template>

<script>
export default {

  name: 'vposition',

  data () {
    return {

    }
  },
  methods: {
  	// 1.test map
  	testmap: function() {
  		var map = new AMap.Map('container',{
          resizeEnable: true,
          zoom: 10,
          center: [116.480983, 40.0958]
      })
  	},
  	// 2.test 定位
  	testposition: function() {
  		var mapObj = new AMap.Map('')
  		mapObj.plugin('AMap.Geolocation', function () {
  		    let geolocation = new AMap.Geolocation({
  		        enableHighAccuracy: true,//是否使用高精度定位，默认:true
  		        timeout: 3,          //超过10秒后停止定位，默认：无穷大
  		        maximumAge: 0          //定位结果缓存0毫秒，默认：0
  		    });
  		    mapObj.addControl(geolocation);
  		    geolocation.getCurrentPosition();
  		    AMap.event.addListener(geolocation, 'complete',function (res) {
  		    		console.log(res.position)
  		    		// 纬度
  		    		console.log(res.position.lng) 
  		    		// 经度
  		    		console.log(res.position.lat) 
  		    });//返回定位信息
  		    // AMap.event.addListener(geolocation, 'error', onError);      //返回定位出错信息
  		});
  	}
  },
  mounted() {
  	this.testmap()
  	this.testposition()
  }
}
</script>

<style lang="css" scoped>
	#container {
	  width: 100%;
	  height: 180px;
	}
	#iCenter {
	  width: 100%;
	  height: 180px;
	  border: 1px solid #ddd;
	}
</style>