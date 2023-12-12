import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifepathComponent } from './lifepath.component';

describe('LifepathComponent', () => {
  let component: LifepathComponent;
  let fixture: ComponentFixture<LifepathComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LifepathComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LifepathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
