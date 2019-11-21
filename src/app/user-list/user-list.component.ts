import { Component, OnInit, Renderer } from "@angular/core";
import * as data from "../../assets/jsonFiles/generated.json";
import { Message } from "../Message";
import { BackendService } from "../backend.service";
import { User } from "../User.js";
@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.css"]
})
export class UserListComponent implements OnInit {
  constructor(private rendrer: Renderer, private backend: BackendService) {}
  users: User[];
  ngOnInit() {
    this.backend.userSubject.subscribe(users => (this.users = users));
  }
  ngAfterViewInit() {
    let tabs = document.getElementsByClassName("nav-link");
    tabs[0].className += " active";
    this.backend.changeMessages(this.users[0].messages);
  }
  onChange($event, messages: Message[]) {
    this.backend.changeMessages(messages);
    let tablinks = document.getElementsByClassName("nav-link");
    if (tablinks.length > 0) {
      for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
      }
    }
    $event.target.className += " active";
    // this.rendrer.setElementClass($event.target, "active", true);
  }
}
