import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  notes = [ {name: 'One', updated: '10.02.2017', status: [true, false, false]},
            {name: 'Twjh', updated: '11.02.2017', status: [false, false, false]},
            {name: 'Third', updated: '11.02.2017', status: [false, false, false]},
            {name: 'Hobbit', updated: '12.02.2017', status: [false, false, false]}];
}
