import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
import { Message } from "./Message";
import * as data from "../assets/jsonFiles/generated.json";
import { User } from "./User";

@Injectable({
  providedIn: "root"
})
export class BackendService {
  public users: User[] = (data as any).default;
  public filteredUsers;
  public filteredMessages;
  public currentMessages: Message[];
  constructor() {}
  userSubject = new BehaviorSubject<User[]>(this.users);
  messageSubject = new Subject<Message[]>();
  searchObs = this.userSubject.asObservable();
  messageObs = this.messageSubject.asObservable();

  filterUser(term: string) {
    this.filteredUsers = this.users.filter(user => {
      return user.name.includes(term);
    });
    this.userSubject.next(this.filteredUsers);
  }
  changeMessages(messages: Message[]) {
    this.currentMessages = messages;
    this.messageSubject.next(messages);
  }
  filterMessages(term: string) {
    this.filteredMessages = this.currentMessages.filter(message => {
      return message.message.includes(term);
    });
    this.messageSubject.next(this.filteredMessages);
  }
}
