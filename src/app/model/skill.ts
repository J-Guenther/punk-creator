import {BaseAbility} from "./baseAbility";

export class Skill {


  constructor(name: string, baseAbility: BaseAbility, expertise: number) {
    this._name = name;
    this._baseAbility = baseAbility;
    this._expertise = expertise;
    this._lvl = 0;
    this._stat = 0;
    this._base = 0;
    this._modifier = 0;
  }

  private _name: string;
  private _baseAbility: BaseAbility;
  private _lvl: number;
  private _stat: number;
  private _base: number;
  private _modifier: number;
  private _expertise: number;


  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get baseAbility(): BaseAbility {
    return this._baseAbility;
  }

  set baseAbility(value: BaseAbility) {
    this._baseAbility = value;
  }

  get lvl(): number {
    return this._lvl;
  }

  set lvl(value: number) {
    this._lvl = value;
    this.updateBase();
  }

  get stat(): number {
    return this._stat;
  }

  set stat(value: number) {
    this._stat = value;
    this.updateBase();
  }

  get base(): number {
    return this._base;
  }


  get modifier(): number {
    return this._modifier;
  }

  set modifier(value: number) {
    this._modifier = value;
  }

  get expertise(): number {
    return this._expertise;
  }

  set expertise(value: number) {
    this._expertise = value;
  }

  private updateBase() {
    this._base = this._stat + this._lvl;
  }


}
