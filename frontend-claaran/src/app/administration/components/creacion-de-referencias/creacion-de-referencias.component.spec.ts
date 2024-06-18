import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreacionDeReferenciasComponent } from './creacion-de-referencias.component';

describe('CreacionDeReferenciasComponent', () => {
  let component: CreacionDeReferenciasComponent;
  let fixture: ComponentFixture<CreacionDeReferenciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreacionDeReferenciasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreacionDeReferenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
