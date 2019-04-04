<template>
<div>
    <app-header></app-header>
    <Levan></Levan>
    <app-footer></app-footer>
</div>
</template>

<script>

import Header from './components/header.vue' ;
import Footer from './components/footer.vue' ;
import Levan from './Levan.vue'

export default {
  components: {
    'app-header':Header ,
    'app-footer':Footer ,
    'Levan':Levan ,
  },

  data () {
    return {
      welcome: "Welcome Text",

    }
  },

}
</script>

<style lang="scss">

</style>
