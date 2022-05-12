import { Component, AfterViewInit, ViewChild, OnInit } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ContactsService } from 'src/app/services/contacts.service';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['name', 'city', 'isActive', 'email', 'phone'];
  dataSource = new MatTableDataSource();
  faEye = faEye;
  faEyeSlash = faEyeSlash;

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
      this.dataSource.data = contacts;
    });
  }
}
