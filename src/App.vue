<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import HomePage from './pages/HomePage.vue';
export default {
  name: 'App',
  components: { AppHeader }
}

</script>

<template>
  <AppHeader />
  <RouterView />
</template>


<style lang="scss">
@use './assets/styles/style.scss';
</style>  