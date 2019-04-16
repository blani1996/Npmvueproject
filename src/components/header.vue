<template>
  <!-- <header>
    <h1>Header</h1>
    <p>This is a Header Position</p>

    <nav>
      <ul>
        <li><router-link to="/" exact >Show Post</router-link></li>
        <li><router-link to="/add" exact >წევრის დამატება</router-link></li>
        <li><router-link to="/membersinfo" exact >სიის ნახვა</router-link></li>
        <li><router-link to="/blog" exact > All Blog</router-link></li>
        <li><router-link to="/car" exact >Car</router-link></li>
        <li><router-link to="/addsadasd" exact >Error page</router-link></li>
      </ul>
    </nav>
  </header> -->


<div class="container-fluid">
<div class="row">
<header>
  <div class="container">
    <div class="header">
      <div class="logo">
        VueProject
      </div>
      <div class="categories">
        <ul>
          <li><router-link to="/" exact >Show Post</router-link></li>
          <li><router-link to="/add" exact >წევრის დამატება</router-link></li>
          <li><router-link to="/membersinfo" exact >სიის ნახვა</router-link></li>
          <li><router-link to="/blog" exact > All Blog</router-link></li>
          <li><router-link to="/car" exact >Car</router-link></li>
          <li><router-link to="/addsadasd" exact >Error page</router-link></li>
        </ul>
      </div>
      <div class="">
        ss
      </div>
    </div>
  </div>
</header>
</div>
</div>


</template>
<script>
export default {

  data () {
    return {

    }
  },
}
</script>

<style lang="scss">
 $ten_px: 10px;

 .lr {
   padding-left:$ten_px;
   padding-right:$ten_px;
 }

.header {
  .logo {
    font-size:24px;
  }
  div {
    flex-grow: 2;
  }
  color:white;
  display:flex;
  justify-content:space-between;

  height:60px;
  line-height:60px;
  .categories {
    ul {
      padding:0px;
      li {
        display:inline-block;
        a {
          color:white;
          display:block;
          @extend .lr;
          text-decoration:none;
        }
      }
    }
  }
}

  header {
    width:100%;
    background:#24303E;
    margin-bottom:30px;
    ul {
      li {
        .router-link-active {
          color:green;
        }
      }
    }
    width:100%;

  }
</style>
