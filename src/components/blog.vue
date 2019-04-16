<template>

<div class="showget">

  {{ chawere }}

  <input v-model="lev" type="text" name="" value="">
  <button  @click="adelem" type="button" name="button">chawere</button>
  <input v-model="search"  style="width:100%; padding:10px" type="text" name="" value="">
  <div class="addstyle" v-for="showblog in filterblock">
    <router-link v-bind:to="'/blog/' + showblog.id"  exact ><h2 v-changecolor>{{ showblog.title }}</h2></router-link>

    <article>
      {{ showblog.body | limit }}
    </article>
  </div>

</div>



</template>
<script>
export default {
  filters: {
    toUppercase(value) {
      return value.toUpperCase(); // Add Filter By Local
    }
  },

  directives: {
    'changecolor': {
      bind(el, binding, vnode) {
        el.style.color = "#" + Math.random().toString().slice(2,8) // Change Color My Local
      }
    }
  },


  computed: {
    filterblock: function(){
      return this.blogs.filter((blog) => {
        return blog.title.match(this.search);
      });
    }
  },

  data () {
    return {
      blogs: [],
      chawere: [],

      mat: '',
      lev: '',
      search: ''
    }
  },

  methods: {
    adelem: function() {
      this.chawere.push(this.lev);
      console.log(this.chawere);
    },

  },


  created(){

    this.$http.get('https://jsonplaceholder.typicode.com/posts/').then(function(data){
      console.log(data);
      // console.log(data.body[1].title);
    this.blogs = data.body;

    });
  }
}
</script>

<style lang="scss">

  .showget {
    .addstyle {
      background:white;
    }
  }



</style>
