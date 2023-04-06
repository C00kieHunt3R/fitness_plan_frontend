import {Component, ElementRef, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {ExerciseService} from "../../../services/exercise.service";
import {WorkoutService} from "../../../services/workout.service";
import {EntityCheckboxView, ExerciseData, WorkoutData} from "../../../model/model";
import {environment} from "../../../../environments/environment";
import {IconService} from "../../../services/icon.service";
import {ImageService} from "../../../services/image.service";
import {FormGroup} from "@angular/forms";
import {AlertService, AlertType} from "../../../services/alert.service";

@Component({
  selector: 'app-workout-info',
  templateUrl: './workout-info.component.html',
  styleUrls: ['./workout-info.component.scss', '../../../style/primary.styles.scss']
})
export class WorkoutInfoComponent {
  workoutData?: WorkoutData;
  workoutExercises?: ExerciseData[];
  exercise?: ExerciseData;
  exercises?: ExerciseData[];
  imageNames?: string[];

  isExerciseInfoModalOpen: boolean = false;
  isExerciseAddModalOpen: boolean = false;
  isNewAvatarLoadModalOpen: boolean = false;

  isWorkoutEditModeActivated: boolean = false;

  formExercises?: EntityCheckboxView[];


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private exerciseService: ExerciseService,
    private workoutService: WorkoutService,
    private iconService: IconService,
    private imageService: ImageService,
    private alertService: AlertService
  ) {
    this.workoutService.getWorkout.subscribe(value =>  {
      if (value.id) {
        this.workoutData = value;
        this.addWorkoutExercises(value.exercisesId);
      } else {
        this.workoutData = {} as WorkoutData;
        this.workoutData.exercisesId = [];
        this.workoutExercises = [];
        this.isWorkoutEditModeActivated = true;
      }
    });
  }

  private addWorkoutExercises(exercisesId: number[]): void {
    this.exerciseService.getAllById(exercisesId).subscribe(ret => {
      this.workoutExercises = ret;
    });
  }

  get selectedExercises(): ExerciseData[] {
    return this.formExercises!
      .filter(ex => ex.selected)
      .map(ex => ex.value)
  }

  public getImage(image: string): string {
    return environment.apiImagesUrl + "/" + image;
  }

  onCardClick(exercise: ExerciseData): void {
    this.isExerciseInfoModalOpen = true;
    this.exercise = exercise;
  }

  onExerciseAddBtnClick(): void {
    this.isExerciseAddModalOpen = true;
    if (this.workoutExercises?.length == 0) {
      this.exerciseService.getAll().subscribe(value => {
        this.exercises = value;
        this.initForm();
      })
    } else {
      let exceptIdentifiers: number[] = this.workoutExercises!.map(ex => ex.id);
      this.exerciseService.getAllByIdNot(exceptIdentifiers).subscribe(value => {
        this.exercises = value;
        this.initForm();
      });
    }
  }

  onWorkoutDeleteBtnClick(): void {
    this.workoutService.delete(this.workoutData!.id).subscribe(value => {
      if (value) {
        this.router.navigate(["/workouts"]).then(() => {
          this.showAlert("Удаление тренировки " + this.workoutData!.name + " прошло успешно");
        });;
      }
    })
  }

  onExerciseDeleteBtnClick(ex: ExerciseData) {
    let exIndex = this.workoutExercises?.indexOf(ex);
    this.workoutExercises?.splice(exIndex!, 1);
    this.workoutData?.exercisesId.splice(exIndex!, 1);
  }

  onNewAvatarLoadBtnClick(): void {
    this.isNewAvatarLoadModalOpen = true;
    this.imageService.getAll().subscribe(value => {
      this.imageNames = value;
    });
  }

  onImageSelectModalClick(image: string): void {
    if (this.workoutData) {
      this.workoutData.image = image;
    }
    this.isNewAvatarLoadModalOpen = false;
  }

  onWorkoutEditBtnClick(): void {
    this.isWorkoutEditModeActivated = true;
  }

  onWorkoutCancelBtnClick(): void {
    if (this.workoutData?.id) {
      this.isWorkoutEditModeActivated = false;
    } else {
      this.router.navigate(['/workouts']);
    }
  }

  onWorkoutCreateBtnClick(): void {
    if (this.workoutData?.id) {
      this.workoutService.update(this.workoutData).subscribe(value => {
        this.router.navigate(['/workouts']).then(() => {
          this.showAlert("Обновление тренировки " + this.workoutData!.name + " прошло успешно");
        });
      });
    } else {
      this.workoutService.create(this.workoutData).subscribe(value => {
        this.router.navigate(['/workouts']).then(() => {
          this.showAlert("Создание тренировки " + this.workoutData!.name + " прошло успешно");
        });
      })
    }
  }

  onExerciseAddModalBtnClick(): void {
    this.workoutData!.exercisesId.push(...this.selectedExercises.map(ex => ex.id));
    this.exerciseService.getAllById(this.workoutData!.exercisesId).subscribe(value => {
      this.workoutExercises = value;
      this.isExerciseAddModalOpen = false;
    });
  }

  initForm(): void {
    this.formExercises = [];
    this.exercises?.forEach(value => this.formExercises?.push({value: value, selected: false}));
  }
  showAlert(msg: string): void {
    this.alertService.show({
      message: msg,
      clrAlertClosable: true,
      clrAlertAppLevel: false,
      clrAlertType: AlertType.SUCCESS
    })
  }

}
