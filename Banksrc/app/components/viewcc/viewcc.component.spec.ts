import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewccComponent } from './viewcc.component';

describe('ViewccComponent', () => {
  let component: ViewccComponent;
  let fixture: ComponentFixture<ViewccComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewccComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
