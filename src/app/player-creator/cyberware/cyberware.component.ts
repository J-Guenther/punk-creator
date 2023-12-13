import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Player} from "../../model/player";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-cyberware',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cyberware.component.html',
  styleUrl: './cyberware.component.css'
})
export class CyberwareComponent {
  @Input() player: Player | undefined;
}
