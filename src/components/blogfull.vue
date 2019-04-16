<template>

<div class="showget">

<h1>{{ this.item.title }}</h1>
<article class="">
  {{ this.item.body }}
</article>

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
      id: this.$route.params.id,
      item: {},
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

    this.$http.get('https://jsonplaceholder.typicode.com/posts/' + this.id).then(function(data){
      console.log(data);
      // console.log(data.body[1].title);
    this.item = data.body;

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
  }



</style>
