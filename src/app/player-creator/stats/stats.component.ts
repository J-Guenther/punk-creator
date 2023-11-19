import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Player} from "../../model/player";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.css'
})
export class StatsComponent {
  @Input() player: Player | undefined;
}
