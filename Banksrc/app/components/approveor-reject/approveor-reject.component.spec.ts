import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveorRejectComponent } from './approveor-reject.component';

describe('ApproveorRejectComponent', () => {
  let component: ApproveorRejectComponent;
  let fixture: ComponentFixture<ApproveorRejectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApproveorRejectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveorRejectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
