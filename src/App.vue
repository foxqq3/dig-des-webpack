<template>
  <div id="app">
 <div class="">tetestset</div>
    <SvgIcon name="browse"></SvgIcon>

  </div>
</template>

<script>
import SvgIcon from '@/components/SvgIcon.vue';

export default {
  components: {
    SvgIcon,
  }
}

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
