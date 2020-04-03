new Vue({
  el: '#vue-app',
  data: {
    name: 'Nonna',
    job: 'Baller'
  },
  methods: {
    greet: function () {
      return `Good morning ${this.name}!`
    }
  }
});