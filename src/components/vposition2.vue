<template>
	<div class="position-box">
		position
		<p>2.test map</p>
		<div id="container"></div>  
		<br>	
<!-- 
		<p>2.test 定位</p>
		<div id="iCenter"></div>  --> 
	</div>
</template>

<script>
export default {

  name: 'vposition',

  data () {
    return {
      map: {},
      booknum: 10
    }
  },
  methods: {

    // 画地图
    showMap() {
      var that = this
      if (AMap && AMap.Map) {
        var map = new AMap.Map('container', {
          viewMode:'3D',
          defaultCursor:'pointer',
          expandZoomRange:true,
          zooms:[3,6],
          pitch:10, //视角
          zoom:3.8,
          center:[109,32]
           // resizeEnable: true,
           //  viewMode:"3D",
           //  zoom:3.6,
           //  center:[108,32] 
         })

        var object3Dlayer = new AMap.Object3DLayer({zIndex:110,opacity:1});
        map.add(object3Dlayer)

        var lines = new AMap.Object3D.Line();
        var lineGeo = lines.geometry;

        // 显示图标
        new AMap.DistrictSearch({
          subdistrict: 1,   //返回下一级行政区
          extensions:'base'
        }).search('中国', function(status, result) {
          var provinces = result.districtList[0].districtList;
          var points3D = new AMap.Object3D.RoundPoints();
          points3D.transparent = true
          var pointsGeo = points3D.geometry

          for(var p=0;p<provinces.length;p+=1){
            var lnglat = map.lngLatToGeodeticCoord(provinces[p].center)
            // var latx = AMap.Util.format(lnglat.x,3)
            // var lngy = AMap.Util.format(lnglat.y,3)
            var center = lnglat
            var size = Math.max(10,Math.round(Math.random()*40))
            var height = -size * 100000;

            lineGeo.vertices.push(center.x,center.y , 0)//连线
            lineGeo.vertexColors.push(0,1,1,1)
            lineGeo.vertices.push(center.x,center.y , height)
            lineGeo.vertexColors.push(0,1,1,1)

            pointsGeo.vertices.push(center.x,center.y , 0);//尾部小点
            pointsGeo.pointSizes.push(5);
            pointsGeo.vertexColors.push(0,0,1,1)

            pointsGeo.vertices.push(center.x,center.y , height);//空中点
            pointsGeo.pointSizes.push(size);
            pointsGeo.vertexColors.push(p*0.029,p*0.015,p*0.01,1)
          }
          points3D.borderColor=[0.4,0.8,1,1];
          points3D.borderWeight = 3;
          object3Dlayer.add(lines)
          object3Dlayer.add(points3D)
        })

        // 显示窗口
        var infoWindow = new AMap.InfoWindow({offset: new AMap.Pixel(0, -30)})

        // 标记点
        // var marker = new AMap.Marker({
        //    // position: [116.368904, 39.923423],
        //    map: map
        //  })
        // marker.content = '我是泡泡Marker';
        // marker.on('click', markerClick);
        // marker.emit('click', {target: marker});
        // marker.setAnimation('AMAP_ANIMATION_BOUNCE');

        map.on('click', markerClick1);

        function markerClick1(e) {
          infoWindow.setContent('馆藏图书供'+ that.booknum + '册')
          infoWindow.open(map, [e.lnglat.getLng(), e.lnglat.getLat()])
        }

        function markerClick(e) {
          console.log(e.target.content)
          infoWindow.setContent(e.target.content);
          infoWindow.open(map, e.target.getPosition());
        }
        // map.setFitView();
      }
    }
  },
  mounted() {
    this.showMap()
  }
}
</script>

<style lang="scss" src="./css/_vpositions.scss" scoped></style>