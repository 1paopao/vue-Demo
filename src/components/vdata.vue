<template>
	<div id="app">
    <p>取出数组中内容，重组数组</p>
  <button @click="change">Change it</button>
</div>
</template>

<script>

export default {
  name: 'vdata',

  data () {
    return {
    	"articleIdList":[],
    	"recommendDocList":[
        {
            "recommendArticleId":"1188",
            "article":{
                "shareImg":"//img26.st.iblimg.com/content-1/images/webup/776083138.png",
                "channelList":[
                    {
                        "articleId":1188,
                        "channelName":"边看边买",
                        "channelId":4
                    }
                ]
              }
        },
        {
            "recommendArticleId":"1288",
            "article":{
                "shareImg":"//img26.st.iblimg.com/content-1/images/webup/776083138.png",
                "channelList":[
                    {
                        "articleId":1288,
                        "channelName":"边看边买",
                        "channelId":5
                    }
                ]
             }
        },
        {
        	"recommendArticleId":"1388",
            "article":{
                "shareImg":"//img26.st.iblimg.com/content-1/images/webup/776083138.png",
                "channelList":[
                    {
                        "articleId":1288,
                        "channelName":"边看边买",
                        "channelId":6
                    }
                ]
             }
        },
        {
        	"recommendArticleId":"1388",
            "article":{
                "shareImg":"//img26.st.iblimg.com/content-1/images/webup/776083138.png",
                "channelList":[
                    {
                        "articleId":1288,
                        "channelName":"边看边买",
                        "channelId":6
                    }
                ]
             }
        }
    	]
    }
  },

  methods: {
  	change() {
  		console.log(1)
  		// 遍历recommendDocList
  		this.recommendDocList.forEach((obj, index) => {
  			// 取出articleid
  			this.articleIdList.push(obj.recommendArticleId)
  		})

  		// 打印数组
  		console.log(this.articleIdList)
  	}
  }
}
</script>

<style lang="scss" scoped>
</style>