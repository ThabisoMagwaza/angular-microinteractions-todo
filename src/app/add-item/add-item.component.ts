import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ToDoListService } from '../to-do-list.service';
import {
  trigger,
  transition,
  style,
  animate,
  state,
} from '@angular/animations';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css'],
  animations: [
    trigger('labelIn', [
      transition(':enter', [
        style({ transform: 'scale(0)' }),
        animate('.5s .5s ease-out'),
      ]),
    ]),
    trigger('moveIcon', [
      state(
        'true',
        style({ width: '*', height: '*', left: '*', right: '*', fill: '*' })
      ),
      state(
        'false',
        style({
          width: '40px',
          height: '40px',
          left: '500px',
          right: '0px',
          top: '1px',
          fill: 'green',
          transform: 'rotate(180deg)',
        })
      ),
      // transition('true <=> false', [animate('1s ease-in-out')]),
    ]),
    trigger('expandInput', [
      state(
        'true',
        style({
          width: '500px',
          opacity: 1,
          padding: '10px 20px',
        })
      ),
      state(
        'false',
        style({
          width: 0,
          opacity: 0,
          padding: '10px 0',
        })
      ),
    ]),
  ],
})
export class AddItemComponent implements OnInit {
  addItemInputState: boolean = false;
  toDoList: string[];
  newItemForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private toDoListService: ToDoListService
  ) {}

  ngOnInit(): void {
    this.newItemForm = this.fb.group({
      newItem: '',
    });
    this.toDoList = this.toDoListService.getToDoList();
  }

  addNewItem(item) {
    //console.log(item);
    this.toDoListService.addToDoItem(item);

    this.newItemForm.reset();
  }

  toggleInputVisibility() {
    this.addItemInputState = !this.addItemInputState;
  }
  iconMoving(event) {
    console.log(event);
  }
}
