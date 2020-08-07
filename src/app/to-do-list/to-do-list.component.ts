import { Component, OnInit, ElementRef, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import {
  trigger,
  state,
  transition,
  animate,
  style,
  keyframes,
  query,
  stagger,
  sequence,
} from '@angular/animations';
import { ToDoListService } from '../to-do-list.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css'],
  animations: [
    trigger('fadeList', [
      transition(':enter', [
        query('.to-do-list__item', [
          style({ opacity: '0', transform: 'translateY(-50%)' }),
          stagger(100, [animate('.3s ease-in')]),
          //sequence([animate('.3s ease-in')]),
        ]),
      ]),
    ]),
    trigger('fadeItem', [
      transition(':enter', [
        style({ transform: 'translateY(-200%)', opacity: 0 }),
        animate('.5s ease-out'),
      ]),
      transition(':leave', [
        animate(
          '.5s ease-in',
          keyframes([
            style({
              backgroundColor: '#ff9696',
              borderRadius: '5px',
              offset: 0,
            }),
            style({
              transform: 'scale(0.5)',
              filter: 'brightness(1.5)',
              offset: 0.7,
              opacity: '0.7',
            }),
            style({
              transform: 'translateX(-1000px)',
              opacity: 0,
              offset: 1,
            }),
          ])
        ),
      ]),
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
export class ToDoListComponent {
  toDoList: string[];
  newItemForm: FormGroup;

  addItemInputState: boolean = false;

  constructor(
    private fb: FormBuilder,
    private todoListService: ToDoListService,
    private elementRef: ElementRef
  ) {}
  ngOnInit(): void {
    this.toDoList = this.todoListService.getToDoList();

    this.newItemForm = this.fb.group({
      newItem: '',
    });
  }

  addNewItem(item) {
    console.log(item);
    this.toDoList.push(item);

    this.newItemForm.reset();
  }

  removeItem(item) {
    this.todoListService.getToDoList().splice(
      this.toDoList.findIndex((e) => e == item),
      1
    );
  }

  toggleInputVisibility() {
    this.addItemInputState = !this.addItemInputState;
  }

  iconMoving(event) {
    console.log(event);
  }
}
