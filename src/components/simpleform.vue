<template>

<div class="simpleform">

<div v-if="emessage"  class="" style="background:red; color:white; padding:20px; text-align:center; margin-bottom:20px;">
  დაფიქსირდა შეცდომა
</div>

<div v-if="smessage"  style="background:green; color:white; padding:20px; text-align:center; margin-bottom:20px;">
  ინფორმაცია წარმატებით ჩაიწერა
</div>

<form v-if="formshow">
  <input class="formtext" v-model="simpleform.title" placeholder="თქვენი სახელი.." required type="text" name="" value="">
  <input required v-model="simpleform.female" type="text" placeholder="გვარი" name="" value="">
  <input required  v-model="simpleform.place"type="text" placeholder="საცხოვრებელი ადგილი" name="" value="">
  <input required v-model="simpleform.phonenumber" type="number" placeholder="მობილურის ნომერი" name="" value="">
  <select v-model="simpleform.gender">
    <option value="" selected>აირჩიეთ სქესი</option>
    <option value="mamrobiti">მამრობითი</option>
    <option value="mdedrobiti">მდედრობითი</option>
  </select>
  <button @click="senddata" type="button" name="button">გაგზავნა</button>
</form>



</div>
</template>

<script>
export default {

  data() {
    return {
      emessage: false,
      smessage: false,
      formshow: true,
      simpleform: {
        title: '',
        gender: '',
        female: '',
        place: '',
        phonenumber: '',
        date: new Date()
      }

    }
  },

  filters: {
    toUppercase(value) {
      return value.toUpperCase(); // Add Filter By Local
    }
  },


  methods: {
    showAlert(){
      // this.$swal({
      //           title: 'გავგზავნოთ ინფორმაცია?',
      //           text: 'You can\'t revert your action',
      //           type: 'warning',
      //           showCancelButton: true,
      //           confirmButtonText: 'დიახ',
      //           cancelButtonText: 'არა',
      //           showCloseButton: true,
      //           showLoaderOnConfirm: true
      //         }).then((result) => {
      //           if(result.value) {
      //             this.$swal('ყურადღება', 'მონაცემები წარმატებით გაიგზავნა', 'success')
      //           } else {
      //             this.$swal('Cancelled', 'Your file is still intact', 'info')
      //           }
      //         })
            // this.$swal({
            //   title: 'მონაცემები წარმატებით გაიგზავნა',
            //    type: 'success',
            // });
             // this.$swal('Heading', 'this is a Heading', 'OK');
        },

    senddata: function(){

      this.$http.post('https://myvue-baf24.firebaseio.com/posts.json', this.simpleform).then(function(data){
        console.log(data);


        if(data.status == 201) {
          this.emessage = true;
        } else if (data.status == 200) {
          this.$swal({
            title: 'მონაცემები წარმატებით გაიგზავნა',
            type: 'success',
          });
          this.formshow = true;
          this.smessage = false;
        }



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

  .simpleform {
    select {
        width:100%;
        padding:10px;
        margin:0 auto;
        margin-bottom:20px;
        outline:none;
        display:block;
    }
    position:relative;
    padding-top:20px;
    width:100%;


    margin:0 auto;
    button {
     width:100%;
     cursor:pointer;
     margin:0 auto;
     display:block;
     border:none;
     background:red;
     color:white;
     padding:10px;
    }
    input {
      display:block;
      padding:10px;
      width:100%;
      margin:0 auto;
      margin-bottom:20px;
      outline:none;
    }
  }

</style>
