import {Component} from '@angular/core';
import {FitnessPlanService} from "../../../services/fitness-plan.service";
import {TrainingDayService} from "../../../services/training-day.service";
import {ImageService} from "../../../services/image.service";
import {environment} from "../../../../environments/environment";
import {
  DayOfTheWeek,
  DayOfTheWeekView,
  EntityCheckboxView,
  FitnessPlanData,
  TrainingDayData,
  WorkoutData
} from "../../../model/model";
import {WorkoutService} from "../../../services/workout.service";
import {Router} from "@angular/router";
import {AlertService, AlertType} from "../../../services/alert.service";

@Component({
  selector: 'app-fitness-plan-info',
  templateUrl: './fitness-plan-info.component.html',
  styleUrls: ['./fitness-plan-info.component.scss', '../../../style/primary.styles.scss']
})
export class FitnessPlanInfoComponent {

  fitnessPlanData: FitnessPlanData = {} as FitnessPlanData;
  trainingDays: TrainingDayData[] = [];
  workouts: WorkoutData[] = [];
  selectedTrainingDay: TrainingDayData = {} as TrainingDayData;
  selectedWorkout: WorkoutData = {} as WorkoutData;
  selectedWeekDay: DayOfTheWeek = {} as DayOfTheWeek;
  selectedTrainingDayComment: string = "";
  selectedImage: string = "";
  isNewAvatarLoadModalOpen: boolean = false;
  isTrainingDayPropertiesModalOpen: boolean = false;

  isFitnessPlanEditModeActivated: boolean = false;
  imageNames?: string[];

  formWorkouts: EntityCheckboxView[] = [];

  weekDays: DayOfTheWeekView[] = [
    {value: DayOfTheWeek.MONDAY, viewValue: "Понедельник"},
    {value: DayOfTheWeek.TUESDAY, viewValue: "Вторник"},
    {value: DayOfTheWeek.WEDNESDAY, viewValue: "Среда"},
    {value: DayOfTheWeek.THURSDAY, viewValue: "Четверг"},
    {value: DayOfTheWeek.FRIDAY, viewValue: "Пятница"},
    {value: DayOfTheWeek.SATURDAY, viewValue: "Суббота"},
    {value: DayOfTheWeek.SUNDAY, viewValue: "Воскресенье"},
  ]

  constructor(
    private fitnessPlanService: FitnessPlanService,
    private trainingDayService: TrainingDayService,
    private workoutService: WorkoutService,
    private imageService: ImageService,
    private alertService: AlertService,
    private router: Router
  ) {
    this.fitnessPlanService.getFitnessPlan.subscribe(value => {
      if (value.id) {
        this.fitnessPlanData = value;
        this.fillTrainingDays(value.trainingDays)
      } else {
        this.fitnessPlanData = {} as FitnessPlanData;
        this.isFitnessPlanEditModeActivated = true;
      }
    });
    this.workoutService.getAll().subscribe(value => {
      this.workouts = value;
    })
    this.imageService.getAll().subscribe(value => {
      this.imageNames = value;
    });
  }

  private fillTrainingDays(trainingDays: number[]): void {
    if (trainingDays.length != 0) {
      this.trainingDayService.getAllById(trainingDays).subscribe(value => {
        this.trainingDays = value;
      })
    }
  }
  public getImage(image: string): string {
    return environment.apiImagesUrl + "/" + image;
  }
  onCardClick(trainingDayData: TrainingDayData): void {
    if (trainingDayData.name) {
      this.selectedTrainingDay = trainingDayData;
      if (trainingDayData.workoutId) {
        this.selectedWorkout = this.workouts.find(workout => workout.id === trainingDayData.workoutId)!;
      } else {
        this.selectedWorkout = {} as WorkoutData;
      }
      this.selectedWeekDay = trainingDayData.name;
      this.selectedTrainingDayComment = trainingDayData.comment;
      this.selectedImage = trainingDayData.image;
    } else {
      this.selectedTrainingDay = {} as TrainingDayData;
    }
    this.isTrainingDayPropertiesModalOpen= true;
  }

  onTrainingDayCreateBtnClick(): void {
    this.selectedTrainingDay.name = this.selectedWeekDay;
    this.selectedTrainingDay.workoutId = this.selectedWorkout.id;
    this.selectedTrainingDay.image = this.selectedImage;
    this.selectedTrainingDay.comment = this.selectedTrainingDayComment;
    let index = this.trainingDays.indexOf(this.selectedTrainingDay);
    if (index === -1) this.trainingDays.push(this.selectedTrainingDay);
    else this.trainingDays[index] = this.selectedTrainingDay;
    this.isTrainingDayPropertiesModalOpen = false;
  }

  onImageSelectModalClick(image: string): void  {
    this.fitnessPlanData.image = image;
    this.isNewAvatarLoadModalOpen = false;
  }

  onImageSelectTrainingDayModalClick(image: string): void {
    this.selectedImage = image;
  }

  onFitnessPlanCancelBtnClick() {
    if (this.fitnessPlanData.id) this.isFitnessPlanEditModeActivated = false;
    else this.router.navigate(['/fitness-plan']);
  }

  onTrainingDayAddBtnClick() {
    this.selectedTrainingDay = {} as TrainingDayData;
    this.isTrainingDayPropertiesModalOpen = true;
  }


  onFitnessPlanCreateBtnClick() {
    this.trainingDayService.saveAll(this.trainingDays).subscribe(value => {
      this.fitnessPlanData.trainingDays = value.map(day => day.id);
      if (this.fitnessPlanData.id) {
        this.fitnessPlanService.update(this.fitnessPlanData).subscribe(value => {
          this.router.navigate(['/fitness-plan']).then(() => {
            this.showAlert("Обновление фитнес-плана " + this.fitnessPlanData.name + " прошло успешно");
          });
        });
      } else {
        this.fitnessPlanService.create(this.fitnessPlanData).subscribe(value => {
          this.router.navigate(['/fitness-plan']).then(() => {
            this.showAlert("Создание фитнес-плана " + this.fitnessPlanData.name + " прошло успешно");
          });
        });
      }
    });
  }

  onFitnessPlanEditBtnClick(): void {
    this.isFitnessPlanEditModeActivated = true;
  }

  onFitnessPlanDeleteBtnClick(): void {
    this.fitnessPlanService.delete(this.fitnessPlanData.id).subscribe(value => {
      this.router.navigate(['/fitness-plan']).then(() => {
        this.showAlert("Удаление фитнес-плана " + this.fitnessPlanData.name + " прошло успешно");
      });
    })
  }

  onTrainingDayDeleteModalBtnClick(): void {
    let index = this.trainingDays.indexOf(this.selectedTrainingDay);
    this.trainingDays.splice(index, 1);
    this.isTrainingDayPropertiesModalOpen = false;
  }

  redirectToWorkout(): void {
    this.workoutService.workoutData = this.selectedWorkout;
    this.router.navigate(['/workout/info'])
  }

  selectWorkout(value: any): void {
    this.selectedWorkout = value;
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
