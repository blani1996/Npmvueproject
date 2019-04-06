<template>
<div>
    <app-header></app-header>
    <!-- <showpost></showpost> -->
    <showget></showget>
    <app-footer></app-footer>

</div>
</template>

<script>

import Header from './components/header.vue' ;
import Footer from './components/footer.vue' ;
import showpost from './showpost.vue';
import showget from './components/showget.vue';

export default {
  components: {
    'app-header':Header ,
    'app-footer':Footer ,
    'showpost':showpost ,
    'showget':showget ,
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
