<template>
  <div id="todo-task" class="container">
    <!-- <h1>{{ title }}</h1> -->
    <div class="panel panel-primary">
      <app-task></app-task>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      title: 'What do you want to do?'
    }
  }
}
</script>

<style>

.container {
  max-width: 700px;
  margin-top: 50px;
}

</style>
