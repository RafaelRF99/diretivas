import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtributosCorComponent } from './atributos-cor.component';

describe('AtributosCorComponent', () => {
  let component: AtributosCorComponent;
  let fixture: ComponentFixture<AtributosCorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtributosCorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtributosCorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
