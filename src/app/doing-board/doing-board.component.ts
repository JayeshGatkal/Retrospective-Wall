import { Component, OnInit } from "@angular/core";
import { CardService } from "../card.service";

@Component({
  selector: "app-doing-board",
  templateUrl: "./doing-board.component.html",
  styleUrls: ["./doing-board.component.css"],
})
export class DoingBoardComponent implements OnInit {
  public list = [];
  public title;

  constructor(private cardService: CardService) {
    this.cardService.subject3.subscribe((lst) => {
      this.list = lst;
    });
  }

  addItem() {
    if (this.title) {
      this.cardService.addDoingItem(this.title);
      this.title = "";
    }
  }

  ngOnInit() {}
}
