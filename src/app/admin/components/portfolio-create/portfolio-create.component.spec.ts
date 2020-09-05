import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioCreateComponent } from './portfolio-create.component';

describe('PortfolioCreateComponent', () => {
  let component: PortfolioCreateComponent;
  let fixture: ComponentFixture<PortfolioCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
