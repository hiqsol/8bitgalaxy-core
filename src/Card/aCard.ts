import Specs from "./Specs";
import Decks from "./Decks";
import Action from "./Action";
import Assert from "./Assert";

class aCard {
  private _specs: any;
  private _alternative: Specs | null | undefined;

  constructor(specs) {
    this._specs = Specs.assert(specs);
    this._alternative = this.findAlternative(specs.Alternative);
  }

  get Specs() {
    return this._specs;
  }

  get Alternative() {
    return this._alternative;
  }

  get Name() {
    return this.Specs.Name;
  }

  get Type() {
    return this.Specs.Type;
  }

  get Race() {
    return this.Specs.Race;
  }

  get Level() {
    return this.Specs.Level;
  }

  get Klass() {
    return this.Specs.Klass;
  }

  get Requires() {
    return this.Specs.Requires;
  }

  get Defense() {
    return this.Specs.Defense;
  }

  get Attack() {
    return this.Specs.Attack;
  }

  get Colonization() {
    return this.Specs.Colonization;
  }

  get Science() {
    return this.Specs.Science;
  }

  get Production() {
    return this.Specs.Production;
  }

  get Cooperation() {
    return this.Specs.Cooperation;
  }

  get Utilization() {
    return this.Specs.Utilization;
  }

  get isHero() {
    return this.isType(Types.Hero);
  }

  get isColony() {
    return this.isType(Types.Colony);
  }

  get isShip() {
    return this.isType(Types.Ship);
  }

  get isBase() {
    return this.isType(Types.Base);
  }

  isType(type) {
    return this.Type === type;
  }

  getValue(prop) {
    return this.Specs.getValue(prop);
  }

  static assert(sample) {
    if (sample instanceof (aCard)) {
      return sample;
    }
    if (typeof (sample) === "string") {
      return new aCard(Decks.get(sample));
    }
    Assert.error("not a aCard", sample);
  }

  findAlternative(alt) {
    if (!alt) {
      return null;
    }
    if (typeof (alt) === "string") {
      alt = Action.assert(alt);
    }
    if (alt instanceof Action) {
      return Decks.get([this.Race, this.Type, alt.short].join("-"));
    }
    Assert.error("wrong alternative", alt);
  }
}

const Types = Object.freeze({
  Hero: "Hero",
  Base: "Base",
  Ship: "Ship",
  Colony: "Colony",
});

export default aCard;
