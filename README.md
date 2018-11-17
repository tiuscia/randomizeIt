# RandomizeIt

RandomizeIt is a Vue component. With this component you can create a string animation and generate random chars.

```
<RandomizeIt fromInput="something" toInput="somethingelse" startOnLoad maxSpeed="100" minSpeed="200">
```

#### Props / component attributes

- `maxSpeed` and `minSpeed` are optional. By default the animation speed is between 120-200.
- if you don't use `startOnLoad`, the animation is triggered when `toInput` props changes.

### Demo

[RandomizeIt DEMO](https://tiuscia.github.io/randomizeIt/)

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```
