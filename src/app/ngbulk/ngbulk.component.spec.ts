import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbulkComponent } from './ngbulk.component';

describe('NgbulkComponent', () => {
  let component: NgbulkComponent;
  let fixture: ComponentFixture<NgbulkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgbulkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgbulkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
