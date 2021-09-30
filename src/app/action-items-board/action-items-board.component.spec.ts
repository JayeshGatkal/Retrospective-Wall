import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionItemsBoardComponent } from './action-items-board.component';

describe('ActionItemsBoardComponent', () => {
  let component: ActionItemsBoardComponent;
  let fixture: ComponentFixture<ActionItemsBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionItemsBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionItemsBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
