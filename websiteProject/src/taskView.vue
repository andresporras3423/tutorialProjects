<template>
 <div>
    <div class="col-md-6">
        <div class="col-md-12">
            <label class="col-md-5">Task description:</label>
            <input class="col-md-5" :disabled="readData" type="text" v-model="descTask"/>
        </div>
        <div class="col-md-12">
            <label class="col-md-5" style="display: inline-block;">Task project:</label>
            <select class="form-control col-md-5" style="display: inline-block;" :disabled="readData" v-model="codeProject">
                                <option v-for="(p, index) in listProjects" v-bind:key="index" :value=p.code>{{p.code}}</option>
                            </select>
            <!-- <input class="col-md-5" :disabled="readData" type="text" v-model="codeProject" /> -->
        </div>
        <div class="col-md-12">
            <label ref="lab" class="col-md-5" style="display: inline-block;">Task state:</label>
            <select class="form-control col-md-5" style="display: inline-block;"  id="state" :disabled="readData" v-model="stateTask">
                                <option value="0">pending</option>
                                <option value="1">in progress</option>
                                <option value="2">finished</option>
                            </select>
            
            
            <!-- <input class="col-md-5" :disabled="readData" type="text" v-model="stateTask" /> -->
        </div>
        <div class="col-md-12">
            <label class="col-md-5">Task code:</label>
            <input class="col-md-5" :disabled="readData || currentIndex!=-1" type="text" v-model="codeTask" />
        </div>
        <div class="col-md-12">
            <button class="col-md-5 btn btn-primary"  @click="saveTask()">save</button>
            <button class="col-md-5 btn btn-primary"  @click="clearFormTask()">clear</button>
        </div>
    </div>
    <table>
        <thead>
            <th>code</th>
        </thead>
        <tbody>
            <tr v-for="(t, index) in listTasks" v-bind:key="index">
                <td>{{t.code}}</td>
                <td><button type="submit" class="btn btn-primary" @click="readTask(index)">show</button></td>
                <td><button type="submit" class="btn btn-primary" @click="updateTask(index)">update</button></td>
                <td><button type="submit" class="btn btn-primary" @click="deleteTask(index)">delete</button></td>
            </tr>
        </tbody>
    </table>
</div>
</template>

<script>
import {taskController} from '../src/controller/taskController';
import {projectController} from '../src/controller/projectController';
import {EventBus} from '../src/events/event-bus'
export default {
  name: 'tasks',
  created:function(){
    this.listProjects = this.pProject.getProjects();
    this.listTasks=this.tTask.getTasks();
  },
  data: function () {
    return {
        tTask: new taskController(),
        pProject: new projectController(),
        listTasks: [],
        codeTask:"",
        descTask:"",
        stateTask:"0",
        codeProject:"",
        currentIndex:-1,
        readData:false,
        listProjects:[]
    }
  },
  methods:{
      saveTask: function(){
          this.tTask.saveTask(this.codeTask, this.descTask, this.stateTask, this.codeProject, this.currentIndex);
          this.clearFormTask();
      },
      readTask: function(index){
          var nTask = this.tTask.getTask(index);
        //   EventBus.$emit('addTodo', nTask.codeProject);
          this.$eventBus.$emit('addTodo', nTask.codeProject);
          this.fillFormTask(nTask.code, nTask.description,nTask.state, nTask.codeProject);
          this.readData=true;
      },
      deleteTask: function(index){
          this.tTask.deleteTask(index);
          this.clearFormTask();
      },
      updateTask: function(index){
          var nTask = this.tTask.getTask(index);
          this.fillFormTask(nTask.code, nTask.description,nTask.state, nTask.codeProject);
          this.currentIndex=index;
        //   this.pController.updateProject(this.nameProject, this.directorProject, index);
        //   this.fillFormProject("","");
      },
      fillFormTask: function(code, description, state, codeProject){
          this.codeTask = code;
          this.descTask=description;
          this.stateTask=state;
          this.codeProject=codeProject;
          this.currentIndex=-1;
          this.readData=false;
      },
      clearFormTask: function(){
        this.fillFormTask("","","0","");
      }
  }
}
</script>

<style>

</style>
