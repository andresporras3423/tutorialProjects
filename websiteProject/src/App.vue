<template>
  <div>
    <div>
  <b-tabs content-class="mt-3">
    <b-tab title="Tasks" active>
      <taskView ></taskView>
      </b-tab>
    <b-tab title="Projects">
      <projectView ></projectView>
      </b-tab>
    <!-- <b-tab title="Disabled" disabled><p>I'm a disabled tab!</p></b-tab> -->
  </b-tabs>
</div>
    
  </div>
</template>

<script>


export default {
  name: 'app',
  created:function(){
    
  }
  // data: function () {
  //   return {
  //     hello: 'Hello world',
  //   }
  // },
  // methods:{
  //   message: function(){
  //     return "this is my first project in vue.js";
  //   }
  // }
}
</script>

<style>

</style>
