<template>

<div class="membersinfo">

<div class="container">
<input v-if="loadeddata" v-model="searchcar" class="car_model" type="text" placeholder="ჩაწერეთ მანქანის მოდელი..." name="" value="">
<div class="loader" v-if="loader">
  <img src="https://wpamelia.com/wp-content/uploads/2018/11/ezgif-2-6d0b072c3d3f.gif" alt="">
</div>
<!-- <button @click="sendcar" type="button" name="button">Send Data</button> -->
<ul class="carlist">
   <li v-for="car in filtercar"> <span>მარკა:</span> {{ car.Make_Name | Upperall }} </li>
</ul>


</div>
</div>
</template>

<script>

export default {

  data() {
    return {
      carmodels: [],
      searchcar: '',
      loader: true,
      loadeddata: false
    }
  },




computed: {
  filtercar: function(){
    return this.carmodels.filter((car) => {
      return car.Make_Name.match(this.searchcar);
    });
  }
},

created(){
  this.$http.get('https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json').then(function(data){
  this.carmodels = data.body.Results.slice(0,100);
  console.log(this.carmodels);
  this.loader = false;
  this.loadeddata = true;
  });
},

methods: {
  sendcar: function(){
    this.$http.post('https://carhistory-7614c.firebaseio.com/posts.json', this.carmodels).then(function(data){
      console.log(data);
    });
  },

},

filters: {
  toUppercase(value) {
    return value.toUpperCase(); // Add Filter By Local
  }
},


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
.carlist {
  padding:0px;
  margin-top:10px;
  li {
    list-style:none;
    span {
      font-weight:bold;
      margin-right:20px;
    }
  }
}

  .car_model {
    width:100%;
    margin:0 auto;
    padding:10px;
    display:block;
  }
  .loader {
    text-align:center;
    margin:0 auto;
    display:block;
  }
</style>
