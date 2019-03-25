<template>
    <div id="app">
        <MainNavbar></MainNavbar>
        <!-- <div id="nav">
          <router-link to="/">Home</router-link> |
          <router-link to="/about">About</router-link>
        </div> -->
        <router-view/>
    </div>
</template>

<script>
import MainNavbar from '@/components/Navbar.vue'
export default {
    name: 'App',
    components: {
        MainNavbar
    }
}
</script>


<style>
* {
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
