import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ClarityModule} from "@clr/angular";
import {HeaderComponent} from './components/header/header.component';
import { AccountComponent } from './components/account/account.component';
import { GoalsComponent } from './components/goals/goals.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {IconsService} from "./services/icons.service";
import {FormsModule} from "@angular/forms";
import { WorkoutsComponent } from './components/workouts/workouts.component';
import { ExercisesComponent } from './components/exercises/exercises.component';
import {HttpClientModule} from "@angular/common/http";
import {AccountService} from "./services/account.service";
import {DatePipe} from "@angular/common";
import {GoalService} from "./services/goal.service";
import {WorkoutService} from "./services/workout.service";
import { WorkoutInfoComponent } from './components/workouts/workout-info/workout-info.component';
import {ExerciseService} from "./services/exercise.service";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AccountComponent,
    GoalsComponent,
    WorkoutsComponent,
    ExercisesComponent,
    WorkoutInfoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    IconsService,
    AccountService,
    {provide: LOCALE_ID, useValue: 'ru'},
    DatePipe,
    GoalService,
    WorkoutService,
    ExerciseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
