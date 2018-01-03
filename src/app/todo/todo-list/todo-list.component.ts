import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Todo} from '../models/Todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  private _todos: Todo[] = [];

  @Output() removeTodo = new EventEmitter<Todo>();
  @Output() toggleTodo = new EventEmitter<Todo>();

  @Input()
  set todos(todos: Todo[]){
    this._todos = [...todos];
  }

  get todos() {
    return this._todos;
  }

  constructor() { }

  ngOnInit() {
  }

  onRemoveTriggered(todo: Todo) {
    this.removeTodo.emit(todo);
  }
  onToggleTriggered(todo: Todo) {
    this.toggleTodo.emit(todo);
  }
}
