import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {ExerciseService} from "../../../services/exercise.service";
import {WorkoutService} from "../../../services/workout.service";
import {ExerciseData, WorkoutData} from "../../../model/model";
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-workout-info',
  templateUrl: './workout-info.component.html',
  styleUrls: ['./workout-info.component.scss']
})
export class WorkoutInfoComponent implements OnInit, OnDestroy {
  private routeSub?: Subscription;
  private id?: number;
  workoutData?: WorkoutData;
  workoutExercises?: ExerciseData[];
  exercise?: ExerciseData;
  exercises?: ExerciseData[];
  apiUrl: string = environment.apiBaseUrl;

  isExerciseInfoModalOpen: boolean = false;
  isExerciseAddModalOpen: boolean = false;
  isWorkoutEditModeActivated: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private exerciseService: ExerciseService,
    private workoutService: WorkoutService
  ) {
  }

  get image(): string {
    return this.apiUrl + '/' + this.workoutData?.image;
  }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.id = params['id'];
      if (this.id) {
        this.workoutService.getById(this.id).subscribe(workout => {
          this.workoutData = workout;
          if (this.workoutData) {
            let identifiers: number[] = [];
            this.workoutData.exercisesId.forEach(id => {
              identifiers.push(id);
            });
            this.exerciseService.getAllById(identifiers).subscribe(exercises => {
              this.workoutExercises = exercises;
            });
          }
        });
      }
    })
  }

  ngOnDestroy(): void {
    this.routeSub?.unsubscribe();
  }

  onCardClick(exercise: ExerciseData) {
    this.isExerciseInfoModalOpen = true;
    this.exercise = exercise;
  }

  onAddExerciseBtnClick() {
    this.isExerciseAddModalOpen = true;
    if (this.workoutExercises) {
      let exceptIdentifiers = this.workoutExercises.map(ex => ex.id);
      this.exerciseService.getAllByIdNot(exceptIdentifiers).subscribe(value => {
        this.exercises = value;
      });
    }
  }

  onDeleteWorkoutBtnClick() {
    this.workoutService.delete(this.workoutData!.id).subscribe(value => {
      if (value) {
        this.router.navigate(["/workouts"]);
      }
    })
  }

  onDeleteExerciseBtnClick(ex: ExerciseData) {
    this.exerciseService.delete(ex.id).subscribe(value => {
      if (value) {
        this.workoutExercises?.forEach((exData, index) => {
          if (exData.id === ex.id) {
            this.workoutExercises?.splice(index, 1);
          }
        })
      }
    })
  }
}
