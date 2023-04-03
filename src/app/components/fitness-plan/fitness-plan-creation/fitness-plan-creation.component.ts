import {Component, OnInit} from '@angular/core';
import {
  DayOfTheWeek,
  DayOfTheWeekView,
  FitnessPlanData,
  NutritionData,
  TrainingDayData,
  WorkoutData
} from "../../../model/model";
import {FitnessPlanService} from "../../../services/fitness-plan.service";
import {IconService} from "../../../services/icon.service";
import {TrainingDayService} from "../../../services/training-day.service";
import {ImageService} from "../../../services/image.service";
import {environment} from "../../../../environments/environment";
import {WorkoutService} from "../../../services/workout.service";

@Component({
  selector: 'app-fitness-plan-creation',
  templateUrl: './fitness-plan-creation.component.html',
  styleUrls: ['./fitness-plan-creation.component.scss', '../../../style/primary.styles.scss']
})
export class FitnessPlanCreationComponent {
  imagesApiUrl: string = environment.apiBaseUrl + "/api/images/get"

  weekDays: DayOfTheWeekView[] = [
    {value: DayOfTheWeek.FRIDAY, viewValue: "Понедельник"},
    {value: DayOfTheWeek.TUESDAY, viewValue: "Вторник"},
    {value: DayOfTheWeek.WEDNESDAY, viewValue: "Среда"},
    {value: DayOfTheWeek.THURSDAY, viewValue: "Четверг"},
    {value: DayOfTheWeek.FRIDAY, viewValue: "Пятница"},
    {value: DayOfTheWeek.SATURDAY, viewValue: "Суббота"},
    {value: DayOfTheWeek.SUNDAY, viewValue: "Воскресенье"},
  ]

  fitnessPlan: FitnessPlanData;
  trainingDay: TrainingDayData;

  workouts?: WorkoutData[];
  nutrition: NutritionData[];

  isFitnessPlanAvatarLoadModalOpen: boolean = false;
  isTrainingDayInfoModalOpen: boolean = false;
  imageNames: string[];
  currentImage?: string;


  constructor(
    private fitnessPlanService: FitnessPlanService,
    private trainingDayService: TrainingDayService,
    private workoutService: WorkoutService,
    private iconService: IconService,
    private imageService: ImageService
  ) {
    this.fitnessPlan = {} as FitnessPlanData;
    this.fitnessPlan.trainingDays = {} as TrainingDayData[];

    this.workoutService.getAll().subscribe(value => {
      this.workouts = value;
    });

    this.imageNames = [];
    this.nutrition = [];
    this.trainingDay = {} as TrainingDayData;
  }

  public getImage(image: string): string {
    return this.imagesApiUrl + "/" + image;
  }

  onFitnessPlanAvatarLoadBtnClick(): void {
    this.isFitnessPlanAvatarLoadModalOpen = true;
    this.imageService.getAll().subscribe(value => {
      this.imageNames = value;
    });
  }

  onImageSelectModalBtnClick(image: string): void {
    this.fitnessPlan.image = image;
    this.isFitnessPlanAvatarLoadModalOpen = false;
  }

  onCardClick(day: TrainingDayData): void {
    this.isTrainingDayInfoModalOpen = true;
    this.trainingDay = day;
  }
}
