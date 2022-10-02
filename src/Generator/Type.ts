import Assert from "../Assert";
import { TypeNames as Names } from "./TypeNames";

class Type {
  private readonly _name: any;

  constructor(name: string) {
    this._name = Type.assertName(name);
  }

  get name() {
    return this._name;
  }

  static get Names() {
    return Names;
  }

  static get Hero() {
    return Names.Hero;
  }

  static get Base() {
    return Names.Base;
  }

  static get Ship() {
    return Names.Ship;
  }

  static get Colony() {
    return Names.Colony;
  }

  static assert(sample: any) {
    if (sample instanceof (Type)) {
      return sample;
    }
    if (typeof (sample) === "string") {
      return new Type(sample);
    }
    if (typeof (sample) === "object") {
      let c = sample.constructor.name;
      if (c === "Type") {
        return new Type(sample.name);
      }
    }
    Assert.error("wrong Type", sample);
  }

  static assertName(name: any) {
    if (typeof name !== "string") {
      Assert.error("wrong Type given", name);
    }
    name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    if (Names[name] === undefined) {
      Assert.error("wrong Type name", name);
    }

    return Names[name];
  }
}

export default Type;
