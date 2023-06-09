import {Component} from '@angular/core';
import {DayOfTheWeek, DayOfTheWeekView, FitnessPlanData} from "../../model/model";
import {FitnessPlanService} from "../../services/fitness-plan.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sport-plan',
  templateUrl: './fitness-plan.component.html',
  styleUrls: ['./fitness-plan.component.scss', '../../style/primary.styles.scss']
})
export class FitnessPlanComponent {

  isFitnessPlanCreateModalOpen: boolean = false;

  fitnessPlanList?: FitnessPlanData[];
  fitnessPlan: FitnessPlanData;

  weekDays: DayOfTheWeekView[] = [
    {value: DayOfTheWeek.FRIDAY, viewValue: "Понедельник"},
    {value: DayOfTheWeek.TUESDAY, viewValue: "Вторник"},
    {value: DayOfTheWeek.WEDNESDAY, viewValue: "Среда"},
    {value: DayOfTheWeek.THURSDAY, viewValue: "Четверг"},
    {value: DayOfTheWeek.FRIDAY, viewValue: "Пятница"},
    {value: DayOfTheWeek.SATURDAY, viewValue: "Суббота"},
    {value: DayOfTheWeek.SUNDAY, viewValue: "Воскресенье"},
  ]

  constructor(
    private service: FitnessPlanService,
    private router: Router
  ) {
    this.fitnessPlan = {} as FitnessPlanData;
    this.service.getAll().subscribe(value => {
      this.fitnessPlanList = value;
    })
  }

  onCardClick(_fitnessPlan: FitnessPlanData): void {
    this.service.fitnessPlanData = _fitnessPlan;
    this.router.navigate(['/fitness-plan/info']);
  }

  onFitnessPlanCreateBtnClick(): void {
    this.service.fitnessPlanData = {} as FitnessPlanData;
    this.router.navigate(['/fitness-plan/info'])
  }
}
