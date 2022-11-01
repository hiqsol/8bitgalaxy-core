export default class Assert {
  static string<T>(sample: T): T | never {
    if (typeof (sample) === "string") {
      return sample;
    }
    throw new Error("not a string:" + typeof (sample));
  }

  static error(text: string, sample?: any): never {
    console.error(sample);
    throw new Error(text);
  }
}
