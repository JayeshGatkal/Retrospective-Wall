import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoneBoardComponent } from './done-board.component';

describe('DoneBoardComponent', () => {
  let component: DoneBoardComponent;
  let fixture: ComponentFixture<DoneBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoneBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoneBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
