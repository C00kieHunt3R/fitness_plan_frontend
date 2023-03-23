import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HeaderComponent} from "./components/header/header.component";
import {AccountComponent} from "./components/account/account.component";
import {GoalsComponent} from "./components/goals/goals.component";
import {WorkoutsComponent} from "./components/workouts/workouts.component";

const routes: Routes = [
  {path: "", component: AccountComponent},
  {path: "account", component: AccountComponent},
  {path: "goals", component: GoalsComponent},
  {path: "workouts", component: WorkoutsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
