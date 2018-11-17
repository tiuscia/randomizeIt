<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="RandomizeIt Vue Component"/>
    <br>
    <div class="example">
      <div>
        <span class="title">StartOnLoad</span>
        <code><span><</span>RandomizeIt fromInput="<strong>aaaaaaaaaa</strong>" toInput="<strong>bbbbb</strong>" startOnLoad<span>></span></code>
        <RandomizeIt fromInput="aaaaaaaaaa" toInput="bbbbb" startOnLoad/>
      </div>
      <hr/>
      <div>
        <span class="title">Triggered by <code>toInput</code></span>
        <div class="flex">
          <div class="flex column">
          <code>fromInput</code>
          <input type="text" v-model="from"/>
        </div>
          ==> 
        <div class="flex column">
          <code>toInput</code>
          <input type="text" v-model="toTemp"/>
        </div>
        </div>
        <code><span><</span>RandomizeIt fromInput="<strong>{{this.from}}</strong>" toInput="<strong>{{this.to}}</strong>"<span>></span></code>
        <RandomizeIt :fromInput="from" :toInput="to"></RandomizeIt>
       
        <button class="btn" v-on:click="triggerIt">TRIGGER COMPONENT</button>
        <button class="btn clear" v-on:click="clearString">CLEAR INPUTS</button>
        
      </div>
    </div>
    
    <br><br>
    <div class="randomize-it">
    
    </div>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "app",
  components: {
    HelloWorld
  },
  data() {
    return {
      from: "aaaaa",
      toTemp: "",
      to: ""
    };
  },
  methods: {
    triggerIt: function() {
      this.to = this.toTemp;
    },
    clearString: function() {
      this.from = "";
      this.toTemp = "";
      this.to = "";
    }
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

h1 {
  font-size: 2.5em;
}

.randomize-text {
  font-size: 1.8em;
  padding: 30px 20px;
}

hr {
  width: 80%;
}

.example > div {
  padding: 40px 20px;
}

code {
  background-color: #304960;
  font-size: 1.25em;
  color: #fff;
  padding: 5px 10px;
  margin-bottom: 15px;
  display: inline-block;
}

.title {
  font-size: 2em;
  color: #00bc7e;
  display: block;
  margin-bottom: 30px;
}

.title > code {
  font-size: 1em;
  background-color: #fff;
  color: #00bc7e;
}

.flex {
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
  align-items: center;
}

.column {
  flex-direction: column;
  align-items: center;
  border: 4px solid #00bc7e;
  border-radius: 5px;
  font-size: 1.25em;
  padding: 10px 15px 15px;
  margin: 0 10px;
}

.column > input {
  font-size: 0.7em;
  padding: 5px;
  background-color: #00bc7e;
  border: 1px solid #00bc7e;
  color: #fff;
}

.column code {
  color: #304960;
  background-color: #fff;
  font-size: 1em;
}

.btn {
  text-align: center;
  margin: 25px auto;
  display: block;
  background-color: #00bc7e;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  color: white;
  padding: 10px 15px;
  border-radius: 5px;
  font-size: 1.2em;
  border: 0;
  transition: all 0.5s;
  border: 2px solid #00bc7e;
}

.btn.clear {
  background-color: #de1717;
  font-size: 1em;
  padding: 5px 10px;
  border-color: #de1717;
  margin-top: 0;
}

.btn:hover {
  border: 2px solid #00bc7e;
  cursor: pointer;
  font-weight: 500;
}

.btn.clear:hover {
  border-color: #de1717;
}
</style>
