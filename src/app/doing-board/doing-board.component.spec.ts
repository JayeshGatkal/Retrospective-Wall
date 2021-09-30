import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoingBoardComponent } from './doing-board.component';

describe('DoingBoardComponent', () => {
  let component: DoingBoardComponent;
  let fixture: ComponentFixture<DoingBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoingBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoingBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
