<template>
  <div id="app">
    <Main>
      <keep-alive>
        <router-view/>
      </keep-alive>
      
    </Main>
    
  </div>
</template>

<script>
import Main from 'pages/main/main.vue'
export default {
  name: 'App',
  components:{
    Main
  }
}
</script>

<style>
</style>
