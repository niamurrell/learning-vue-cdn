Vue.component('greeting', {
  template: '<p>This is a re-usable Vue component by {{ name }}. <button v-on:click="changeName">change name</button></p>',
  // Data MUST be returned from a function, otherwise it won't be reactive!
  // Docs: https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function
  data: function () {
    return {
      name: 'Carmello'
    }
  },
  methods: {
    changeName: function () {
      this.name = 'Anthony!';
    }
  }
});

new Vue({
  el: '#vue-app-one',
  data: {
    name: 'Nonna',
    job: 'Baller',
    website: 'https://www.google.com',
    websiteElement: '<a href="https://www.google.com">Google</a>',
    bottleCount: 11,
    kombuchaCount: 9,
    a: 0,
    b: 0,
    favCountry: 'Iceland',
    availableDemo: false,
    available: false,
    nearby: false,
    success: false,
    error: false,
    success2: false,
    error2: false,
    plants: ['Zamioculcas', 'Pothos', 'English Ivy', 'Boston Fern'],
    puppers: [
      { name: 'Ollie', breed: 'hound' },
      { name: 'Clarebare', breed: 'dachshund' },
      { name: 'Jeevers', breed: 'cocker spaniel' },
    ],
  },
  methods: {
    greet: function () { return `Good morning ${this.name}!` },
    addTwo: function () { console.log('addTwo') && (this.bottleCount += 2) },
    minusTwo: function () { console.log('minusTwo') && (this.bottleCount -= 2) },
    // the console logs are commented to stop them running on every button click:
    addToA: function () { /* console.log('addToA method'); */ return this.kombuchaCount + this.a },
    addToB: function () { /* console.log('addToB method'); */ return this.kombuchaCount + this.b },
  },
  computed: {
    addToAComputed: function () { /* console.log('addToA computed function'); */ return this.kombuchaCount + this.a },
    addToBComputed: function () { /* console.log('addToB computed function'); */ return this.kombuchaCount + this.b },
    computedClasses: function () { return { available: this.available, nearby: this.nearby, } },
  },
});

new Vue({
  el: '#vue-app-two',
  data: {
    title: 'This is another Vue instance!',
    faveColor: 'unknown',
  },
  methods: {
    readRefs: function () {
      this.faveColor = this.$refs.colorInput.value;
    }
  },
});