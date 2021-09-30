import { Component, OnInit } from "@angular/core";
import { CardService } from "../card.service";

@Component({
  selector: "app-done-board",
  templateUrl: "./done-board.component.html",
  styleUrls: ["./done-board.component.css"],
})
export class DoneBoardComponent implements OnInit {
  public list = [];
  public title;

  constructor(private cardService: CardService) {
    this.cardService.subject1.subscribe((lst) => {
      this.list = lst;
    });
  }

  addItem() {
    if (this.title) {
      this.cardService.addDoneItem(this.title);
      this.title = "";
    }
  }

  ngOnInit() {}
}
