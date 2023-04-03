import { Component } from '@angular/core';
import {NutritionData} from "../../model/model";
import {NutritionService} from "../../services/nutrition.service";

@Component({
  selector: 'app-nutrition',
  templateUrl: './nutrition.component.html',
  styleUrls: ['./nutrition.component.scss', '../../style/primary.styles.scss']
})
export class NutritionComponent {

  nutritionList?: NutritionData[];

  nutrition: NutritionData;
  isNutritionCreateModalOpen: boolean = false;
  isNutritionInfoModalOpen: boolean = false;

  constructor(
    private service: NutritionService
  ) {
    this.nutrition = {} as NutritionData;
    this.service.getAll().subscribe(value => {
      this.nutritionList = value;
    });
  }


  onNutritionCreateBtnClick(): void {
    this.isNutritionCreateModalOpen = true;
    this.nutrition = {} as NutritionData;
  }

  onCardClick(_nutrition: NutritionData): void {
    this.nutrition = _nutrition;
    this.isNutritionInfoModalOpen = true;
  }

  onNutritionCreateModalBtnClick(): void {
    this.service.create(this.nutrition).subscribe(value => {
      this.nutritionList?.push(value);
    });
    this.isNutritionCreateModalOpen = false;
  }

  onNutritionDeleteModalBtnClick(): void {
    this.service.delete(this.nutrition.id).subscribe(value => {
      if (value) {
        this.nutritionList?.forEach((_nutrition, index) => {
          if (_nutrition.id === this.nutrition.id) {
            this.nutritionList?.splice(index, 1);
          }
        })
      }
    });
    this.isNutritionInfoModalOpen = false;
  }

  onNutritionSaveModalBtnClick(): void {
    this.service.update(this.nutrition).subscribe(updatedNutrition => {
      this.nutritionList = this.nutritionList?.map(_nutrition => _nutrition.id !== updatedNutrition.id ? _nutrition : updatedNutrition);
    });
    this.isNutritionInfoModalOpen = false;
  }
}
