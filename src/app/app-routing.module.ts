import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponentComponent } from './test-component/test-component.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { ToDoCardsComponent } from './to-do-cards/to-do-cards.component';

const routes: Routes = [
  {
    path: 'test',
    component: TestComponentComponent,
    data: { title: 'test page' },
  },
  { path: 'list', component: ToDoListComponent, data: { page: 'list' } },
  { path: 'cards', component: ToDoCardsComponent, data: { page: 'cards' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
