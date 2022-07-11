import { Component } from '@angular/core';
import {Todo} from "./todo";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Todo-App';

  todoValue: string;
  list: Todo[];

  ngOnInit(){
    this.list=[]
    this.todoValue=""
  }

  addTask(){
    if (this.todoValue !==""){
      const newTask: Todo = {
        id: Date.now(),
        value: this.todoValue,
        isDone: false

      };
      this.list.push(newTask);
    }
    this.todoValue = ""
  }

  deleteTask(id: number){
    this.list = this.list.filter(item => item.id !==id);
  }
  
}
