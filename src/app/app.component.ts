import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'contact-list';

  id: string;
  cityList: string[] = [];

  contactChangeHandler(id: string) {
    this.id = id;
  }

  cityListChangeHandler(list: string[]) {
    this.cityList = list;
    console.log(list);
  }
}
