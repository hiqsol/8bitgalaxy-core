import Home from "../Home";
import Direction from "../Direction";

export default class Player extends WithCoordinate {
  private readonly _home: Home;
  private readonly _name: any;
  private readonly _race: any;
  private readonly _direction: any;

  public constructor(name, race, direction, y: number, x: number) {
    super(x, y);
    this._home = new Home(this);
    this._name = name;
    this._race = race;
    this._direction = Direction.assert(direction);
  }

  public get home() {
    return this._home;
  }

  public get name() {
    return this._name;
  }

  public get race() {
    return this._race;
  }

  public get direction() {
    return this._direction;
  }
}
