import GenDeck from "./GenDeck";

export default class Generator {
  constructor() {
    this._gens = {};
    this.add("Human");
    this.add("AI");
  }

  add(race) {
    this._gens[race] = new GenDeck(race);
  }

  all() {
    let res = {};
    for (const race in this._gens) {
      Object.assign(res, this._gens[race].all());
    }
    return res;
  }

  stats() {
    let all = this.all();
  }
}
