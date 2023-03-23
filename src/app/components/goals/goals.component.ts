import { Component } from '@angular/core';
import {GoalData} from "../../model/model";

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.scss']
})
export class GoalsComponent {
  isModalOpen: boolean = false;
  name?: string;
  text?: string;
  goalStarted?: Date;
  goalCompleted?: Date;

  goals?: GoalData[];

  onCardClick() {

  }

  onCreateGoalBtnClick() {
    this.isModalOpen = false;
    console.log(this.goalStarted, this.goalCompleted);
  }
}
