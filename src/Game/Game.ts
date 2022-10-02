import Card from "../Card";
import Board from "../Board";
import Player from "../Player";
import Direction from "../Direction";
import Assert from "../Assert";
import Options from "./Options";
// import Drawer from "./DivDrawer/Drawer.js";

export default class Game {
  private readonly _options: Options;
  private readonly _board: Board;

  public constructor(options: object = {}) {
    this._options = Options.assert(options);
    // this._drawer = options.drawer ?? new Drawer();
    this._board = options.hasOwnProperty("board") ? options.board : new Board();
    this.init();
  }

  public card(name: string | Card): Card {
    return Card.assert(name);
  }

  public get name() {
    return this._options.name;
  }

  public get board() {
    return this._board;
  }

  // get drawer() {
  //   return this._drawer;
  // }

  public get options(): Options {
    return this._options;
  }

  private init() {
    let direction = Direction.TopToBottom;
    for (const [name, race] of Object.entries(this.options.players)) {
      this.board.addPlayer(new Player(name, race, direction, 0, 0));
      direction = direction.reversed;
    }
    return this;
  }

  // start(options = null, parent = null) {
  //   this.draw(parent, this);
  // }

  // draw(parent = null, obj = null, y, x) {
  //   return this.drawer.draw(parent, obj ?? this, y, x);
  // }

  static create(options = {}) {
    return new Game(options);
  }

  static assert<T>(sample: T): T | never {
    if (sample instanceof (Game)) {
      return sample;
    }
    Assert.error("not a Game", sample);
  }
}
