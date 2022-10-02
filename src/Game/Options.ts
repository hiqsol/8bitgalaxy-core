import Assert from "../Assert";

export default class Options {
  private _players: any;
  private _name: any;

  public constructor(options: object) {
    this.init(options);
  }

  public get name() {
    return this._name;
  }

  public get players() {
    return this._players;
  }

  static assert(sample: any): Options | never {
    if (!sample) {
      return new Options({});
    }
    if (sample instanceof (Object)) {
      return new Options(sample);
    }
    if (sample instanceof (Options)) {
      return sample;
    }
    if (typeof sample === "string") {
      return Options.fromString(sample);
    }
    Assert.error("not an Options", sample);
  }

  static fromString(name: string): Options | never {
    Assert.error("TODO implement", name);
  }

  private init(options: any) {
    this._players = options.players ?? {
      p1: "human",
      p2: "ai",
    };
    this._name = options.name ?? this.generateName();
  }

  private generateName() {
    return this.players.p1 + " vs " + this.players.p2;
  }
}
