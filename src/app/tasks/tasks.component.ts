import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { newTaskData } from './task/task.model';
import { tasksService } from './tasks.service';



@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent,NewTaskComponent,],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
@Input({required : true}) name!:string;
@Input({required : true}) id!:string;
isAddingTask:boolean = false;
constructor(private service : tasksService){}

get selectedUserTasks(){
  return this.service.getUserTask(this.id);
}


onAddTask(){
  this.isAddingTask = true;
}

onCancel(){
  this.isAddingTask = false;
}

}
