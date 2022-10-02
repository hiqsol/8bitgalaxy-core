import Card from "../Card";
import Assert from "../Assert";
import Field from "../Field";

export default class Star extends WithCoordinate {
  private field: Field;
  ships: number | null[];
  bases: number | null[];
  heroes: number | null[];
  colonies: number | null[];

  public constructor(field: Field, y: number, x: number) {
    super(x, y);
    this.field = field;
    this.ships = [null, null, null, null];
    this.bases = [null, null, null];
    this.heroes = [null, null, null, null];
    this.colonies = [null, null, null];
  }

  public base(slot: number) {
    return this.bases[slot] ?? Card.AbsentBase;
  }

  public hero(slot: number) {
    return this.heroes[slot] ?? Card.AbsentHero;
  }

  ship(slot) {
    return this.ships[slot] ?? Card.AbsentShip;
  }

  colony(slot) {
    return this.colonies[slot] ?? Card.AbsentColony;
  }

  put(card, slot) {
    card = Card.assert(card);
    if (card.isBase) {
      return this.putToSlot(card, slot, this.bases);
    } else if (card.isShip) {
      return this.putToSlot(card, slot, this.ships);
    } else if (card.isHero) {
      return this.putToSlot(card, slot, this.heroes);
    } else if (card.isColony) {
      return this.putToSlot(card, slot, this.colonies);
    }
    Assert.error("wrong card type", card);
  }

  putToSlot(card, slot, slots) {
    if (slots[slot] === undefined) {
      Assert.error("non-existent slot", slot);
    }
    if (slots[slot] !== null) {
      Assert.error("slot already taken", slot);
    }
    slots[slot] = card;
    return this;
  }
}
