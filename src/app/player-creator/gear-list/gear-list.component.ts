import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Player} from "../../model/player";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-gear-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './gear-list.component.html',
  styleUrl: './gear-list.component.css'
})
export class GearListComponent {
  @Input() player: Player | undefined;
}
