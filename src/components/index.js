import Vue from "vue";
import RandomizeIt from "./RandomizeIt.vue";

const Components = {
    RandomizeIt
};

Object.keys(Components).forEach(name => {
    Vue.component(name, Components[name]);
});

export default Components;