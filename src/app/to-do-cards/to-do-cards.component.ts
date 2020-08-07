import { Component, OnInit } from '@angular/core';
import { ToDoListService } from '../to-do-list.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-to-do-cards',
  templateUrl: './to-do-cards.component.html',
  styleUrls: ['./to-do-cards.component.css'],
})
export class ToDoCardsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
