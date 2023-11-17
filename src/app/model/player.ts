import {Abilities} from "./abilities";
import {Skills} from "./skills";
import {BaseAbility} from "./baseAbility";
import {Weapon} from "./weapon";

export class Player {

  constructor() {
    this._abilities = new Abilities();
    this._skills = new Skills(this.abilities.changeEvent);
    this.abilities.changeEvent.subscribe(e => {
      this.updateDerivedStats(e);
    })
  }

  private _name: string = "";
  private _role: string = "";
  private _roleAbility: string = "";
  private _roleAbilityRank: number = 0;
  private _notes: string = "";
  private _humanityCurrent: number = 0;
  private _humanityMax: number = 0;
  private _hpCurrent: number = 0;
  private _hpMax: number = 0;
  private _srslyWounded: number = 0;
  private _deathSave: number = 0;
  private _criticalInjuries: string = "";
  private _addictions: string = "";
  private _abilities: Abilities;
  private _skills: Skills
  private _weapons: Weapon[] = [];


  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get role(): string {
    return this._role;
  }

  set role(value: string) {
    this._role = value;
  }

  get roleAbility(): string {
    return this._roleAbility;
  }

  set roleAbility(value: string) {
    this._roleAbility = value;
  }

  get roleAbilityRank(): number {
    return this._roleAbilityRank;
  }

  set roleAbilityRank(value: number) {
    this._roleAbilityRank = value;
  }

  get notes(): string {
    return this._notes;
  }

  set notes(value: string) {
    this._notes = value;
  }

  get humanityCurrent(): number {
    return this._humanityCurrent;
  }

  set humanityCurrent(value: number) {
    this._humanityCurrent = value;
  }

  get humanityMax(): number {
    return this._humanityMax;
  }

  set humanityMax(value: number) {
    this._humanityMax = value;
  }

  get hpCurrent(): number {
    return this._hpCurrent;
  }

  set hpCurrent(value: number) {
    this._hpCurrent = value;
  }

  get hpMax(): number {
    return this._hpMax;
  }

  set hpMax(value: number) {
    this._hpMax = value;
  }

  get srslyWounded(): number {
    return this._srslyWounded;
  }

  set srslyWounded(value: number) {
    this._srslyWounded = value;
  }

  get deathSave(): number {
    return this._deathSave;
  }

  set deathSave(value: number) {
    this._deathSave = value;
  }

  get criticalInjuries(): string {
    return this._criticalInjuries;
  }

  set criticalInjuries(value: string) {
    this._criticalInjuries = value;
  }

  get addictions(): string {
    return this._addictions;
  }

  set addictions(value: string) {
    this._addictions = value;
  }

  get abilities(): Abilities {
    return this._abilities;
  }

  set abilities(value: Abilities) {
    this._abilities = value;
  }

  get skills(): Skills {
    return this._skills;
  }

  set skills(value: Skills) {
    this._skills = value;
  }


  get weapons(): Weapon[] {
    return this._weapons;
  }

  set weapons(value: Weapon[]) {
    this._weapons = value;
  }

  private updateDerivedStats(abilityChange: { ability: BaseAbility; value: number }) {
    switch (abilityChange.ability) {
      case BaseAbility.EMP:
        this._humanityMax = abilityChange.value * 10;
        break;
      case BaseAbility.WILL:
        this.hpMax = this.calculateHp();
        break;
      case BaseAbility.BODY:
        this.hpMax = this.calculateHp();

    }
  }

  private calculateHp() {
    return 10 + (5 * Math.round((this.abilities.will + this.abilities.body) / 2));
  }
}
