<template>
  <div id="app">
    <img alt="Vue logo" :src="img">
    <Demo/>
    <ul>
      <Book v-for="(b,index) in books" v-bind:key="index" v-bind:title="b.name" v-bind:rating="b.rating"></Book>
    </ul>
    <Books/>

    <router-link to="/discovery">发现音乐</router-link>
    <router-link to="/friends">关注好友</router-link>
    <router-link to="/my">我的音乐</router-link>
    <router-view></router-view>


    
    
  </div>
</template>

<script>
import Demo from './components/Demo.vue'
import Book from './components/Book.vue'
import Books from './components/Books.vue'
import './mock/index.js'
export default {
  name: 'App',
  components: {
    Demo,
    Book,
    Books
  },
  data() {
    return {
      img:"",
      books:[
        {id:1,name:"java 编程思想",rating:8.7},
        {id:1,name:"go 编程思想",rating:7.7},
        {id:1,name:"python 并发编程",rating:8.1}
      ]
    }
  },
  created() {
    this.$http.get('/product/show').then(resp => {
      console.log(resp.data.data.img)
      this.img = resp.data.data.img
    })
  }
}
</script>

<style  >

</style>
