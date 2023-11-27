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
      const newTask = this.newTask.trim();
      this.newTask = "";

      if (!newTask) {
        return;
      }

      const data = {
        case: "addTask",
        newTask: {
          name: newTask,
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
    },

    // Task Toggle Update
    toggleComplete(i) {
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

    // Delete Task
    removeTask(i) {
      const data = {
        case: "deleteTask",
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
