import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewingAreaComponent } from './viewing-area.component';

describe('ViewingAreaComponent', () => {
  let component: ViewingAreaComponent;
  let fixture: ComponentFixture<ViewingAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewingAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewingAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
