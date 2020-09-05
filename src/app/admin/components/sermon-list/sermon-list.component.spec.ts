import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SermonListComponent } from './sermon-list.component';

describe('SermonListComponent', () => {
  let component: SermonListComponent;
  let fixture: ComponentFixture<SermonListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SermonListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SermonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
