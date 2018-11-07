<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="RandomizedIt Vue Component"/>
    <div class="randomize-it">
    <RandomizeIt fromInput="aaaaaaaaaa" toInput="bbbbb" startOnLoad/>
    </div>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import RandomizeIt from "./components/RandomizeIt.vue";

export default {
  name: "app",
  components: {
    HelloWorld
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.randomize-it {
  font-size: 1.3em;
}
</style>
