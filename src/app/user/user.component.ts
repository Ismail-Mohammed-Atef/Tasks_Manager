import { Component, computed, EventEmitter, input, Input, output, Output, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { CardComponent } from '../shared/card/card.component';
import {User} from "./user.model"


//const randomIndex = Math.floor(Math.random()*DUMMY_USERS.length)
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent,],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // selectedUser = signal(DUMMY_USERS[randomIndex])
  // imagePath = computed(()=>'assets/users/'+this.selectedUser().avatar)
//  avatar = input.required<string>(); signal input
//  name = input.required<string>(); signal input
  // @Input({required : true}) id! :string;
  // @Input({required : true}) avatar! : string;
  // @Input({required : true}) name! : string;
  @Input({required : true}) user!:User;
  @Input({required : true}) selected!:boolean;
  @Output() select = new EventEmitter<string>();
  
  get imagePath(){
    return "assets/users/"+this.user.avatar
  }
  onSelectUser(){

    this.select.emit(this.user.id)

    // const randomIndex = Math.floor(Math.random()*DUMMY_USERS.length);
    // this.selectedUser.set(DUMMY_USERS[randomIndex]);
  }
}
