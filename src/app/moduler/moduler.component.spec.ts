import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulerComponent } from './moduler.component';

describe('ModulerComponent', () => {
  let component: ModulerComponent;
  let fixture: ComponentFixture<ModulerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModulerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
