import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommitteeCreateComponent } from './committee-create.component';

describe('CommitteeCreateComponent', () => {
  let component: CommitteeCreateComponent;
  let fixture: ComponentFixture<CommitteeCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommitteeCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommitteeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
