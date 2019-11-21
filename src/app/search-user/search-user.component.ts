import { Component, OnInit } from "@angular/core";
import { BackendService } from "../backend.service";

@Component({
  selector: "app-search-user",
  templateUrl: "./search-user.component.html",
  styleUrls: ["./search-user.component.css"]
})
export class SearchUserComponent implements OnInit {
  searchTerm: string;
  constructor(private backend: BackendService) {}

  ngOnInit() {}
  searchUser($event) {
    this.backend.filterUser(this.searchTerm);
  }
}
