import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { newTaskData } from '../task/task.model';
import { tasksService } from '../tasks.service';



@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule,],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
@Output() Cancel = new EventEmitter<void>()
@Input({required : true}) userId! : string
enteredTitle='';
enteredSummary='';
enteredDate='';
private service = inject(tasksService);
onCancelClick(){
  this.Cancel.emit();
}
onSubmit(){
  this.service.addNewTask({title : this.enteredTitle,summary : this.enteredSummary,date : this.enteredDate},this.userId);
  this.Cancel.emit();
}
}
