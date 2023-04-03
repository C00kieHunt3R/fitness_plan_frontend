import { Component } from '@angular/core';
import {ExerciseData} from "../../model/model";
import {ExerciseService} from "../../services/exercise.service";

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.scss', '../../style/primary.styles.scss']
})
export class ExercisesComponent {

  isExerciseCreateModalOpen: boolean = false;
  exercise: ExerciseData;

  exercises?: ExerciseData[];
  isExerciseInfoModalOpen: boolean  = false;

  constructor(
    private service: ExerciseService,
  ) {
    this.exercise = {} as ExerciseData;
    this.service.getAll().subscribe(value => {
      this.exercises = value;
    });
  }

  onCardClick(_exercise: ExerciseData): void {
    this.exercise = _exercise;
    this.isExerciseInfoModalOpen = true;
  }

  onCreateExerciseBtnClick(): void {
    this.isExerciseCreateModalOpen = true;
    this.exercise = {} as ExerciseData;
  }

  onExerciseCreateModalBtnClick(): void {
    this.service.create(this.exercise).subscribe(value => {
      this.exercises?.push(value);
    });
    this.isExerciseCreateModalOpen = false;
  }

  onExerciseDeleteModalBtnClick(): void {
    this.service.delete(this.exercise.id).subscribe(value => {
      if (value) {
        this.exercises?.forEach((_exercise, index) => {
          if (_exercise.id === this.exercise.id) {
            this.exercises?.splice(index, 1);
          }
        })
      }
    });
    this.isExerciseInfoModalOpen = false;
  }
}
