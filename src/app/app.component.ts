import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  notes = [ {name: 'One', updated: '10.02.2017'},
            {name: 'Twjh', updated: '11.02.2017'}];
}
