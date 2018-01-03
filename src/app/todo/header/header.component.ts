import {Component, ElementRef, EventEmitter, Input, OnInit, Output} from '@angular/core';
// import {Observable} from 'rxjs/Observable';
// import 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
// import {Observable} from 'rxjs/Observable';
import {Observable} from 'rxjs/Rx';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() protected placeholder = 'What needs to be done?';
  @Input() protected delay = 300;
  @Output() public textChanges = new EventEmitter<string>();
  @Output() public enterUp = new EventEmitter<boolean>();
  protected inputValue = '';

  constructor(private elementRef: ElementRef) {
    Observable.fromEvent(elementRef.nativeElement, 'keyup')
      .map(() => this.inputValue)
      .debounceTime(this.delay)
      .distinctUntilChanged()
      .subscribe(input => this.textChanges.emit(input));
  }

  ngOnInit() {
  }

  onEnterUp() {
    this.enterUp.emit(true);
    this.inputValue = '';
  }
}
