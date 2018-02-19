import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-checker',
  templateUrl: './checker.component.html',
  styleUrls: ['./checker.component.css']
})
export class CheckerComponent implements OnInit {
  @Input('status')
  status: any;

  constructor() { }

  ngOnInit() {
  }

}
