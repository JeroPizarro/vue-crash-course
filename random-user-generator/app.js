const app = Vue.createApp({
  data() {
    return {
      firstName: 'John',
      lastName: 'Doe',
      email: 'test@test.com',
      gender: 'male',
      picture: 'https://randomuser.me/api/portraits/men/75.jpg',
    };
  },
  methods: {
    async getUser() {
      const res = await fetch('http://randomuser.me/api/');
      const data = await res.json();
      const { results } = data;

      console.log(results);
      this.firstName = results[0].name.first;
      this.lastName = results[0].name.last;
      this.email = results[0].email;
      this.gender = results[0].gender;
      this.picture = results[0].picture.large;
    },
  },
});

app.mount('#app');
