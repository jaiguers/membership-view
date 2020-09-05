import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommitteEditComponent } from './committe-edit.component';

describe('CommitteEditComponent', () => {
  let component: CommitteEditComponent;
  let fixture: ComponentFixture<CommitteEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommitteEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommitteEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
