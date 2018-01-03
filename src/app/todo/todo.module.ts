import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {TodoComponent} from './todo.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {TodoService} from './services/todo.service';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoItemComponent } from './todo-list/todo-item/todo-item.component';
import {TodoRoutingModule} from './todo-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    TodoRoutingModule
  ],
  declarations: [
    TodoComponent,
    HeaderComponent,
    FooterComponent,
    TodoListComponent,
    TodoItemComponent,
  ],
  providers: [
    TodoService,
  ]
})
export class TodoModule {}
