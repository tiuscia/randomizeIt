<template>
  <div class="randomize-text">
    {{this.randomized}}
  </div>
</template>

<script>
const defaultStyles = {
  left: 0,
  right: 0
};

export default {
  props: {
    fromInput: String,
    toInput: String,
    startOnLoad: Boolean,
    maxSpeed: String,
    minSpeed: String
  },
  data() {
    return {
      tempArr: [],
      fromArr: [], // store string from
      toArr: [], // store string to
      randomized: ""
    };
  },
  methods: {
    init() {
      let from = this.fromInput;
      // reset the array in case we run again the doIt function
      this.tempArr = [];
      this.fromArr = [];
      this.toArr = [];

      if (this.fromInput.length < this.toInput.length) {
        // add random char in order to have 2 strings of the same length
        from = this.fromInput.padEnd(this.toInput.length, " ");
      }

      // string to array
      this.fromArr = from.split("");
      this.toArr = this.toInput.split("");

      // create randomizeArr o = old index, n = new index
      this.fromArr.map((letter, k) => {
        this.tempArr.push({
          o: letter,
          k
        });
      });

      this.toArr.map((i, k) => {
        this.tempArr[k].n = i;
      });

      setTimeout(() => {
        this.doIt(this.tempArr);
      }, 200);
    },
    doIt(tempArr) {
      let ar = this.makeRandom(tempArr);
      let changeLetter = ar.letterToChangeObj;
      let maxSpeed = parseInt(this.maxSpeed) || 200;
      let minSpeed = parseInt(this.minSpeed) || 120;
      this.changeValue(changeLetter);

      if (ar.newArr.length) {
        setTimeout(() => {
          this.doIt(Object.freeze(ar.newArr));
        }, this.getRandomInt(minSpeed, maxSpeed));
      }
    },
    makeRandom(arr) {
      // it takes one random letter from the given array
      // and return the given array witout the letter removed and the random letter
      const randNumber = this.getRandomInt(0, arr.length - 1);
      const letterToChangeObj = this.pluck(arr, randNumber);
      const newArr = arr.filter((i, k) => k !== randNumber);
      return { letterToChangeObj, newArr };
    },
    getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    changeValue(letterToChange) {
      // random shits to add
      let t = this.fromArr;
      t[letterToChange.k] = letterToChange.n || " ";
      this.randomized = t.join("");
    },
    pluck(arr, index) {
      return arr[index];
    }
  },
  watch: {
    toInput: function(newValTo, oldValTo) {
      if (this.fromInput && this.toInput) {
        this.init();
      }
    }
  },
  mounted: function() {
    this.randomized = this.fromInput;
    if (this.startOnLoad && this.fromInput && this.toInput) {
      this.init();
    }
  }
};
</script>

<style scoped>
</style>
