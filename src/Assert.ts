export default class Assert {
  static string<T>(sample: T): T | never {
    if (typeof (sample) === "string") {
      return sample;
    }
    throw new Error("not a string:" + typeof (sample));
  }

  static error<sting, T>(text: string, sample?: T): never {
    console.error(sample);
    throw new Error(text);
  }
}
