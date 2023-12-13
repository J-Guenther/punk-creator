import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CyberwareComponent } from './cyberware.component';

describe('CyberwareComponent', () => {
  let component: CyberwareComponent;
  let fixture: ComponentFixture<CyberwareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CyberwareComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CyberwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
