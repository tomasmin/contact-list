import { Component, OnChanges, Input, SimpleChanges } from '@angular/core';
import { ContactsService } from 'src/app/services/contacts.service';

@Component({
  selector: 'app-viewing-area',
  templateUrl: './viewing-area.component.html',
  styleUrls: ['./viewing-area.component.scss'],
})
export class ViewingAreaComponent implements OnChanges {
  @Input() id: string;
  name: string;
  city: string;
  email: string;
  phone: string;

  constructor(private contactsService: ContactsService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.id) {
      this.contactsService.getContact(this.id).subscribe((contact) => {
        this.name = `${contact.name} ${contact.surname[0]}.`;
        this.city = contact.city;
        this.email = contact.email;
        this.phone = contact.phone;
      });
    }
  }
}
