import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Errordialog } from './errordialog';

describe('Errordialog', () => {
  let component: Errordialog;
  let fixture: ComponentFixture<Errordialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Errordialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Errordialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
