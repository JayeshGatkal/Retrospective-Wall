import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CardService {
  public doneList = [];
  public improveList = [];
  public doingList = [];
  public actionItemList = [];

  subject1 = new BehaviorSubject<string[]>(this.doneList);
  subject2 = new BehaviorSubject<string[]>(this.improveList);
  subject3 = new BehaviorSubject<string[]>(this.doingList);
  subject4 = new BehaviorSubject<string[]>(this.actionItemList);

  constructor() {}

  addDoneItem(title) {
    this.doneList.push(title);
    this.subject1.next(this.doneList);
  }

  addImprovedItem(title) {
    this.improveList.push(title);
    this.subject2.next(this.improveList);
  }

  addDoingItem(title) {
    this.doingList.push(title);
    this.subject3.next(this.doingList);
  }

  addActionItem(title) {
    this.actionItemList.push(title);
    this.subject4.next(this.actionItemList);
  }
}
