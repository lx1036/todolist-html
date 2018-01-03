import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() isChecked = false;
  @Input() todoDesc = '';
  @Output() toggleTriggered = new EventEmitter<boolean>();
  @Output() removeTriggered = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.toggleTriggered.emit(true);
  }

  remove() {
    this.removeTriggered.emit(true);
  }
}
