<template>
  <header>
    <h1>Header</h1>
    <p>This is a Header Position</p>

    <nav>
      <ul>
        <li><router-link to="/" exact >Show Post</router-link></li>
        <li><router-link to="/add" exact > Show Get</router-link></li>
      </ul>
    </nav>
  </header>

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
body {
  padding:0;
  margin:0;
}
  header {
    ul {
      li {
        a {
          text-decoration:none;
        }
        list-style:none;
        display:inline-block;
        padding:10px;
        .router-link-active {
          color:green;
        }
      }
    }
    width:100%;
    background:red;
    padding:10px;
    text-align:center;
  }
</style>
