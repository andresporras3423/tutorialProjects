import {project} from '../model/classes';
import {projectData} from '../data/projectData'

export class projectController{
    constructor(){
        this.pProjectData= new projectData();
        this.getProjects = function(){
            return this.pProjectData.getProjects();
        }
        this.getProject = function(index){
            return this.pProjectData.getProject(index);
        }
        this.getProjectByCod = function(cod){
            return this.pProjectData.getProjectByCod(cod);
        }
        this.saveProject = function(code, name, director, index){
            this.pProjectData.saveProject(code, name, director, index);
        }
        this.deleteProject = function(index){
            this.pProjectData.deleteProject(index);
        }
    }
}