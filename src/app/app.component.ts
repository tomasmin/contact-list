import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'contact-list';

  id: string;

  contactChangeHandler(id: string) {
    this.id = id;
    console.log(id);
  }
}
