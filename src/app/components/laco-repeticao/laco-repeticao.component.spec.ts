import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LacoRepeticaoComponent } from './laco-repeticao.component';

describe('LacoRepeticaoComponent', () => {
  let component: LacoRepeticaoComponent;
  let fixture: ComponentFixture<LacoRepeticaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LacoRepeticaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LacoRepeticaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
