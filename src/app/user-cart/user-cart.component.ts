import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-cart',
  templateUrl: './user-cart.component.html',
  styleUrls: ['./user-cart.component.css']
})
export class UserCartComponent implements OnInit {
@Input('note')
note: any;

good = false;
bad = false;
dknow = false;

  constructor() { }

  ngOnInit() {
  }

}
