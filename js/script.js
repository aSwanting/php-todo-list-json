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
      if (!this.newTask) {
        return;
      }
      const data = {
        newTask: {
          name: this.newTask,
        },
      };
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
    toggleComplete(i) {
      this.todolist[i].complete = !this.todolist[i].complete;
    },
  },
  created() {
    this.fetchData();
  },
}).mount("#app");
