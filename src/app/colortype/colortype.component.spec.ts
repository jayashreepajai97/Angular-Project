import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColortypeComponent } from './colortype.component';

describe('ColortypeComponent', () => {
  let component: ColortypeComponent;
  let fixture: ComponentFixture<ColortypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColortypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColortypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
