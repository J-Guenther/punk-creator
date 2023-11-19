import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Player} from "../../model/player";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  @Input() player: Player | undefined;
}
