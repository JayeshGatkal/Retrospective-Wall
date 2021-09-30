import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DoneBoardComponent } from './done-board/done-board.component';
import { ImprovmentBoardComponent } from './improvment-board/improvment-board.component';
import { DoingBoardComponent } from './doing-board/doing-board.component';
import { ActionItemsBoardComponent } from './action-items-board/action-items-board.component';
import { ItemCardComponent } from './item-card/item-card.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DoneBoardComponent,
    ImprovmentBoardComponent,
    DoingBoardComponent,
    ActionItemsBoardComponent,
    ItemCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
