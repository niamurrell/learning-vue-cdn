new Vue({
  el: '#vue-app',
  data: {
    name: 'Nonna',
    job: 'Baller',
    website: 'https://www.google.com',
    websiteElement: '<a href="https://www.google.com">Google</a>',
  },
  methods: {
    greet: function () {
      return `Good morning ${this.name}!`
    }
  }
});