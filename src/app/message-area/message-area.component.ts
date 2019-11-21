import { Component, OnInit } from "@angular/core";
import { BackendService } from "../backend.service";
import { Message } from "../Message";

@Component({
  selector: "app-message-area",
  templateUrl: "./message-area.component.html",
  styleUrls: ["./message-area.component.css"]
})
export class MessageAreaComponent implements OnInit {
  public messages: Message[] = [];
  constructor(private backend: BackendService) {}
  ngOnInit() {
    this.backend.messageSubject.subscribe((messages: Message[]) => {
      this.messages = messages;
    });
  }
}
