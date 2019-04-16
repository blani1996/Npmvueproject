<template>

<div class="membersinfo">

<div class="container">

<div class="table" v-for="member in members">
    <div class="head">სახელი</div>
    <div class="bottom">
      {{member.title}}
    </div>
    <div class="head">გვარი</div>
    <div class="bottom">
{{member.female}}
    </div>
    <div class="head">საცხოვრებელი ადგილი</div>
    <div class="bottom">
{{member.place}}
    </div>
    <div class="head">მობილურის ნომერი</div>
    <div class="bottom">
{{member.phonenumber}}
    </div>
    <div class="head">სქესი:</div>
    <div class="bottom">
{{member.gender}}
    </div>
</div>

</div>

</div>
</template>

<script>
export default {

  data() {
    return {
      // memberinfo: {
      //   members: [],
      //   title: '',
      //   female: 'kapanadze',
      //   place: '',
      //   phonenumber: '',
      //   gender: ''
      // }
      members: [],
    }
  },

  filters: {
    toUppercase(value) {
      return value.toUpperCase(); // Add Filter By Local
    }
  },

created(){
  this.$http.get('https://myvue-baf24.firebaseio.com/posts.json').then(function(data){
    this.members = data.body;

  });
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
@mixin grid($cols, $mgn) {
  float:left;
  margin-right: $mgn;
  margin-bottom: $mgn;
  width: ((100% - (($cols - 1) * $mgn)) / $cols );
  &:nth-child(#{ $cols }n) {
    margin-right:0;
  }
}

  .table {
    display:inline-block;
    padding:10px;
    @include grid(4,1);
    .head  {
      border:1px solid white;
      line-height:30px;
      text-align:center;
      color:white;
      font-weight:bold;
      background:green;
    }
    .bottom {
        background:#919a91;
        text-align:center;
        font-weight:normal;
    }
  }
</style>
