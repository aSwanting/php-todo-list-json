const { createApp } = Vue;

createApp({
  data() {
    return {
      message: "Hello PHP!",
    };
  },
  methods: {
    data() {
      axios.get("server.php").then((res) => {
        console.log(res.data);
      });
    },
  },
  created() {
    this.data();
  },
}).mount("#app");
