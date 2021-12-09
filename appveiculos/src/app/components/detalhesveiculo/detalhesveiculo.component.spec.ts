import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesveiculoComponent } from './detalhesveiculo.component';

describe('DetalhesveiculoComponent', () => {
  let component: DetalhesveiculoComponent;
  let fixture: ComponentFixture<DetalhesveiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalhesveiculoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhesveiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
