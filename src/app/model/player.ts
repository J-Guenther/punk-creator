import {Abilities} from "./abilities";
import {Skills} from "./skills";
import {BaseAbility} from "./baseAbility";
import {Weapon} from "./weapon";
import {Armor} from "./armor";
import {Lifepath} from "./lifepath";
import {CyberwareSlots} from "./cyberwareSlots";

export class Player {

  constructor() {
    this._abilities = new Abilities();
    this._skills = new Skills(this.abilities.changeEvent);
    this._lifepath = new Lifepath();
    this._cyberwareSlots = new CyberwareSlots();
    this._headArmor = new Armor("head");
    this._bodyArmor = new Armor("body");
    this._shieldArmor = new Armor("leg");
    this.abilities.changeEvent.subscribe(e => {
      this.updateDerivedStats(e);
    })
  }

  private _name: string = "";
  private _age: string = "";
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
  private _bodyArmor: Armor;
  private _headArmor: Armor;
  private _shieldArmor: Armor;
  private _aliases: string = "";
  private _currentImprovementPoints: string = "";
  private _maxImprovementPoints: string = "";
  private _reputation: string = "";
  private _reputationEvents: string = "";
  private _lifepath: Lifepath;
  private _fashion: string = "";
  private _housing: string = "";
  private _rent: string = "";
  private _lifestyle: string = "";
  private _roleSpecificLifepath: string = "";
  private _ammunition: string = "";
  private _cash: string = "";
  private _cyberwareSlots: CyberwareSlots;


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

  get bodyArmor(): Armor {
    return this._bodyArmor;
  }

  set bodyArmor(value: Armor) {
    this._bodyArmor = value;
  }

  get headArmor(): Armor {
    return this._headArmor;
  }

  set headArmor(value: Armor) {
    this._headArmor = value;
  }

  get shieldArmor(): Armor {
    return this._shieldArmor;
  }

  set shieldArmor(value: Armor) {
    this._shieldArmor = value;
  }

  get aliases(): string {
    return this._aliases;
  }

  set aliases(value: string) {
    this._aliases = value;
  }

  get currentImprovementPoints(): string {
    return this._currentImprovementPoints;
  }

  set currentImprovementPoints(value: string) {
    this._currentImprovementPoints = value;
  }

  get maxImprovementPoints(): string {
    return this._maxImprovementPoints;
  }

  set maxImprovementPoints(value: string) {
    this._maxImprovementPoints = value;
  }

  get reputation(): string {
    return this._reputation;
  }

  set reputation(value: string) {
    this._reputation = value;
  }

  get reputationEvents(): string {
    return this._reputationEvents;
  }

  set reputationEvents(value: string) {
    this._reputationEvents = value;
  }

  get lifepath(): Lifepath {
    return this._lifepath;
  }

  set lifepath(value: Lifepath) {
    this._lifepath = value;
  }

  get fashion(): string {
    return this._fashion;
  }

  set fashion(value: string) {
    this._fashion = value;
  }

  get housing(): string {
    return this._housing;
  }

  set housing(value: string) {
    this._housing = value;
  }

  get rent(): string {
    return this._rent;
  }

  set rent(value: string) {
    this._rent = value;
  }

  get lifestyle(): string {
    return this._lifestyle;
  }

  set lifestyle(value: string) {
    this._lifestyle = value;
  }

  get roleSpecificLifepath(): string {
    return this._roleSpecificLifepath;
  }

  set roleSpecificLifepath(value: string) {
    this._roleSpecificLifepath = value;
  }

  get ammunition(): string {
    return this._ammunition;
  }

  set ammunition(value: string) {
    this._ammunition = value;
  }

  get cash(): string {
    return this._cash;
  }

  set cash(value: string) {
    this._cash = value;
  }

  get cyberwareSlots(): CyberwareSlots {
    return this._cyberwareSlots;
  }

  set cyberwareSlots(value: CyberwareSlots) {
    this._cyberwareSlots = value;
  }

  get age(): string {
    return this._age;
  }

  set age(value: string) {
    this._age = value;
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
