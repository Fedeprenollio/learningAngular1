import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeCharacteristicsComponent } from './employee-characteristics.component';

describe('EmployeeCharacteristicsComponent', () => {
  let component: EmployeeCharacteristicsComponent;
  let fixture: ComponentFixture<EmployeeCharacteristicsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeCharacteristicsComponent]
    });
    fixture = TestBed.createComponent(EmployeeCharacteristicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
