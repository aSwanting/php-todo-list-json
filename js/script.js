const { createApp } = Vue;

createApp({
  data() {
    return {
      title: "PHP Todo List",
      todolist: "",
      newTask: "",
    };
  },
  methods: {
    fetchData() {
      axios.get("server.php").then((res) => {
        this.todolist = res.data.results;
      });
    },
    addTask() {
      console.log(this.newTask);
      this.newTask = "";
    },
  },
  created() {
    this.fetchData();
  },
}).mount("#app");
