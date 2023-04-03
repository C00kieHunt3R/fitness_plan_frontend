import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HeaderComponent} from "./components/header/header.component";
import {AccountComponent} from "./components/account/account.component";
import {GoalsComponent} from "./components/goals/goals.component";
import {WorkoutsComponent} from "./components/workouts/workouts.component";
import {ExercisesComponent} from "./components/exercises/exercises.component";
import {WorkoutInfoComponent} from "./components/workouts/workout-info/workout-info.component";
import {NutritionComponent} from "./components/nutrition/nutrition.component";
import {FitnessPlanComponent} from "./components/fitness-plan/fitness-plan.component";
import {FitnessPlanInfoComponent} from "./components/fitness-plan/fitness-plan-info/fitness-plan-info.component";
import {
  FitnessPlanCreationComponent
} from "./components/fitness-plan/fitness-plan-creation/fitness-plan-creation.component";

const routes: Routes = [
  {path: "", component: AccountComponent},
  {path: "account", component: AccountComponent},
  {path: "goals", component: GoalsComponent},
  {path: "workouts", component: WorkoutsComponent},
  {path: "workout/:id", component: WorkoutInfoComponent},
  {path: "exercises", component: ExercisesComponent},
  {path: "nutrition", component: NutritionComponent},
  {path: "fitness", component: FitnessPlanComponent},
  {path: "fitness/info/:id", component: FitnessPlanInfoComponent},
  {path: "fitness/create", component: FitnessPlanCreationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
