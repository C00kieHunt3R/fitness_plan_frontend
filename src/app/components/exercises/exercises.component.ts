import { Component } from '@angular/core';
import {ExerciseData} from "../../model/model";
import {ExerciseService} from "../../services/exercise.service";
import {Router} from "@angular/router";
import {environment} from "../../../environments/environment";
import {IconService} from "../../services/icon.service";

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
    private router: Router,
    private iconService: IconService
  ) {
    this.exercise = {} as ExerciseData;
    this.service.getAll().subscribe(value => {
      this.exercises = value;
    });
  }

  onCardClick(_exercise: ExerciseData): void {
    this.service.exerciseData = _exercise;
    this.router.navigate(['/exercise/info']);
  }

  onExerciseCreateBtnClick(): void {
    this.service.exerciseData = {} as ExerciseData;
    this.router.navigate(['/exercise/info'])
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
  public getImage(image: string): string {
    return environment.apiImagesUrl + "/" + image;
  }
}
