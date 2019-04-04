<template>
  <div>
    <ul>
      <li v-for="shownames, index  in names" @click="shownames.show = !shownames.show">

        {{ shownames.name }}
      <p ref="el" @click="showref(index)">{{ shownames.gender }}</p>
      <p v-show="shownames.show">{{ shownames.position }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      names: [
        {name: 'Levani' , gender: 'male' , position: 'owner', show: "false"},
        {name: 'kote' , gender: 'unknown' , position: 'eveything', show: "false"},
        {name: 'qeta' , gender: 'male' , position: 'sales manager', show: "false"},
        {name: 'Levani' , gender: 'male' , position: 'owner', show: "false"},
        {name: 'Levani' , gender: 'male' , position: 'owner', show: "false"},
      ]

    }
  },

  methods: {
      sometext: function(){
        return "Heyy Success"
      },
      showref:function(index){
        console.log(this.$refs.el[index]);
      },

  }

}
</script>

<style lang="scss">

  ul  {
    display:flex;
    flex-wrap:wrap;
    width:100%;
    padding:0;
    box-sizing:border-box;
    list-style:none;
  }
  li {
    flex:1;
    cursor:pointer;
    text-align:center;
    border:1px solid black;
    padding:50px;
    user-select:none;
  }
</style>
