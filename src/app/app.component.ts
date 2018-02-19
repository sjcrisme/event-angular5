import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  notes = [ {id: 1, name: 'One', updated: '10.02.2017', status: [false, false, false]},
            {id: 2, name: 'Twjh', updated: '11.02.2017', status: [false, false, false]},
            {id: 3, name: 'Third', updated: '11.02.2017', status: [false, false, false]},
            {id: 4, name: 'Hobbit', updated: '12.02.2017', status: [false, false, false]},
            {id: 5, name: 'Other Guy', updated: '13.02.2017', status: [false, false, false]}];
  trueArray = [];
  Total_Status_1 = 0;
  Total_Status_2 = 0;
  Total_Status_3 = 0;

getFromUser($event) {
  if ($event.st) {
 //   console.log('true ', $event);
    if ($event.i === 0) {
      this.Total_Status_1++;
    }
    if ($event.i === 1) {
       this.Total_Status_2++;
    }
    if ($event.i === 2) {
      this.Total_Status_3++;
    }

  } else {
//    console.log('false', $event);
    if ($event.i === 0) {
      this.Total_Status_1--;
    }
    if ($event.i === 1) {
       this.Total_Status_2--;
    }
    if ($event.i === 2) {
      this.Total_Status_3--;
    }
  }
  // console.log('Top', $event);
}

}
