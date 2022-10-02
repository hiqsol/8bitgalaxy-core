import Assert from "../Assert";

class State {
  private _name: string;
  private _absent: boolean;
  private _turned: boolean;
  private _inserted: boolean;
  private _alternative: boolean;

  constructor(name: string) {
    this._name = name;
    this._absent = false;
    this._turned = false;
    this._inserted = false;
    this._alternative = false;
    this.parseName(name);
  }

  parseName(name: string) {
    name.split("-").forEach(part => this.applyName(part));
  }

  applyName(input: Names) {
    // input = input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
    const name = Names[input];
    if (input && !name) {
      Assert.error("wrong state: " + input);
    }
    if (name === Names.Absent) {
      this._absent = true;
    } else if (name === Names.Turned) {
      this._turned = true;
    } else if (name === Names.Inserted) {
      this._inserted = true;
    } else if (name === Names.Alternative) {
      this._alternative = true;
    }
  }

  get name() {
    return this._name;
  }

  get isAbsent() {
    return this._absent;
  }

  get isTurned() {
    return this._turned;
  }

  get isInserted() {
    return this._inserted;
  }

  get isAlternative() {
    return this._alternative;
  }

  get isVisible() {
    return !this._absent && !this._turned;
  }

  get visibility() {
    if (this.isAbsent) {
      return Names.Absent;
    }
    if (this.isTurned) {
      return Names.Turned;
    }
    return Names.Visible;
  }

  static assert(sample) {
    if (sample instanceof (State)) {
      return sample;
    }
    if (typeof (sample) === "string") {
      return new State(sample);
    }
    Assert.error("not a State", sample);
  }

  static isName(name) {
    return State.normalizeName(name) !== null;
  }

  static assertName(name) {
    let norm = State.normalizeName(name);
    if (name === null) {
      Assert.error("wrong State name", name);
    }
    return norm;
  }

  static normalizeName(name) {
    if (name === "") {
      return Names.Normal;
    }
    name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    if (Names[name] === undefined) {
      return null;
    }
    return Names[name];
  }
}

enum Names {
  Absent = "Absent",
  Turned = "Turned",
  Visible = "Visible",
  Ins = "Inserted",
  Inserted = "Inserted",
  Alt = "Alternative",
  Alternative = "Alternative",
}

export default State;
