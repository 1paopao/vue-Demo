<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!-- 加载loading组件 -->
    <Loading :messageone="title" @data="getdata"></Loading>
    <p>dadaadda:{{ this.i }}</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to paopao',
      title: 'this is title',
      i: ''
    }
  },
  methods: {
    getdata(msg) {
      console.log('msg', msg)
      this.i = msg
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
