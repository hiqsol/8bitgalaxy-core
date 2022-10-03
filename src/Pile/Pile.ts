import Card from "../Card";
import Direction from "../Direction";

export default class Pile {
  private readonly _cards: Card[];
  private readonly _type: any;
  private readonly _direction: any;

  constructor(type: string, direction: string | Direction) {
    this._type = type;
    this._direction = Direction.assert(direction);
    this._cards = [];
  }

  get direction() {
    return this._direction;
  }

  get type() {
    return this._type;
  }

  get size() {
    return this._cards.length;
  }

  get top() {
    return this._cards[this.size - 1] ?? Card.assert("absent " + this.type);
  }

  get(i) {
    return this._cards[i] ?? (i === 0 ? this.top : null);
  }

  putUnder(card: any) {
    this._cards.unshift(Card.assert(card));
  }

  put(card: string | Card) {
    this._cards.push(Card.assert(card));
  }
}
