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
    // Inital Data Fetch
    fetchData() {
      axios.get("server.php").then((res) => {
        this.todolist = res.data.results;
      });
    },

    // New Task Data Fetch
    addTask() {
      if (!this.newTask) {
        return;
      }
      const data = {
        case: "addTask",
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

    // Task Toggle Update
    toggleComplete(i) {
      // this.todolist[i].complete = !this.todolist[i].complete;

      const data = {
        case: "toggleTask",
        taskIndex: i,
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
    },
  },
  created() {
    this.fetchData();
  },
}).mount("#app");
