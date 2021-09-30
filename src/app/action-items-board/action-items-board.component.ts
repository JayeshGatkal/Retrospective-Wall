import { Component, OnInit } from "@angular/core";
import { CardService } from "../card.service";

@Component({
  selector: "app-action-items-board",
  templateUrl: "./action-items-board.component.html",
  styleUrls: ["./action-items-board.component.css"],
})
export class ActionItemsBoardComponent implements OnInit {
  public list = [];
  public title;

  constructor(private cardService: CardService) {
    this.cardService.subject4.subscribe((lst) => {
      this.list = lst;
    });
  }

  addItem() {
    if (this.title) {
      this.cardService.addActionItem(this.title);
      this.title = "";
    }
  }

  ngOnInit() {}
}
