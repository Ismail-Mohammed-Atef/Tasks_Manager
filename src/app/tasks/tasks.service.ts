import { Injectable } from "@angular/core"
import { newTaskData } from "./task/task.model"

@Injectable({providedIn : "root"})
export class tasksService{
    tasks = [
      {
        id: 't1',
        userId: 'u1',
        title: 'Master Angular',
        summary:
          'Learn all the basic and advanced features of Angular & how to apply them.',
        dueDate: '2025-12-31',
      },
      {
        id: 't2',
        userId: 'u3',
        title: 'Build first prototype',
        summary: 'Build a first prototype of the online shop website',
        dueDate: '2024-05-31',
      },
      {
        id: 't3',
        userId: 'u3',
        title: 'Prepare issue template',
        summary:
          'Prepare and describe an issue template which will help with project management',
        dueDate: '2024-06-15',
      },
    ]
    constructor(){
        const storedTasks = localStorage.getItem('tasks');
        if(storedTasks){
            this.tasks = JSON.parse(storedTasks);
        }
    }
    getUserTask(userId : string){
        return this.tasks.filter((task)=>task.userId===userId)
    }
    addNewTask(newTask:newTaskData,userId:string){
        this.tasks.unshift({id : new Date().getDate().toString(),userId : userId, title : newTask.title , summary : newTask.summary , dueDate : newTask.date});
        this.saveItems()
    }
    CompleteTask(taskId:string){
        this.tasks = this.tasks.filter((task)=> task.id !== taskId)
        this.saveItems()
    }
    saveItems(){
        localStorage.setItem("tasks",JSON.stringify(this.tasks));
    }
}