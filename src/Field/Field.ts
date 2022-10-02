import Star from "../Star";

export default class Field {
  public stars: Array<Array<Star>>;

  public constructor() {
    this.stars = [[], [], []];
  }

  public star(y: number, x: number) {
    if (!this.stars[y][x]) {
      this.stars[y][x] = new Star(this, y, x);
    }

    return this.stars[y][x];
  }
}
