<template>
<div>
    <app-header></app-header>


      <div class="col-lg-12">
        <div class="container">
          <div class="row">
            <div class="calc-height">
              <router-view></router-view>
            </div>
          </div>
        </div>
      </div>


    <!-- <showpost></showpost> -->
    <!-- <showget></showget> -->
    <app-footer></app-footer>
</div>
</template>

<script>

import Header from './components/header.vue' ;
import Footer from './components/footer.vue' ;
import showget from './components/showget.vue';
import errorpage from './components/errorpage.vue';
import blog from './components/blog.vue';
import blogfull from './components/blogfull.vue';
import simpleform from './components/simpleform.vue';
import membersinfo from './components/membersinfo.vue'
export default {
  components: {
    'app-header':Header ,
    'app-footer':Footer ,
    'showget':showget ,
    'errorpage':errorpage,
    'simpleform':simpleform,
    'membersinfo':membersinfo
  },

  data () {
    return {
      welcome: "Welcome Text",


    }
  },

}
</script>

<style lang="scss">
  .calc-height {
    width:100%;
    padding:10px;
    min-height: calc(100vh - 78px - 60px - 30px);
  }
</style>
