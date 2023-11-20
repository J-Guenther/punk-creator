import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerStepperService {

  steps: {id: string, name: string}[];
  private _activeStep: number = 0;

  constructor() {
    this.steps = [
      {name: "General", id: "general"},
      {name: "Role", id: "role"},
      {name: "Stats", id: "stats"},
      {name: "Skills", id: "skills"},
    ]
  }

  get activeStep(): number {
    return this._activeStep;
  }

  next() {
    if (this._activeStep < this.steps.length) {
      this._activeStep++;
    }
  }

  previous() {
    if (this._activeStep > 0) {
      this._activeStep--;
    }
  }

  setActiveStep(stepIndex: number) {
    this._activeStep = stepIndex;
  }
}
