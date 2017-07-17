<template>
  <div>
    <div class="input-group">
      <div class="input-group-btn">
        <button type="button" class="btn btn-default">T</button>
        <button type="button" class="btn btn-default">O</button>
        <button type="button" class="btn btn-default">D</button>
        <button type="button" class="btn btn-default">O</button>
      </div>
      <input type="text"
        class="form-control"
        aria-label="..."
        id="input__content"
        v-model="newTask.title"
        v-on:keyup.enter="addNewTask"
        placeholder="Tell me what you want to do?">
    </div>
    <div class="btn-group btn-group-justified master-buttons" role="group" aria-label="...">
      <div class="btn-group" role="group">
        <button type="button" @click="clearTasks()" class="btn btn-danger">
          <span class="glyphicon glyphicon-trash" aria-hidden="true"></span>
           Clear all
        </button>
      </div>
      <div class="btn-group" role="group">
        <button type="button" @click="allComplete()" class="btn btn-success">
          <span class="glyphicon glyphicon-saved" aria-hidden="true"></span>
           All complete
       </button>
     </div>

    </div>
    <div class="row">
      <!-- <div class="col-lg-6"
        v-for="(task, index) in tasks"
        v-bind:key="index"
        >
        <div class="input-group" :class="{ 'completed': task.complete }">
          <div class="alert alert-info flex" role="alert">
            <a href="#" class="alert-link" v-show="!task.inEditMode" @click="taskClicked(task)">{{ task.title }}</span></a>
            <input v-model="task.title" @keyup.enter="updateTask(task)" v-show="task.inEditMode" type="text" class="form-control" placeholder="Search for...">
            <span class="input-group-btn" id="secondary">
              <button class="btn btn-default" type="button" @click="taskComplete(task)">Com</button>
              <button class="btn btn-default" type="button" @click="taskInComplete(task)">Inc</button>
              <button class="btn btn-default" type="button" @click="removeTask(index)">Rem</button>
            </span>
          </div>
        </div>
      </div> -->
      <div class="col-lg-6 tasks"
        v-for="(task, index) in tasks"
        v-bind:key="index"
        >
        <ul class="list-group">
          <li class="list-group-item task" v-if="task.complete === true" v-bind:style="{ 'background-color': 'rgb(223,240,216)' }">
            <span class="badge btn btn-danger" @click="removeTask(index)"><i class="glyphicon glyphicon-remove"></i></span>
            <span class="badge btn btn-warning" @click="taskInComplete(task)"><i class="glyphicon glyphicon-thumbs-down"></i></span>
            <span class="badge btn btn-success" @click="taskComplete(task)"><i class="glyphicon glyphicon-thumbs-up"></i></span>
            <span v-show="!task.inEditMode" @click="taskClicked(task)">{{ task.title }}</span>
            <!-- <input v-model="task.title" @keyup.enter="updateTask(task)" v-show="task.inEditMode" type="text" class="form-control" placeholder="Search for..."> -->
            <span><input v-model="task.title" @keyup.enter="updateTask(task)" v-show="task.inEditMode" type="text" class="form-control model-input" placeholder="Search for..."></span>
          </li>
          <li class="list-group-item task" v-else v-bind:style="{ 'background-color': 'rgba(53,120,181,.21)' }">
            <span class="badge btn btn-danger" @click="removeTask(index)"><i class="glyphicon glyphicon-remove"></i></span>
            <span class="badge btn btn-warning" @click="taskInComplete(task)"><i class="glyphicon glyphicon-thumbs-down"></i></span>
            <span class="badge btn btn-success" @click="taskComplete(task)"><i class="glyphicon glyphicon-thumbs-up"></i></span>
            <span v-show="!task.inEditMode" @click="taskClicked(task)">{{ task.title }}</span>
            <!-- <input v-model="task.title" @keyup.enter="updateTask(task)" v-show="task.inEditMode" type="text" class="form-control" placeholder="Search for..."> -->
            <span><input v-model="task.title" @keyup.enter="updateTask(task)" v-show="task.inEditMode" type="text" class="form-control model-input" placeholder="Search for..."></span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      tasks: [
        {
          title: "I want to stay",
          complete: false,
          inEditMode: false
        },
        {
          title: "I want to run away",
          complete: false,
          inEditMode: false
        }
      ],
      newTask: {
        title: '',
        complete: false,
        inEditMode: false
      }
    }
  },
  methods: {
    taskComplete(task) {
      task.complete = true
    },
    taskInComplete(task) {
      task.complete = false
    },
    removeTask(index) {
      this.tasks.splice(index, 1)
    },
    addNewTask() {
      this.tasks.push(this.newTask)
      this.newTask = {
        title: '',
        complete: false
      }
    },
    taskClicked(task) {
      task.inEditMode = true
    },
    updateTask(task) {
      task.inEditMode = false
    },
    clearTasks() {
      this.tasks = []
    },
    allComplete() {
      this.tasks.every(function(task) {
        return task.complete = true
      }) && this.tasks.length > 0
    },
    // clearAllComplete() {
    //   this.tasks.every(function(task, index) {
    //     if (task.complete) {
    //       task.remove
    //     } else {
    //       console.log("No task completed")
    //     }
    //   })
    // }
  }
}
</script>

<style scoped>

.master-buttons {
  margin-top: 15px;
}

/*.completed {
  text-decoration: line-through;
}*/

.title {
  margin-left: 5px;
  vertical-align: middle;
}

.tasks {
  margin-top: 15px;
}

/*.task {
  background-color: rgba(53,120,181,.21);
}*/

.model-input {
  width: 80%;
  height: 21px;
}

</style>
