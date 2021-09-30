import { Component, OnInit } from '@angular/core';
import { CardService } from '../card.service';

@Component({
  selector: 'app-improvment-board',
  templateUrl: './improvment-board.component.html',
  styleUrls: ['./improvment-board.component.css']
})
export class ImprovmentBoardComponent implements OnInit {
  public list = [];
  public title;

  constructor(private cardService: CardService) {
    this.cardService.subject2.subscribe((lst) => {
      this.list = lst;
    });
  }

  addItem() {
    this.cardService.addImprovedItem(this.title);
    this.title = "";
  }

  ngOnInit() {
  }

}
