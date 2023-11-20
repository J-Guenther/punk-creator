import { TestBed } from '@angular/core/testing';

import { PlayerStepperService } from './player-stepper.service';

describe('PlayerStepperService', () => {
  let service: PlayerStepperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayerStepperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
