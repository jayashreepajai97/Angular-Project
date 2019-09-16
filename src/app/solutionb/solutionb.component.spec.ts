import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionbComponent } from './solutionb.component';

describe('SolutionbComponent', () => {
  let component: SolutionbComponent;
  let fixture: ComponentFixture<SolutionbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolutionbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolutionbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
