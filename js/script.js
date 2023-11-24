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

      console.log(data);
      axios
        .post("store.php", data, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          console.log(this.newTask);
          this.todolist = res.data.results;
        });
      this.newTask = "";
    },
  },
  created() {
    this.fetchData();
  },
}).mount("#app");
