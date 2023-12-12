import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PDFDocument} from "pdf-lib";
import {FormsModule} from "@angular/forms";
import {Player} from "../model/player";
import {StatsComponent} from "./stats/stats.component";
import {GeneralComponent} from "./general/general.component";
import {RoleComponent} from "./role/role.component";
import {SkillsComponent} from "./skills/skills.component";
import {PlayerStepperService} from "../services/player-stepper.service";
import {WeaponArmorComponent} from "./weapon-armor/weapon-armor.component";
import {LifepathComponent} from "./lifepath/lifepath.component";
import {GearListComponent} from "./gear-list/gear-list.component";
import {FashionListComponent} from "./fashion-list/fashion-list.component";

declare var pdfform: any;

@Component({
  selector: 'app-player-creator',
  standalone: true,
  imports: [CommonModule, FormsModule, StatsComponent, GeneralComponent, RoleComponent, SkillsComponent, WeaponArmorComponent, LifepathComponent, GearListComponent, FashionListComponent],
  templateUrl: './player-creator.component.html',
  styleUrl: './player-creator.component.css'
})
export class PlayerCreatorComponent {

  player: Player = new Player();

  constructor(public playerStepperService: PlayerStepperService) {
  }


  async downloadPdf() {
    const pdfUrl = 'assets/character_sheet2.pdf';
    const arrayBuffer = await fetch(pdfUrl).then(res => res.arrayBuffer());

    const pdfDoc = await PDFDocument.load(arrayBuffer);

    const form = pdfDoc.getForm();
    form.getFields().forEach(field => {
      console.log(field.getName())
    });
    const nameField = form.getTextField('NAME');
    nameField.setText('Bob');

    const modifiedPdfBytes = await pdfDoc.save();

    const blob = new Blob([modifiedPdfBytes], { type: 'application/pdf' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = "my_sheet.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  async downloadPdf2() {
    const pdfUrl = 'assets/character_sheet.pdf';
    const arrayBuffer = await fetch(pdfUrl).then(res => res.arrayBuffer());

    console.log(pdfform.list_fields(arrayBuffer));

    //
    // const pdfDoc = await PDFDocument.load(arrayBuffer);
    //
    // const form = pdfDoc.getForm();
    // form.getFields().forEach(field => {
    //   console.log(field.getName())
    // });
    // const nameField = form.getTextField('NAME');
    // nameField.setText('Bob');
    //
    // const modifiedPdfBytes = await pdfDoc.save();
    //
    // const blob = new Blob([modifiedPdfBytes], { type: 'application/pdf' });
    // const link = document.createElement('a');
    // link.href = URL.createObjectURL(blob);
    // link.download = "my_sheet.pdf";
    // document.body.appendChild(link);
    // link.click();
    // document.body.removeChild(link);
  }

}
