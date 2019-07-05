import {project} from '../model/classes';
import {listProjects} from '../database/projectDatabase'

export class projectData{
    constructor(){
        this.getProjects=function(){
            return listProjects;
        }
        this.getProject=function(index){
            return listProjects[index];
        }
        this.getProjectByCod=function(cod){

            for(var i=0; i<listProjects.length;i++){
                if(listProjects[i].code==cod){
                    return listProjects[i];
                }
            }
            
        }
        this.saveProject=function(code, name, director, index){
            if(index==-1){
                listProjects.push(new project(code, name, director));
            }
            else{
                listProjects[index]=new project(code, name, director);
            }
        }
        this.deleteProject=function(index){
            listProjects.splice(index,1);
        }
        
    }
}
