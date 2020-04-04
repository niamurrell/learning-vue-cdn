new Vue({
  el: '#vue-app',
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
  },
  methods: {
    greet: function () { return `Good morning ${this.name}!` },
    addTwo: function () { console.log('addTwo') && (this.bottleCount += 2) },
    minusTwo: function () { console.log('minusTwo') && (this.bottleCount -= 2) },
    addToA: function () { console.log('addToA method'); return this.kombuchaCount + this.a },
    addToB: function () { console.log('addToB method'); return this.kombuchaCount + this.b },
  },
  computed: {
    addToAComputed: function () { console.log('addToA computed function'); return this.kombuchaCount + this.a },
    addToBComputed: function () { console.log('addToB computed function'); return this.kombuchaCount + this.b },
  },
});