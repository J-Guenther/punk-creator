import {EventEmitter} from "@angular/core";
import {BaseAbility} from "./baseAbility";

export class Abilities {


  constructor() {
    this._changeEvent = new EventEmitter<{ability: BaseAbility; value: number}>();
  }


  private readonly _changeEvent: EventEmitter<{ ability: BaseAbility, value: number }>

  private _int: number = 0;
  private _ref: number = 0;
  private _dex: number = 0;
  private _tech: number = 0;
  private _cool: number = 0;
  private _will: number = 0;
  private _luckCurrent: number = 0;
  private _luckMax: number = 0;
  private _move: number = 0;
  private _body: number = 0;
  private _empCurrent: number = 0;
  private _empMax: number = 0;


  get int(): number {
    return this._int;
  }

  set int(value: number) {
    this._int = value;
    this._changeEvent.emit({ability: BaseAbility.INT, value});
  }

  get ref(): number {
    return this._ref;
  }

  set ref(value: number) {
    this._ref = value;
    this._changeEvent.emit({ability: BaseAbility.REF, value});
  }

  get dex(): number {
    return this._dex;
  }

  set dex(value: number) {
    this._dex = value;
    this._changeEvent.emit({ability: BaseAbility.DEX, value});
  }

  get tech(): number {
    return this._tech;
  }

  set tech(value: number) {
    this._tech = value;
    this._changeEvent.emit({ability: BaseAbility.TECH, value});
  }

  get cool(): number {
    return this._cool;
  }

  set cool(value: number) {
    this._cool = value;
    this._changeEvent.emit({ability: BaseAbility.COOL, value});
  }

  get will(): number {
    return this._will;
  }

  set will(value: number) {
    this._will = value;
    this._changeEvent.emit({ability: BaseAbility.WILL, value});
  }

  get luckCurrent(): number {
    return this._luckCurrent;
  }

  set luckCurrent(value: number) {
    this._luckCurrent = value;
  }

  get luckMax(): number {
    return this._luckMax;
  }

  set luckMax(value: number) {
    this._luckMax = value;
  }


  get move(): number {
    return this._move;
  }

  set move(value: number) {
    this._move = value;
    this._changeEvent.emit({ability: BaseAbility.MOVE, value});
  }

  get body(): number {
    return this._body;
  }

  set body(value: number) {
    this._body = value;
    this._changeEvent.emit({ability: BaseAbility.BODY, value});
  }

  get empCurrent(): number {
    return this._empCurrent;
  }

  set empCurrent(value: number) {
    this._empCurrent = value;
  }

  get empMax(): number {
    return this._empMax;
  }

  set empMax(value: number) {
    this._empMax = value;
  }


  get changeEvent(): EventEmitter<{ ability: BaseAbility; value: number }> {
    return this._changeEvent;
  }
}
