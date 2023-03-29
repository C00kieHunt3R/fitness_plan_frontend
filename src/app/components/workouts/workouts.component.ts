import { Component } from '@angular/core';
import {WorkoutData} from "../../model/model";
import {WorkoutService} from "../../services/workout.service";

@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.scss']
})
export class WorkoutsComponent {
  isCreateWorkoutModalOpen: boolean = false;
  isWorkoutInfoModalOpen: boolean = false;

  workoutData: WorkoutData;
  workouts?: WorkoutData[];

  constructor(
    private service: WorkoutService
  ) {
    this.workoutData = {} as WorkoutData;
    this.service.getAll().subscribe(value => {
      this.workouts = value;
    })
  }

  onCardClick(workout: WorkoutData) {
    this.workoutData = workout;
    this.isWorkoutInfoModalOpen = true;
  }

  onCreateWorkoutBtnClick() {
    this.isCreateWorkoutModalOpen = false;
    this.service.create(this.workoutData).subscribe(value => {
      this.workouts?.push(value);
    })
  }

  onDeleteButtonClick() {
    this.service.delete(this.workoutData.id).subscribe(value => {
      if (value) {
        this.workouts?.forEach((workout, index) => {
          if (workout.id === this.workoutData.id)
            this.workouts?.splice(index, 1);
        })
      }
    });
    this.isWorkoutInfoModalOpen = false;
  }

  onSaveChangesBtnClick() {
    this.service.update(this.workoutData).subscribe(updatedWorkout => {
      this.workouts = this.workouts?.map(workout => workout.id !== updatedWorkout.id ? workout : updatedWorkout);
    });
    this.isWorkoutInfoModalOpen = false;
  }
}
