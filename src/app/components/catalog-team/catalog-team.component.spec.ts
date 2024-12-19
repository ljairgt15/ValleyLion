import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogTeamComponent } from './catalog-team.component';

describe('CatalogTeamComponent', () => {
  let component: CatalogTeamComponent;
  let fixture: ComponentFixture<CatalogTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogTeamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatalogTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
