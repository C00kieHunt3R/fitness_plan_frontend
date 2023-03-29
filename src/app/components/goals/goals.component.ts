import { Component } from '@angular/core';
import {GoalData} from "../../model/model";
import {GoalService} from "../../services/goal.service";

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.scss']
})
export class GoalsComponent {
  isGoalCreateModalOpen: boolean = false;
  isGoalInfoModalOpen: boolean = false;
  goalData: GoalData;

  goals?: GoalData[];

  constructor(
    private service: GoalService
  ) {
    this.goalData = {} as GoalData;
    this.service.getAll().subscribe(value => {
      this.goals = value;
    })
  }

  onCardClick(goal: GoalData) {
    this.goalData = goal;
    this.isGoalInfoModalOpen = true;
  }

  onCreateGoalBtnClick() {
    this.isGoalCreateModalOpen = false;
    this.service.create(this.goalData).subscribe(value => {
      this.goals?.push(value);
    });

  }

  onDeleteButtonClick() {
    this.service.delete(this.goalData.id).subscribe(value => {
      if (value) {
        this.goals?.forEach((goal, index) => {
          if (goal.id === this.goalData.id)
            this.goals?.splice(index, 1);
        })
      }
    });
    this.isGoalInfoModalOpen = false;
  }

  onSaveChangesBtnClick() {
    this.service.update(this.goalData).subscribe(updatedGoal => {
      this.goals = this.goals?.map(goal => goal.id !== updatedGoal.id ? goal : updatedGoal);
    });
    this.isGoalInfoModalOpen = false;
  }
}
