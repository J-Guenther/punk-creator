import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Player} from "../../model/player";

@Component({
  selector: 'app-lifepath',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './lifepath.component.html',
  styleUrl: './lifepath.component.css'
})
export class LifepathComponent {
  @Input() player: Player | undefined;
}
