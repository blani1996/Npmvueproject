<template>
<div id="blog">


<form v-if="!submitted">
  <label>Blog Title:</label>
  <input v-model.lazy="blog.blogtitle" type="text" name="" value="">
  <label>Blog content:</label>
  <textarea v-model="blog.blogcontent" name="name" rows="8" cols="80"></textarea>
  <div class="checkboxes">
    <input id="levan" type="checkbox" value="levan" v-model="blog.blogarray">
    <label for="levan">levan</label>
    <input id="giorgi" type="checkbox" value="giorgi" v-model="blog.blogarray">
    <label for="giorgi">giorgi</label>
    <input id="kote" type="checkbox" value="kote" v-model="blog.blogarray">
    <label for="kote">kote</label>
    <input id="qeta" type="checkbox" value="qeta" v-model="blog.blogarray">
    <label for="qeta">qeta</label>
    {{ blog.blogarray }}
  </div>
  <label>Author:</label>
  <select v-model="blog.author">
  <option v-for="showa in authors"> {{ showa }}</option>
  </select>
  <p>You choosed: {{ blog.author }}</p>

<button @click.prevent="senddata">Send data</button>
</form>

<div v-if="submitted">
  <h1>Success</h1>
</div>

  <div class="preview">
    <label>Show Me Blog Title: {{ blog.blogtitle }}</label>
    <label>Show Me Blog Content: {{ blog.blogcontent }}</label>
    <ul>
      <li v-for="cate in blog.blogarray"> {{ cate }} </li>
    </ul>
  </div>



  <ul>
      <li v-for="shownames, index  in names" @click="shownames.show = !shownames.show">

        {{ shownames.name }}
      <p ref="el" @click="showref(index)">{{ shownames.gender }}</p>
      <p v-show="shownames.show">{{ shownames.position }}</p>
      </li>
    </ul>
    <button @click="dlt">Delete This</button>
</div>
</template>

<script>
export default {

  data() {
    return {
      blog: {
        blogtitle: '',
        blogcontent: '',
        blogarray: [],
        author: ''
      },

      authors: [
        'levani', 'petre', 'pavle'
      ],

      names: [{
          name: 'Levani',
          gender: 'male',
          position: 'owner',
          show: "false"
        },
        {
          name: 'kote',
          gender: 'unknown',
          position: 'eveything',
          show: "false"
        },
        {
          name: 'qeta',
          gender: 'male',
          position: 'sales manager',
          show: "false"
        },
        {
          name: 'Levani',
          gender: 'male',
          position: 'owner',
          show: "false"
        },
        {
          name: 'Levani',
          gender: 'male',
          position: 'owner',
          show: "false"
        },
      ],

      submitted: false

    }
  },

  filters: {
    toUppercase(value) {
      return value.toUpperCase(); // Add Filter By Local
    }
  },


  methods: {

    senddata: function(){
      this.$http.post('https://jsonplaceholder.typicode.com/posts', {
        title: this.blog.blogtitle,
        body: this.blog.blogcontent,
        userId: 1,
      }).then(function(data){
        console.log(data);
        this.submitted = true
      });
    },

    sometext: function() {
      return "HeyySuccess"
    },
    dlt: function() {
      this.names.pop();
    },

    showref: function(index) {
      console.log(this.$refs.el[index]);
    },

  }

  // beforeCreate(){
  //   alert("before Create");
  // },
  // created(){
  //   alert("created");
  // },
  //
  // beforeMount(){
  //   alert("Before Mount");
  // },
  //
  // mounted(){
  //   alert("Mounted");
  // },
  //
  // beforeUpdate(){
  //   alert("before Update");
  // },
  //
  // updated(){
  //   alert("updated");
  // },



}
</script>

<style lang="scss">

.checkboxes {
  display:flex;
  input {
    margin-right:10px;
  }
}

.preview {
  border: 1px solid red;
  background:#fffc;
  padding:30px;
  margin-top:10px;
}
#blog {
    min-height:100vh;
    padding:50px;
    margin: 0 auto;
    label {
        display:block;
    }
    textarea {
      width:100%;
      resize:none;
    }
}

// ul {
//     display: flex;
//     flex-wrap: wrap;
//     width: 100%;
//     padding: 0;
//     box-sizing: border-box;
//     list-style: none;
// }
// li {
//     flex: 1;
//     cursor: pointer;
//     text-align: center;
//     border: 1px solid black;
//     padding: 50px;
//     user-select: none;
// }
</style>
