import { Message } from "./Message";

export class User {
  public _id: number;
  public index: number;
  public picture: string;
  public age: number;
  public name: string;
  public gender: string;
  public email: string;
  public phone: string;
  public messages: Message[];
}
