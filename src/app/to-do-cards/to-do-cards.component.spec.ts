import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoCardsComponent } from './to-do-cards.component';

describe('ToDoCardsComponent', () => {
  let component: ToDoCardsComponent;
  let fixture: ComponentFixture<ToDoCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToDoCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
