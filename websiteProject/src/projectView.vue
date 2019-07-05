<template>
<div>
    <div class="col-md-6">
        <div class="col-md-12">
            <label class="col-md-5">Project name:</label>
            <input class="col-md-5" :disabled="readData" type="text" v-model="nameProject"/>
        </div>
        <div class="col-md-12">
            <label class="col-md-5">Project director:</label>
            <input class="col-md-5" :disabled="readData" type="text" v-model="directorProject" />
        </div>
        <div class="col-md-12">
            <label class="col-md-5">Project code:</label>
            <input class="col-md-5" :disabled="readData || currentIndex!=-1" type="text" v-model="codeProject" />
        </div>
        <div class="col-md-12">
            <button class="col-md-5 btn btn-primary"  @click="saveProject()">save</button>
            <button class="col-md-5 btn btn-primary"  @click="clearFormProject()">clear</button>
        </div>
    </div>
    <table>
        <thead>
            <th>code</th>
        </thead>
        <tbody>
            <tr v-for="(p, index) in listProjects" v-bind:key="index">
                <td>{{p.code}}</td>
                <td><button type="submit" class="btn btn-primary" @click="readProject(index)">show</button></td>
                <td><button type="submit" class="btn btn-primary" @click="updateProject(index)">update</button></td>
                <td><button type="submit" class="btn btn-primary" @click="deleteProject(index)">delete</button></td>
            </tr>
        </tbody>
    </table>
</div>
    
</template>

<script>
import {projectController} from '../src/controller/projectController';
import {EventBus} from '../src/events/event-bus'
export default {
  name: 'projects',
  created:function(){
    this.listProjects=this.pController.getProjects();
//     EventBus.$on('addTodo', (cod) => {
//         this.readProjectByCod(cod);
//   console.log(cod);
// });
this.$eventBus.$on('addTodo', (cod) => {
        this.readProjectByCod(cod);
  console.log(cod);
});
  },
  data: function () {
    return {
        pController: new projectController(),
        listProjects: [],
        codeProject:"",
        nameProject:"",
        directorProject:"",
        currentIndex:-1,
        readData:false
    }
  }
  ,
  methods:{
      saveProject: function(){
          this.pController.saveProject(this.codeProject, this.nameProject, this.directorProject, this.currentIndex);
          this.clearFormProject();
      },
      readProject: function(index){
          var nProject = this.pController.getProject(index);
          this.fillFormProject(nProject.code, nProject.name,nProject.director);
          this.readData=true;
      },
      readProjectByCod: function(cod){
          var nProject = this.pController.getProjectByCod(cod);
          this.fillFormProject(nProject.code, nProject.name,nProject.director);
          this.readData=true;
      }
      ,
      deleteProject: function(index){
          this.pController.deleteProject(index);
          this.clearFormProject();
      },
      updateProject: function(index){
          var nProject = this.pController.getProject(index);
          this.fillFormProject(nProject.code, nProject.name,nProject.director);
          this.currentIndex=index;
        //   this.pController.updateProject(this.nameProject, this.directorProject, index);
        //   this.fillFormProject("","");
      },
      fillFormProject: function(code, name, director){
          this.codeProject = code;
          this.nameProject=name;
          this.directorProject=director;
          this.currentIndex=-1;
          this.readData=false;
      }
  }
}

</script>

<style>

</style>