const { createApp } = Vue;

createApp({
  data() {
    return {
      message: "Hello PHP!",
    };
  },
  methods: {
    fetchData() {
      axios.get("server.php").then((res) => {
        console.log(res.data.results);
      });
    },
  },
  created() {
    this.fetchData();
  },
}).mount("#app");
