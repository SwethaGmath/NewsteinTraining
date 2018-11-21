import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrisisCentreHomeComponent } from './crisis-centre-home.component';

describe('CrisisCentreHomeComponent', () => {
  let component: CrisisCentreHomeComponent;
  let fixture: ComponentFixture<CrisisCentreHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrisisCentreHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrisisCentreHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
