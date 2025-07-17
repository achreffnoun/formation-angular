import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsUtilisateur } from './details-utilisateur';

describe('DetailsUtilisateur', () => {
  let component: DetailsUtilisateur;
  let fixture: ComponentFixture<DetailsUtilisateur>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsUtilisateur]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsUtilisateur);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
