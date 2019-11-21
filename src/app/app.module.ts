import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SideSectionComponent } from "./side-section/side-section.component";
import { SearchUserComponent } from "./search-user/search-user.component";
import { MessageAreaComponent } from "./message-area/message-area.component";
import { UserListComponent } from "./user-list/user-list.component";
import { BackendService } from "./backend.service";
import { SearchMessageComponent } from './search-message/search-message.component';

@NgModule({
  declarations: [
    AppComponent,
    SideSectionComponent,
    SearchUserComponent,
    MessageAreaComponent,
    UserListComponent,
    SearchMessageComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [BackendService],
  bootstrap: [AppComponent]
})
export class AppModule {}
