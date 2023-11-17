import {Skill} from "./skill";
import {BaseAbility} from "./baseAbility";
import {EventEmitter} from "@angular/core";

export class Skills {


  constructor(abilityChangeEvent: EventEmitter<{ ability: BaseAbility; value: number }>) {
    this._concentration = new Skill("Concentration", BaseAbility.WILL, 1);
    this._concealObject = new Skill("Conceal/Reveal Object", BaseAbility.INT, 1);
    this._lipReading = new Skill("Lip Reading", BaseAbility.INT, 1);
    this._perception = new Skill("Perception", BaseAbility.INT, 1);
    this._tracking = new Skill("Tracking", BaseAbility.INT, 1);
    this._athletics = new Skill("Athletics", BaseAbility.DEX, 1);
    this._contortionist = new Skill("Contortionist", BaseAbility.DEX, 1);
    this._dance = new Skill("Dance", BaseAbility.DEX, 1);
    this._endurance = new Skill("Endurance", BaseAbility.WILL, 1);
    this._resistTorture = new Skill("Resist Torture / Drugs", BaseAbility.WILL, 1);
    this._stealth = new Skill("Stealth", BaseAbility.DEX, 1);
    this._driveLandVehicle = new Skill("Drive Land Vehicle", BaseAbility.REF, 1);
    this._pilotAirVehicle = new Skill("Pilot Air Vehicle", BaseAbility.REF, 2);
    this._pilotSeaVehicle = new Skill("Pilot Sea Vehicle", BaseAbility.REF, 1);
    this._riding = new Skill("Riding", BaseAbility.REF, 1);
    this._accounting = new Skill("Accounting", BaseAbility.INT, 1);
    this._animalHandling = new Skill("Animal Handling", BaseAbility.INT, 1);
    this._bureaucracy = new Skill("Bureaucracy", BaseAbility.INT, 1);
    this._business = new Skill("Business", BaseAbility.INT, 1);
    this._composition = new Skill("Composition", BaseAbility.INT, 1);
    this._criminology = new Skill("Criminology", BaseAbility.INT, 1);
    this._cryptography = new Skill("Cryptography", BaseAbility.INT, 1);
    this._deduction = new Skill("Deduction", BaseAbility.INT, 1);
    this._education = new Skill("Education", BaseAbility.INT, 1);
    this._gamble = new Skill("Gamble", BaseAbility.INT, 1);
    this._streetslang = new Skill("Streetslang", BaseAbility.INT, 1);
    this._language2 = new Skill("", BaseAbility.INT, 1);
    this._language3 = new Skill("", BaseAbility.INT, 1);
    this._librarySearch = new Skill("Library Search", BaseAbility.INT, 1);
    this._yourHome = new Skill("Your Home", BaseAbility.INT, 1);
    this._localExpert2 = new Skill("", BaseAbility.INT, 1);
    this._localExpert3 = new Skill("", BaseAbility.INT, 1);
    this._science1 = new Skill("", BaseAbility.INT, 1);
    this._science2 = new Skill("", BaseAbility.INT, 1);
    this._tactics = new Skill("Tactics", BaseAbility.INT, 1);
    this._wildernessSurvival = new Skill("Wilderness Survival", BaseAbility.INT, 1);
    this._brawling = new Skill("Brawling", BaseAbility.DEX, 1);
    this._evasion = new Skill("Evasion", BaseAbility.DEX, 1);
    this._martialArts = new Skill("Martial Arts", BaseAbility.DEX, 2);
    this._meleeWeapon = new Skill("Melee Weapon", BaseAbility.DEX, 1);
    this._acting = new Skill("Acting", BaseAbility.COOL, 1);
    this._playInstrument1 = new Skill("", BaseAbility.TECH, 1);
    this._playInstrument2 = new Skill("", BaseAbility.TECH, 1);
    this._archery = new Skill("Archery", BaseAbility.REF, 1);
    this._autofire = new Skill("Autofire", BaseAbility.REF, 2);
    this._handgun = new Skill("Handgun", BaseAbility.REF, 1);
    this._heavyWeapons = new Skill("Heavy Weapons", BaseAbility.REF, 2);
    this._shoulderArms = new Skill("Shoulder Arms", BaseAbility.REF, 1);
    this._bribery = new Skill("Bribery", BaseAbility.COOL, 1);
    this._conversation = new Skill("Conversation", BaseAbility.EMP, 1);
    this._humanPerception = new Skill("Human Perception", BaseAbility.EMP, 1);
    this._interrogation = new Skill("Interrogation", BaseAbility.COOL, 1);
    this._persuasion = new Skill("Persuasion", BaseAbility.COOL, 1);
    this._personalGrooming = new Skill("Personal Grooming", BaseAbility.COOL, 1);
    this._streetwise = new Skill("Streetwise", BaseAbility.COOL, 1);
    this._trading = new Skill("Trading", BaseAbility.COOL, 1);
    this._wardrobe = new Skill("Wardrobe & Style", BaseAbility.COOL, 1);
    this._airVehicleTech = new Skill("Air Vehicle Tech", BaseAbility.TECH, 1);
    this._basicTech = new Skill("Basic Tech", BaseAbility.TECH, 1);
    this._cyberTech = new Skill("Cybertech", BaseAbility.TECH, 1);
    this._demolitions = new Skill("Demolitions", BaseAbility.TECH, 2);
    this._electronics = new Skill("Electronics / Security Tech", BaseAbility.TECH, 1);
    this._firstAid = new Skill("First Aid", BaseAbility.TECH, 1);
    this._forgery = new Skill("Forgery", BaseAbility.TECH, 1);
    this._landVehicleTech = new Skill("Land Vehicle Tech", BaseAbility.TECH, 1);
    this._paintDrawSculpt = new Skill("Paint / Draw / Sculpt", BaseAbility.TECH, 1);
    this._paramedic = new Skill("Paramedic", BaseAbility.TECH, 2);
    this._photographyFilm = new Skill("Photography / Film", BaseAbility.TECH, 1);
    this._pickLock = new Skill("Pick Lock", BaseAbility.TECH, 1);
    this._pickPocket = new Skill("Pick Pocket", BaseAbility.TECH, 1);
    this._seaVehicleTech = new Skill("Sea Vehicle Tech", BaseAbility.TECH, 1);
    this._weaponstech = new Skill("Weaponstech", BaseAbility.TECH, 1);

    this._abilityChangeEvent = abilityChangeEvent;
    this._abilityChangeEvent.subscribe(e => {
      this.updateSkillsBasedOnAbility(e);
    })
  }

  private readonly _abilityChangeEvent: EventEmitter<{ ability: BaseAbility; value: number }>;

  private _concentration: Skill;
  private _concealObject: Skill;
  private _lipReading: Skill;
  private _perception: Skill;
  private _tracking: Skill;
  private _athletics: Skill;
  private _contortionist: Skill;
  private _dance: Skill;
  private _endurance: Skill;
  private _resistTorture: Skill;
  private _stealth: Skill;
  private _driveLandVehicle: Skill;
  private _pilotAirVehicle: Skill;
  private _pilotSeaVehicle: Skill;
  private _riding: Skill;
  private _accounting: Skill;
  private _animalHandling: Skill;
  private _bureaucracy: Skill;
  private _business: Skill;
  private _composition: Skill;
  private _criminology: Skill;
  private _cryptography: Skill;
  private _deduction: Skill;
  private _education: Skill;
  private _gamble: Skill;
  private _streetslang: Skill;
  private _language2: Skill;
  private _language3: Skill;
  private _librarySearch: Skill;
  private _yourHome: Skill;
  private _localExpert2: Skill;
  private _localExpert3: Skill;
  private _science1: Skill;
  private _science2: Skill;
  private _tactics: Skill;
  private _wildernessSurvival: Skill;
  private _brawling: Skill;
  private _evasion: Skill;
  private _martialArts: Skill;
  private _meleeWeapon: Skill;
  private _acting: Skill;
  private _playInstrument1: Skill;
  private _playInstrument2: Skill;
  private _archery: Skill;
  private _autofire: Skill;
  private _handgun: Skill;
  private _heavyWeapons: Skill;
  private _shoulderArms: Skill;
  private _bribery: Skill;
  private _conversation: Skill;
  private _humanPerception: Skill;
  private _interrogation: Skill;
  private _persuasion: Skill;
  private _personalGrooming: Skill;
  private _streetwise: Skill;
  private _trading: Skill;
  private _wardrobe: Skill;
  private _airVehicleTech: Skill;
  private _basicTech: Skill;
  private _cyberTech: Skill;
  private _demolitions: Skill;
  private _electronics: Skill;
  private _firstAid: Skill;
  private _forgery: Skill;
  private _landVehicleTech: Skill;
  private _paintDrawSculpt: Skill;
  private _paramedic: Skill;
  private _photographyFilm: Skill;
  private _pickLock: Skill;
  private _pickPocket: Skill;
  private _seaVehicleTech: Skill;
  private _weaponstech: Skill;


  set concentration(value: Skill) {
    this._concentration = value;
  }

  set concealObject(value: Skill) {
    this._concealObject = value;
  }

  set lipReading(value: Skill) {
    this._lipReading = value;
  }

  set perception(value: Skill) {
    this._perception = value;
  }

  set tracking(value: Skill) {
    this._tracking = value;
  }

  set athletics(value: Skill) {
    this._athletics = value;
  }

  set contortionist(value: Skill) {
    this._contortionist = value;
  }

  set dance(value: Skill) {
    this._dance = value;
  }

  set endurance(value: Skill) {
    this._endurance = value;
  }

  set resistTorture(value: Skill) {
    this._resistTorture = value;
  }

  set stealth(value: Skill) {
    this._stealth = value;
  }

  set driveLandVehicle(value: Skill) {
    this._driveLandVehicle = value;
  }

  set pilotAirVehicle(value: Skill) {
    this._pilotAirVehicle = value;
  }

  set pilotSeaVehicle(value: Skill) {
    this._pilotSeaVehicle = value;
  }

  set riding(value: Skill) {
    this._riding = value;
  }

  set accounting(value: Skill) {
    this._accounting = value;
  }

  set animalHandling(value: Skill) {
    this._animalHandling = value;
  }

  set bureaucracy(value: Skill) {
    this._bureaucracy = value;
  }

  set business(value: Skill) {
    this._business = value;
  }

  set composition(value: Skill) {
    this._composition = value;
  }

  set criminology(value: Skill) {
    this._criminology = value;
  }

  set cryptography(value: Skill) {
    this._cryptography = value;
  }

  set deduction(value: Skill) {
    this._deduction = value;
  }

  set education(value: Skill) {
    this._education = value;
  }

  set gamble(value: Skill) {
    this._gamble = value;
  }

  set streetslang(value: Skill) {
    this._streetslang = value;
  }

  set language2(value: Skill) {
    this._language2 = value;
  }

  set language3(value: Skill) {
    this._language3 = value;
  }

  set librarySearch(value: Skill) {
    this._librarySearch = value;
  }

  set yourHome(value: Skill) {
    this._yourHome = value;
  }

  set localExpert2(value: Skill) {
    this._localExpert2 = value;
  }

  set localExpert3(value: Skill) {
    this._localExpert3 = value;
  }

  set science1(value: Skill) {
    this._science1 = value;
  }

  set science2(value: Skill) {
    this._science2 = value;
  }

  set tactics(value: Skill) {
    this._tactics = value;
  }

  set wildernessSurvival(value: Skill) {
    this._wildernessSurvival = value;
  }

  set brawling(value: Skill) {
    this._brawling = value;
  }

  set evasion(value: Skill) {
    this._evasion = value;
  }

  set martialArts(value: Skill) {
    this._martialArts = value;
  }

  set meleeWeapon(value: Skill) {
    this._meleeWeapon = value;
  }

  set acting(value: Skill) {
    this._acting = value;
  }

  set playInstrument1(value: Skill) {
    this._playInstrument1 = value;
  }

  set playInstrument2(value: Skill) {
    this._playInstrument2 = value;
  }

  set archery(value: Skill) {
    this._archery = value;
  }

  set autofire(value: Skill) {
    this._autofire = value;
  }

  set handgun(value: Skill) {
    this._handgun = value;
  }


  get concentration(): Skill {
    return this._concentration;
  }

  get concealObject(): Skill {
    return this._concealObject;
  }

  get lipReading(): Skill {
    return this._lipReading;
  }

  get perception(): Skill {
    return this._perception;
  }

  get tracking(): Skill {
    return this._tracking;
  }

  get athletics(): Skill {
    return this._athletics;
  }

  get contortionist(): Skill {
    return this._contortionist;
  }

  get dance(): Skill {
    return this._dance;
  }

  get endurance(): Skill {
    return this._endurance;
  }

  get resistTorture(): Skill {
    return this._resistTorture;
  }

  get stealth(): Skill {
    return this._stealth;
  }

  get driveLandVehicle(): Skill {
    return this._driveLandVehicle;
  }

  get pilotAirVehicle(): Skill {
    return this._pilotAirVehicle;
  }

  get pilotSeaVehicle(): Skill {
    return this._pilotSeaVehicle;
  }

  get riding(): Skill {
    return this._riding;
  }

  get accounting(): Skill {
    return this._accounting;
  }

  get animalHandling(): Skill {
    return this._animalHandling;
  }

  get bureaucracy(): Skill {
    return this._bureaucracy;
  }

  get business(): Skill {
    return this._business;
  }

  get composition(): Skill {
    return this._composition;
  }

  get criminology(): Skill {
    return this._criminology;
  }

  get cryptography(): Skill {
    return this._cryptography;
  }

  get deduction(): Skill {
    return this._deduction;
  }

  get education(): Skill {
    return this._education;
  }

  get gamble(): Skill {
    return this._gamble;
  }

  get streetslang(): Skill {
    return this._streetslang;
  }

  get language2(): Skill {
    return this._language2;
  }

  get language3(): Skill {
    return this._language3;
  }

  get librarySearch(): Skill {
    return this._librarySearch;
  }

  get yourHome(): Skill {
    return this._yourHome;
  }

  get localExpert2(): Skill {
    return this._localExpert2;
  }

  get localExpert3(): Skill {
    return this._localExpert3;
  }

  get science1(): Skill {
    return this._science1;
  }

  get science2(): Skill {
    return this._science2;
  }

  get tactics(): Skill {
    return this._tactics;
  }

  get wildernessSurvival(): Skill {
    return this._wildernessSurvival;
  }

  get brawling(): Skill {
    return this._brawling;
  }

  get evasion(): Skill {
    return this._evasion;
  }

  get martialArts(): Skill {
    return this._martialArts;
  }

  get meleeWeapon(): Skill {
    return this._meleeWeapon;
  }

  get acting(): Skill {
    return this._acting;
  }

  get playInstrument1(): Skill {
    return this._playInstrument1;
  }

  get playInstrument2(): Skill {
    return this._playInstrument2;
  }

  get archery(): Skill {
    return this._archery;
  }

  get autofire(): Skill {
    return this._autofire;
  }

  get handgun(): Skill {
    return this._handgun;
  }


  get heavyWeapons(): Skill {
    return this._heavyWeapons;
  }

  set heavyWeapons(value: Skill) {
    this._heavyWeapons = value;
  }

  get shoulderArms(): Skill {
    return this._shoulderArms;
  }

  set shoulderArms(value: Skill) {
    this._shoulderArms = value;
  }

  get bribery(): Skill {
    return this._bribery;
  }

  set bribery(value: Skill) {
    this._bribery = value;
  }

  get conversation(): Skill {
    return this._conversation;
  }

  set conversation(value: Skill) {
    this._conversation = value;
  }

  get humanPerception(): Skill {
    return this._humanPerception;
  }

  set humanPerception(value: Skill) {
    this._humanPerception = value;
  }

  get interrogation(): Skill {
    return this._interrogation;
  }

  set interrogation(value: Skill) {
    this._interrogation = value;
  }

  get persuasion(): Skill {
    return this._persuasion;
  }

  set persuasion(value: Skill) {
    this._persuasion = value;
  }

  get personalGrooming(): Skill {
    return this._personalGrooming;
  }

  set personalGrooming(value: Skill) {
    this._personalGrooming = value;
  }

  get streetwise(): Skill {
    return this._streetwise;
  }

  set streetwise(value: Skill) {
    this._streetwise = value;
  }

  get trading(): Skill {
    return this._trading;
  }

  set trading(value: Skill) {
    this._trading = value;
  }

  get wardrobe(): Skill {
    return this._wardrobe;
  }

  set wardrobe(value: Skill) {
    this._wardrobe = value;
  }

  get airVehicleTech(): Skill {
    return this._airVehicleTech;
  }

  set airVehicleTech(value: Skill) {
    this._airVehicleTech = value;
  }

  get basicTech(): Skill {
    return this._basicTech;
  }

  set basicTech(value: Skill) {
    this._basicTech = value;
  }

  get cyberTech(): Skill {
    return this._cyberTech;
  }

  set cyberTech(value: Skill) {
    this._cyberTech = value;
  }

  get demolitions(): Skill {
    return this._demolitions;
  }

  set demolitions(value: Skill) {
    this._demolitions = value;
  }

  get electronics(): Skill {
    return this._electronics;
  }

  set electronics(value: Skill) {
    this._electronics = value;
  }

  get firstAid(): Skill {
    return this._firstAid;
  }

  set firstAid(value: Skill) {
    this._firstAid = value;
  }

  get forgery(): Skill {
    return this._forgery;
  }

  set forgery(value: Skill) {
    this._forgery = value;
  }

  get landVehicleTech(): Skill {
    return this._landVehicleTech;
  }

  set landVehicleTech(value: Skill) {
    this._landVehicleTech = value;
  }

  get paintDrawSculpt(): Skill {
    return this._paintDrawSculpt;
  }

  set paintDrawSculpt(value: Skill) {
    this._paintDrawSculpt = value;
  }

  get paramedic(): Skill {
    return this._paramedic;
  }

  set paramedic(value: Skill) {
    this._paramedic = value;
  }

  get photographyFilm(): Skill {
    return this._photographyFilm;
  }

  set photographyFilm(value: Skill) {
    this._photographyFilm = value;
  }

  get pickLock(): Skill {
    return this._pickLock;
  }

  set pickLock(value: Skill) {
    this._pickLock = value;
  }

  get pickPocket(): Skill {
    return this._pickPocket;
  }

  set pickPocket(value: Skill) {
    this._pickPocket = value;
  }

  get seaVehicleTech(): Skill {
    return this._seaVehicleTech;
  }

  set seaVehicleTech(value: Skill) {
    this._seaVehicleTech = value;
  }

  get weaponstech(): Skill {
    return this._weaponstech;
  }

  set weaponstech(value: Skill) {
    this._weaponstech = value;
  }

  get abilityChangeEvent(): EventEmitter<{ ability: BaseAbility; value: number }> {
    return this._abilityChangeEvent;
  }

  private updateSkillsBasedOnAbility(abilityChange: { ability: BaseAbility; value: number }): void {
    switch (abilityChange.ability) {
      case BaseAbility.WILL:
        this.concentration.stat = abilityChange.value;
        this.endurance.stat = abilityChange.value;
        this.resistTorture.stat = abilityChange.value;
        break;
      case BaseAbility.INT:
        this.concealObject.stat = abilityChange.value;
        this.lipReading.stat = abilityChange.value;
        this.perception.stat = abilityChange.value;
        this.tracking.stat = abilityChange.value;
        this.accounting.stat = abilityChange.value;
        this.animalHandling.stat = abilityChange.value;
        this.bureaucracy.stat = abilityChange.value;
        this.business.stat = abilityChange.value;
        this.composition.stat = abilityChange.value;
        this.criminology.stat = abilityChange.value;
        this.cryptography.stat = abilityChange.value;
        this.deduction.stat = abilityChange.value;
        this.education.stat = abilityChange.value;
        this.gamble.stat = abilityChange.value;
        this.language2.stat = abilityChange.value;
        this.language3.stat = abilityChange.value;
        this.streetslang.stat = abilityChange.value;
        this.librarySearch.stat = abilityChange.value;
        this.yourHome.stat = abilityChange.value;
        this.localExpert2.stat = abilityChange.value;
        this.localExpert3.stat = abilityChange.value;
        this.science1.stat = abilityChange.value;
        this.science2.stat = abilityChange.value;
        this.tactics.stat = abilityChange.value;
        this.wildernessSurvival.stat = abilityChange.value;
        break;
      case BaseAbility.DEX:
        this.athletics.stat = abilityChange.value;
        this.contortionist.stat = abilityChange.value;
        this.dance.stat = abilityChange.value;
        this.stealth.stat = abilityChange.value;
        this.brawling.stat = abilityChange.value;
        this.evasion.stat = abilityChange.value;
        this.martialArts.stat = abilityChange.value;
        this.meleeWeapon.stat = abilityChange.value;
        this.archery.stat = abilityChange.value;
        this.autofire.stat = abilityChange.value;
        this.handgun.stat = abilityChange.value;
        this.heavyWeapons.stat = abilityChange.value;
        this.shoulderArms.stat = abilityChange.value;
        break;
      case BaseAbility.REF:
        this.driveLandVehicle.stat = abilityChange.value;
        this.pilotAirVehicle.stat = abilityChange.value;
        this.pilotSeaVehicle.stat = abilityChange.value;
        this.riding.stat = abilityChange.value;
        break;
      case BaseAbility.COOL:
        this.acting.stat = abilityChange.value;
        this.bribery.stat = abilityChange.value;
        this.interrogation.stat = abilityChange.value;
        this.persuasion.stat = abilityChange.value;
        this.personalGrooming.stat = abilityChange.value;
        this.streetwise.stat = abilityChange.value;
        this.trading.stat = abilityChange.value;
        this.wardrobe.stat = abilityChange.value;
        break;
      case BaseAbility.TECH:
        this.playInstrument1.stat = abilityChange.value;
        this.playInstrument2.stat = abilityChange.value;
        this.airVehicleTech.stat = abilityChange.value;
        this.basicTech.stat = abilityChange.value;
        this.cyberTech.stat = abilityChange.value;
        this.demolitions.stat = abilityChange.value;
        this.electronics.stat = abilityChange.value;
        this.firstAid.stat = abilityChange.value;
        this.forgery.stat = abilityChange.value;
        this.landVehicleTech.stat = abilityChange.value;
        this.paintDrawSculpt.stat = abilityChange.value;
        this.paramedic.stat = abilityChange.value;
        this.photographyFilm.stat = abilityChange.value;
        this.pickLock.stat = abilityChange.value;
        this.pickPocket.stat = abilityChange.value;
        this.seaVehicleTech.stat = abilityChange.value;
        this.weaponstech.stat = abilityChange.value;
        break;
      case BaseAbility.EMP:
        this.conversation.stat = abilityChange.value;
        this.humanPerception.stat = abilityChange.value;
        break;
    }
  }
}
