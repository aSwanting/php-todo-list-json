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
      if (!this.newTask) return;

      console.log(this.newTask);
      const data = { newTask: this.newTask };
      axios
        .post("store.php", data, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          this.todolist = res.data.results;
        });
      this.newTask = "";
    },
  },
  created() {
    this.fetchData();
  },
}).mount("#app");
