import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Player} from "../../model/player";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-general',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './general.component.html',
  styleUrl: './general.component.css'
})
export class GeneralComponent {
  @Input() player: Player | undefined;
}
