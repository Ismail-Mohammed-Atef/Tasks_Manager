import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { task } from './task.model';
import { CardComponent } from '../../shared/card/card.component';
import { DatePipe } from '@angular/common';
import { tasksService } from '../tasks.service';
@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent,DatePipe,],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
 @Input({required : true}) taskData!:task;
 private service = inject(tasksService)

 onTaskComplete(){
  this.service.CompleteTask(this.taskData.id);
 }
}
