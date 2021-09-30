import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImprovmentBoardComponent } from './improvment-board.component';

describe('ImprovmentBoardComponent', () => {
  let component: ImprovmentBoardComponent;
  let fixture: ComponentFixture<ImprovmentBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImprovmentBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImprovmentBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
