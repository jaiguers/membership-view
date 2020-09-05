import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreachComponent } from './preach.component';

describe('PreachComponent', () => {
  let component: PreachComponent;
  let fixture: ComponentFixture<PreachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
