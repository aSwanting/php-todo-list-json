const { createApp } = Vue;

createApp({
  data() {
    return {
      title: "PHP Todo List",
      todolist: "",
    };
  },
  methods: {
    fetchData() {
      axios.get("server.php").then((res) => {
        this.todolist = res.data.results;
      });
    },
  },
  created() {
    this.fetchData();
  },
}).mount("#app");
