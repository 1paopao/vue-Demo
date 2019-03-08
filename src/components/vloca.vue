<template>
	<div class="box">
		11111
		<div id="container" class="container"></div>
	</div>
</template>

<script>
export default {

	name: 'vloca',

	data () {
		return {

		}
	},
	mounted() {
  	// 创建map
  	var map = Loca.create('container', {
  		mapStyle: 'amap://styles/whitesmoke',
  		zoom: 4,
  		center: [107.4976, 32.1697]
  	})

  	// 创建图层
  	var layer = Loca.visualLayer({
  		eventSupport: true,
  		container: map,
  		type: 'point',
  		shape: 'circle'
  	})

  	// 弹窗
  	var infoWin

  	layer.on('click', function (ev) {
  		if (!infoWin) {
  			infoWin = new AMap.InfoWindow();
  		}
  		// 事件类型
  		var type = ev.type;
      // 当前元素的原始数据
      var rawData = ev.rawData;
      // 原始鼠标事件
      var originalEvent = ev.originalEvent;
      var lnglat = ev.lnglat;
      console.log('事件类型 ' + type);
      console.log('原始数据 ' + JSON.stringify(rawData));
      console.log('鼠标事件 ' + originalEvent);

      infoWin.setContent(rawData.name + '<br/>' + rawData.center);
      infoWin.open(map.getMap(), new AMap.LngLat(lnglat[0], lnglat[1]));
    })

    layer.setData(districts, {
    	lnglat: 'center'
    })

    layer.setOptions({
      style: {
          radius: 10,
          fill: 'rgba(100, 100, 233, 0.6)',
          lineWidth: 1,
          stroke: '#eee'
      }
    })

   layer.render()
  }
}
</script>

<style lang="css" scoped>
</style>