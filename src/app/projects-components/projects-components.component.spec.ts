import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsComponentsComponent } from './projects-components.component';

describe('ProjectsComponentsComponent', () => {
  let component: ProjectsComponentsComponent;
  let fixture: ComponentFixture<ProjectsComponentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectsComponentsComponent]
    });
    fixture = TestBed.createComponent(ProjectsComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
