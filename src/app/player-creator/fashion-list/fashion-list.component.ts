import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import {Player} from "../../model/player";

@Component({
  selector: 'app-fashion-list',
  standalone: true,
    imports: [CommonModule, FormsModule],
  templateUrl: './fashion-list.component.html',
  styleUrl: './fashion-list.component.css'
})
export class FashionListComponent {
  @Input() player: Player | undefined;
}
