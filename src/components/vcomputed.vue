<template>
	<div class="vcomputed-main">
		<p>{{ even }}</p>
		<p>todolist</p>
		<div class="wrap" id="todos">
		        <input type="text" v-model='nextItem' @keyup.enter='append'>
		        <button id="append" @click='append'>添加</button>
		        <ol>
		            <li v-for='(item,index) of comp' 
		            :key=item.id
		            :class='item.state ? "not" : "done"'>
		                {{item.text}}
		                <i @click='remove(index)'>完成</i>
		            </li>
		        </ol>
		        <button @click='all'>全部</button>
		        <button @click='done'>已完成</button>
		        <button @click='todos'>待完成</button>
		    </div>
	</div>
</template>

<script>
export default {

  name: 'vcomputed',

  data () {
    return {
    	message:[1,2,3,4,5,6],
    	nextItem: '',
    	nextID: 1,
    	list: [],
      type: null
    }
  },
  computed: {
  	even: function() {
  		// 过滤数组，取偶数
  		return this.message.filter((obj, index) => {
  			return obj%2 === 0
  		})
  	},
  	comp:function(){
	      if( this.type === 0 ){
	          return this.list;
	      }
	      else if(this.type === 1){ //show all
	          return this.list.filter(function(item){
	              return true;
	          })
	      }
	      else if(this.type === 2){ //done
	          return this.list.filter(function(item){
	              return item.state ? false : true;
	          })
	      }
	      else if(this.type === 3){ //todos
	          return this.list.filter(function(item){
	              return item.state ? true : false;
	          })
	      }
	  }
  },
  methods: {
  	append: function() {
  		// 添加list
  		this.list.push({
  			id: this.nextID++,
  			text: this.nextItem,
  			state: true
  		})
  		this.nextItem = ''
  		this.type = 0
  	},
  	// 删除
  	remove: function(index) {
  		this.list[index].state = !this.list[index].state
  	},
  	all:function(){
        this.type = 1;
    },
    done:function(){
        this.type = 2;
    },
    todos:function(){
        this.type = 3;
    }
  }
}
</script>

<style lang="scss" scoped>
	.wrap{
	  width: 400px;
	  background-color: #ccc;
	  margin: 0 auto;
	}
	i{
	  color: #f00;
	  font-size: 12px;
	  margin-left: 20px;
	  cursor: pointer;
	}
	i:hover{
	  font-weight: 700;
	}
	ol{
	  /*white-space: nowrap;*/
	  word-wrap:break-word;
	}
	.done{
	  text-decoration: line-through;
	}
	.not{

	}
</style>