import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ClarityModule} from "@clr/angular";
import {HeaderComponent} from './components/header/header.component';
import { AccountComponent } from './components/account/account.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {IconService} from "./services/icon.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { WorkoutsComponent } from './components/workouts/workouts.component';
import { ExercisesComponent } from './components/exercises/exercises.component';
import {HttpClientModule} from "@angular/common/http";
import {AccountService} from "./services/account.service";
import {DatePipe, NgOptimizedImage} from "@angular/common";
import {WorkoutService} from "./services/workout.service";
import { WorkoutInfoComponent } from './components/workouts/workout-info/workout-info.component';
import {ExerciseService} from "./services/exercise.service";
import { FitnessPlanComponent } from './components/fitness-plan/fitness-plan.component';
import { FitnessPlanInfoComponent } from './components/fitness-plan/fitness-plan-info/fitness-plan-info.component';
import {FitnessPlanService} from "./services/fitness-plan.service";
import {TrainingDayService} from "./services/training-day.service";
import {ImageService} from "./services/image.service";
import { ExerciseInfoComponent } from './components/exercises/exercise-info/exercise-info.component';
import {AlertService} from "./services/alert.service";
import { GlobalAlertComponent } from './components/global-alert/global-alert.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AccountComponent,
    WorkoutsComponent,
    ExercisesComponent,
    WorkoutInfoComponent,
    FitnessPlanComponent,
    FitnessPlanInfoComponent,
    ExerciseInfoComponent,
    GlobalAlertComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ClarityModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpClientModule,
        NgOptimizedImage,
        ReactiveFormsModule,
    ],
  providers: [
    IconService,
    AccountService,
    {provide: LOCALE_ID, useValue: 'ru'},
    DatePipe,
    WorkoutService,
    ExerciseService,
    FitnessPlanService,
    TrainingDayService,
    ImageService,
    AlertService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
