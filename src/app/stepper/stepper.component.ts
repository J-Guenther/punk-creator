import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PlayerStepperService} from "../services/player-stepper.service";

@Component({
  selector: 'app-stepper',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.css'
})
export class StepperComponent {

  constructor(public playerStepperService: PlayerStepperService) {
  }

}
