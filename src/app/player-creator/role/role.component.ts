import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Player} from "../../model/player";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-role',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './role.component.html',
  styleUrl: './role.component.css'
})
export class RoleComponent {
  @Input() player: Player | undefined;
}
