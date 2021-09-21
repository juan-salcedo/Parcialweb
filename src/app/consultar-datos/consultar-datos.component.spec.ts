import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarDatosComponent } from './consultar-datos.component';

describe('ConsultarDatosComponent', () => {
  let component: ConsultarDatosComponent;
  let fixture: ComponentFixture<ConsultarDatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarDatosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
