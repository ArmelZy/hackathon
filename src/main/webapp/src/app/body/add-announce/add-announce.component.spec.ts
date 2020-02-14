import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AddAnnounceComponent} from './add-announce.component';

describe('AddAnnounceComponent', () => {
  let component: AddAnnounceComponent;
  let fixture: ComponentFixture<AddAnnounceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAnnounceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAnnounceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
