export class Serie {
  private _id: number;
  private _name: string;
  private _channel: string;
  private _seasons: number;
  private _description: string;
  private _webpage: string;
  private _poster: string;

  constructor(_id: number, _name: string, _channel: string, _seasons: number, _description: string, _webpage: string, _poster: string) {
      this._id = _id;
      this._name = _name;
      this._channel = _channel;
      this._seasons = _seasons;
      this._description = _description;
      this._webpage = _webpage;
      this._poster = _poster;
  }

  /**
   * Getter id
   * @return {number}
   */
public get id(): number {
  return this._id;
}

  /**
   * Getter title
   * @return {string}
   */
public get name(): string {
  return this._name;
}

  /**
   * Getter channel
   * @return {string}
   */
public get channel(): string {
  return this._channel;
}

  /**
   * Getter seasons
   * @return {number}
   */
public get seasons(): number {
  return this._seasons;
}

  /**
   * Getter description
   * @return {string}
   */
public get description(): string {
  return this._description;
}

  /**
   * Getter webpage
   * @return {string}
   */
public get webpage(): string {
  return this._webpage;
}

  /**
   * Getter poster
   * @return {string}
   */
public get poster(): string {
  return this._poster;
}

  /**
   * Setter id
   * @param {number} value
   */
public set id(value: number) {
  this._id = value;
}

  /**
   * Setter title
   * @param {string} value
   */
public set name(value: string) {
  this._name = value;
}

  /**
   * Setter channel
   * @param {string} value
   */
public set channel(value: string) {
  this._channel = value;
}

  /**
   * Setter seasons
   * @param {number} value
   */
public set seasons(value: number) {
  this._seasons = value;
}

  /**
   * Setter description
   * @param {string} value
   */
public set description(value: string) {
  this._description = value;
}

  /**
   * Setter webpage
   * @param {string} value
   */
public set webpage(value: string) {
  this._webpage = value;
}

  /**
   * Setter poster
   * @param {string} value
   */
public set poster(value: string) {
  this._poster = value;
}

}
