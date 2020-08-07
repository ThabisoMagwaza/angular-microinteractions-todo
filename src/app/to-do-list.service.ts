import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ToDoListService {
  toDoList: string[] = ['To-do 1', 'To-do 2', 'To-do 3'];

  getToDoList(): string[] {
    return this.toDoList;
  }

  addToDoItem(item) {
    this.toDoList.push(item);
  }
}
