import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExporthnosComponent } from './exporthnos.component';

describe('ExporthnosComponent', () => {
  let component: ExporthnosComponent;
  let fixture: ComponentFixture<ExporthnosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExporthnosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExporthnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
