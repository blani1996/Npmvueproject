<template>
  <footer>
    <h4>{{ fttext }}</h4>
    <p>This is a Footer Section</p>
  </footer>
</template>

<script>
export default {

  data () {
    return {
      fttext: 'Footer Section',
    }
  },
}
</script>

<style>
body {
  padding:0;
  margin:0;
}
footer {
    background:black;
    width:100%;
    padding:1px;
    color:white;
    text-align:center;
}
</style>
