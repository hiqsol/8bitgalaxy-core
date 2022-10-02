import Field from "../Field";
import Player from "../Player";
import Assert from "../Assert";

export default class Board {
  private readonly _field: Field;
  private readonly _players: Player[] = [];

  constructor() {
    this._field = new Field();
  }

  public get field() {
    return this._field;
  }

  public star(y: number, x: number) {
    return this.field.star(y, x);
  }

  public player(no: number) {
    return this._players[this.assertPlayerNo(no) - 1];
  }

  public home(no: number) {
    return this.player(no).home;
  }

  public addPlayer(player: Player) {
    this._players.push(player);
  }

  assertPlayerNo(no: number) {
    if (no < 1 || no > this._players.length) {
      Assert.error("wrong player no", no);
    }

    return no;
  }
}
