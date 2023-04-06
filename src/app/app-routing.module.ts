import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HeaderComponent} from "./components/header/header.component";
import {AccountComponent} from "./components/account/account.component";
import {WorkoutsComponent} from "./components/workouts/workouts.component";
import {ExercisesComponent} from "./components/exercises/exercises.component";
import {WorkoutInfoComponent} from "./components/workouts/workout-info/workout-info.component";
import {FitnessPlanComponent} from "./components/fitness-plan/fitness-plan.component";
import {FitnessPlanInfoComponent} from "./components/fitness-plan/fitness-plan-info/fitness-plan-info.component";
import {ExerciseInfoComponent} from "./components/exercises/exercise-info/exercise-info.component";


const routes: Routes = [
  {path: "", component: AccountComponent},
  {path: "account", component: AccountComponent},
  {path: "workouts", component: WorkoutsComponent},
  {path: "workout/info", component: WorkoutInfoComponent},
  {path: "exercises", component: ExercisesComponent},
  {path: "exercise/info", component: ExerciseInfoComponent},
  {path: "fitness-plan", component: FitnessPlanComponent},
  {path: "fitness-plan/info", component: FitnessPlanInfoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
