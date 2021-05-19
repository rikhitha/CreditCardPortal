import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CibilreportComponent } from './cibilreport.component';

describe('CibilreportComponent', () => {
  let component: CibilreportComponent;
  let fixture: ComponentFixture<CibilreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CibilreportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CibilreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
