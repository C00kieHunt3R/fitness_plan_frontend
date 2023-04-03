import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ClarityModule} from "@clr/angular";
import {HeaderComponent} from './components/header/header.component';
import { AccountComponent } from './components/account/account.component';
import { GoalsComponent } from './components/goals/goals.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {IconService} from "./services/icon.service";
import {FormsModule} from "@angular/forms";
import { WorkoutsComponent } from './components/workouts/workouts.component';
import { ExercisesComponent } from './components/exercises/exercises.component';
import {HttpClientModule} from "@angular/common/http";
import {AccountService} from "./services/account.service";
import {DatePipe, NgOptimizedImage} from "@angular/common";
import {GoalService} from "./services/goal.service";
import {WorkoutService} from "./services/workout.service";
import { WorkoutInfoComponent } from './components/workouts/workout-info/workout-info.component';
import {ExerciseService} from "./services/exercise.service";
import { NutritionComponent } from './components/nutrition/nutrition.component';
import {NutritionService} from "./services/nutrition.service";
import { FitnessPlanComponent } from './components/fitness-plan/fitness-plan.component';
import { FitnessPlanInfoComponent } from './components/fitness-plan/fitness-plan-info/fitness-plan-info.component';
import {FitnessPlanService} from "./services/fitness-plan.service";
import { FitnessPlanCreationComponent } from './components/fitness-plan/fitness-plan-creation/fitness-plan-creation.component';
import {TrainingDayService} from "./services/training-day.service";
import {ImageService} from "./services/image.service";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AccountComponent,
    GoalsComponent,
    WorkoutsComponent,
    ExercisesComponent,
    WorkoutInfoComponent,
    NutritionComponent,
    FitnessPlanComponent,
    FitnessPlanInfoComponent,
    FitnessPlanCreationComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgOptimizedImage,
  ],
  providers: [
    IconService,
    AccountService,
    {provide: LOCALE_ID, useValue: 'ru'},
    DatePipe,
    GoalService,
    WorkoutService,
    ExerciseService,
    NutritionService,
    FitnessPlanService,
    TrainingDayService,
    ImageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
