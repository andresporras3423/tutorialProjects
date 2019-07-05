import {task} from '../model/classes';
import {taskData} from '../data/taskData'

export class taskController{
    constructor(){
        this.tTaskData= new taskData();
        this.getTasks = function(){
            return this.tTaskData.getTasks();
        }
        this.getTask = function(index){
            return this.tTaskData.getTask(index);
        }
        this.saveTask = function(code, description, state, codeDirector, index){
            this.tTaskData.saveTask(code, description, state, codeDirector, index);
        }
        this.deleteTask = function(index){
            this.tTaskData.deleteTask(index);
        }
    }
}