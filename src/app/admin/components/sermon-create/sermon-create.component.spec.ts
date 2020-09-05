import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SermonCreateComponent } from './sermon-create.component';

describe('SermonCreateComponent', () => {
  let component: SermonCreateComponent;
  let fixture: ComponentFixture<SermonCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SermonCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SermonCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
