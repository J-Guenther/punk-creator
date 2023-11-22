import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeaponArmorComponent } from './weapon-armor.component';

describe('WeaponArmorComponent', () => {
  let component: WeaponArmorComponent;
  let fixture: ComponentFixture<WeaponArmorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeaponArmorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WeaponArmorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
