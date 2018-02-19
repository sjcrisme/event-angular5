import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-checker',
  templateUrl: './checker.component.html',
  styleUrls: ['./checker.component.css']
})
export class CheckerComponent implements OnInit {
  @Input('status')
  status: any;
  name = ['good', 'bad', 'dont know'];

  @Output()
  changeEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  checkOptions($event: Event, i: number, elm: any) {
    // console.log($event);
    // console.log(elm);
    // console.log(i);
    this.changeEvent.emit({elm: elm, i: i, st: $event.checked });
  }

}
