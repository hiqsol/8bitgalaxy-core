import Row from "../Row";
import Pile from "../Pile";
import Player from "../Player";
import Direction from "../Direction";

export default class Home {
  private readonly _discard: Pile;
  private readonly _estate: Row;
  private readonly _factory: Row;
  private readonly _research: Row;

  constructor(private readonly _player: Player) {
    this._discard = new Pile("Discard", Direction.TopToBottom);
    this._estate = new Row("Estate", Direction.LeftToRight, 5);
    this._factory = new Row("Factory", Direction.TopToBottom, 4);
    this._research = new Row("Research", Direction.TopToBottom, 5);
  }

  public get player() {
    return this._player;
  }

  public get direction() {
    return this._player.direction;
  }

  public get reserve() {
    return this._estate.pile(0);
  }

  public get hand() {
    return this._estate.pile(1);
  }

  public get techs() {
    return this._estate.pile(2);
  }

  public get assets() {
    return this._estate.pile(3);
  }

  public get missions() {
    return this._estate.pile(4);
  }

  public get discard() {
    return this._discard;
  }

  public get estate() {
    return this._estate;
  }

  public get factory() {
    return this._factory;
  }

  public get research() {
    return this._research;
  }

  public get scrap() {
    return this._factory.pile(0);
  }

  public get ideas() {
    return this._research.pile(0);
  }
}
