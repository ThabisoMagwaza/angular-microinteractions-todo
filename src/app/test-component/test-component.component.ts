import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css'],
})
export class TestComponentComponent implements OnInit {
  toDoList: string[];
  constructor() {}

  ngOnInit(): void {
    this.toDoList = ['To-do 1', 'To-do 2', 'To-do 3'];
  }
}
