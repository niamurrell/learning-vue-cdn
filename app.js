new Vue({
  el: '#vue-app',
  data: {
    name: 'Nonna',
    job: 'Baller',
    website: 'https://www.google.com',
    websiteElement: '<a href="https://www.google.com">Google</a>',
    bottleCount: 11,
    favCountry: 'Iceland',
  },
  methods: {
    greet: function () { return `Good morning ${this.name}!` },
    addTwo: function () { this.bottleCount += 2 },
    minusTwo: function () { this.bottleCount -= 2 },
  }
});