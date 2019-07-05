import {task} from '../model/classes';
import {listTasks} from '../database/taskDatabase'

export class taskData{
    constructor(){
        this.getTasks=function(){
            return listTasks;
        }
        this.getTask=function(index){
            return listTasks[index];
        }
        this.saveTask=function(code, description, state, codeProject, index){
            if(index==-1){
                listTasks.push(new task(code, description, state, codeProject));
            }
            else{
                listTasks[index]=new task(code, description, state, codeProject);
            }
        }
        this.deleteTask=function(index){
            listTasks.splice(index,1);
        }
        
    }
}
