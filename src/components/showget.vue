<template>

<div class="showget" v-theme:column="'theme'">
  <div class="addstyle" v-for="showblog in blogs">
    <h2 v-changecolor>{{ showblog.title }}</h2>
    <article>
      {{ showblog.body}}
    </article>
  </div>

</div>



</template>
<script>
export default {

  data () {
    return {
      blogs: [],
      mat: '',
    }
  },

  created(){
    this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function(data){
      console.log(data);
      // console.log(data.body[1].title);
    this.blogs = data.body.slice(0,5);

    });
  }
}
</script>

<style lang="scss">

  .showget {
    .addstyle {
      background:white;
      margin-bottom:20px;
    }
    width:1000px;
    border-top:6px solid black;
    margin-top:50px;
  }



</style>
