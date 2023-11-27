const { createApp } = Vue;

createApp({
  data() {
    return {
      title: "Todo",
      todolist: "",
      newTask: "",
      newSubTask: [],
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

    // New Sub Task
    addSubTask(i) {
      const newSubTask = this.newSubTask[i].trim();
      this.newSubTask = [];

      if (!newSubTask) {
        return;
      }

      const data = {
        case: "addSubTask",
        taskIndex: i,
        newTask: newSubTask,
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

    // SubTask Toggle Update
    toggleSubComplete(i, si) {
      const data = {
        case: "toggleSubTask",
        taskIndex: i,
        subtaskIndex: si,
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

    // Delete SubTask
    removeSubTask(i, si) {
      const data = {
        case: "deleteSubTask",
        taskIndex: i,
        subtaskIndex: si,
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

    // Print subtask count
    subTasks(item) {
      let substasksDone = 0;
      if (item.subtasks) {
        const substasksTodo = item.subtasks.length;
        item.subtasks.forEach((element) => {
          if (element.complete === true) {
            substasksDone += 1;
          }
        });

        if (substasksTodo) {
          return `(${substasksDone} / ${substasksTodo})`;
        }
      }
    },
  },
  created() {
    this.fetchData();
  },
}).mount("#app");
