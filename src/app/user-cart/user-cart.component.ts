import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-cart',
  templateUrl: './user-cart.component.html',
  styleUrls: ['./user-cart.component.css']
})
export class UserCartComponent implements OnInit {
  @Input('note')
  note: any;
  @Output()
  otherChangeEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  getFromChecker($event) {
    // console.log('user', $event);
    this.otherChangeEvent.emit($event);
  }

}
