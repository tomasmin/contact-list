import {
  Component,
  AfterViewInit,
  ViewChild,
  OnInit,
  Output,
  EventEmitter,
  ViewEncapsulation,
} from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ContactsService } from 'src/app/services/contacts.service';
import { faEye, faEyeSlash, faList } from '@fortawesome/free-solid-svg-icons';
import { Contact } from 'src/app/models/contact';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TableComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = [
    'name',
    'city',
    'isActive',
    'email',
    'phone',
    'columnSelect',
  ];
  showNameColumn: boolean = true;
  showCityColumn: boolean = true;
  showEmailColumn: boolean = true;
  showPhoneColumn: boolean = true;
  contacts: Contact[] = [];
  dataSource = new MatTableDataSource();
  faEye = faEye;
  faEyeSlash = faEyeSlash;
  faList = faList;

  selectedContactId: string;
  @Output() selectedContactChanged: EventEmitter<string> = new EventEmitter();

  cityList: string[] = [];

  nameFilter: string;
  cityFilter: string;
  activeFilter: boolean = true;

  constructor(private contactService: ContactsService) {}

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit(): void {
    this.getContacts();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  getContacts(): void {
    this.contactService.getContacts().subscribe((contacts) => {
      this.contacts = contacts;
      this.dataSource.data = contacts;
      this.selectedContactId = contacts[0].id;
      this.selectedContactChanged.emit(this.selectedContactId);
      this.getCityList(contacts);
    });
  }

  selectContact(id: string) {
    this.selectedContactId = id;
    this.selectedContactChanged.emit(this.selectedContactId);
  }

  getCityList(contacts: Contact[]) {
    let list: string[] = [];
    contacts.forEach((contact) => {
      if (!list.includes(contact.city)) {
        list.push(contact.city);
      }
    });
    list.sort();
    this.cityList = list;
  }

  applyFilter() {
    let filteredContacts = this.contacts;
    if (this.nameFilter) {
      filteredContacts = filteredContacts.filter((contact) => {
        return contact.name
          .toLowerCase()
          .includes(this.nameFilter.toLowerCase());
      });
    }
    if (this.cityFilter) {
      filteredContacts = filteredContacts.filter((contact) => {
        return contact.city == this.cityFilter;
      });
    }
    filteredContacts = filteredContacts.filter((contact) => {
      return contact.isActive == false || contact.isActive == this.activeFilter;
    });
    this.dataSource.data = filteredContacts;
  }

  updateDisplayColumns(column: string) {
    if (this.displayedColumns.includes(column)) {
      this.displayedColumns = this.displayedColumns.filter((c) => c !== column);
    } else {
      this.displayedColumns.unshift(column);
    }
  }
}
