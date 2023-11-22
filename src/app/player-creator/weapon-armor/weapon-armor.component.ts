import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Player} from "../../model/player";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-weapon-armor',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './weapon-armor.component.html',
  styleUrl: './weapon-armor.component.css'
})
export class WeaponArmorComponent {
  @Input() player: Player | undefined;
}
