import { Component, OnInit } from "@angular/core";
import { BackendService } from "../backend.service";

@Component({
  selector: "app-search-message",
  templateUrl: "./search-message.component.html",
  styleUrls: ["./search-message.component.css"]
})
export class SearchMessageComponent implements OnInit {
  searchTerm: string;
  constructor(private backend: BackendService) {}

  ngOnInit() {}
  searchMessages($event) {
    this.backend.filterMessages(this.searchTerm);
  }
}
