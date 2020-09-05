import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IpucComponent } from './ipuc.component';

describe('IpucComponent', () => {
  let component: IpucComponent;
  let fixture: ComponentFixture<IpucComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IpucComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IpucComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
