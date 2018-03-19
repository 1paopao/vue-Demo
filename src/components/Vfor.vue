<template>
	<div class="vfor">
		<ol>
			<li v-for="item in sites"> {{item.name}} </li>
		</ol>

		<ul>
	    <li v-for="value in object">
	    {{ value }}
	    </li>
	  </ul>

	
		<ul>
	    <li v-for="n in 10">
	    {{ n }}
	    </li>
	  </ul>

	  <ul>
	    <li v-for="(value, key, index) in object">
	    	<div v-if="index === '1'">
	     	 {{ key }} : {{ value }}
	     </div>
	     <div v-else>
	     	{{ key }} : {{ value }}
	     </div>
	    </li>
	  </ul>
	</div>
</template>

<script>
export default {

  name: 'Vfor',

  data () {
    return {
    	sites: [
    		{id:'1', name:'wjy', sex:'woman'},
    		{id:'2', name:'wjy2', sex:'woman2'}
    	],
    	object: {
	      name: '菜鸟教程',
	      url: 'http://www.runoob.com',
	      slogan: '学的不仅是技术，更是梦想！'
	    }
    }
  }
}
</script>

<style lang="css" scoped>
</style>