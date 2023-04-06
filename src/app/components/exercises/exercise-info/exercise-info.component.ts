import {Component} from '@angular/core';
import {ExerciseData} from "../../../model/model";
import {environment} from "../../../../environments/environment";
import {ExerciseService} from "../../../services/exercise.service";
import {ImageService} from "../../../services/image.service";
import {Router} from "@angular/router";
import {AlertService, AlertType} from "../../../services/alert.service";

@Component({
  selector: 'app-exercise-info',
  templateUrl: './exercise-info.component.html',
  styleUrls: ['./exercise-info.component.scss', '../../../style/primary.styles.scss']
})
export class ExerciseInfoComponent {

  exercise: ExerciseData = {} as ExerciseData;
  imageNames?: string[];

  isExerciseEditModeActivated: boolean = false;
  isNewAvatarLoadModalOpen: boolean = false;
  isSuccessAlertShow: boolean = true;
  alertMessage: string = "";

  constructor(
    private service: ExerciseService,
    private imageService: ImageService,
    private alertService: AlertService,
    private router: Router
  ) {
    this.service.getExercise.subscribe(value => {
      this.exercise = value;
      if (!value.id) {
        this.isExerciseEditModeActivated = true;
      }
    });
    this.imageService.getAll().subscribe(value => {
      this.imageNames = value;
    });
  }

  public getImage(image: string): string {
    return environment.apiImagesUrl + "/" + image;
  }

  onExerciseCancelBtnClick(): void {
    if (this.exercise.id) {
      this.isExerciseEditModeActivated = false;
    } else {
      this.router.navigate(['/exercises'])
    }
  }

  onExerciseCreateBtnClick(): void {
    if (this.exercise.id) {
      this.service.update(this.exercise).subscribe(value => {
        this.router.navigate(['/exercises']).then(() => {
          this.showAlert("Обновление упражнения " + this.exercise.name + " прошло успешно");
        });
      });
    } else {
      this.service.create(this.exercise).subscribe(value => {
        this.router.navigate(['/exercises']).then(() => {
          this.showAlert("Создание упражнения " + this.exercise.name + " прошло успешно");
        });
      })
    }
  }

  onExerciseDeleteBtnClick(): void {
    this.service.delete(this.exercise.id).subscribe(value => {
      this.router.navigate(['/exercises']).then(() => {
        this.showAlert("Удаление упражнения " + this.exercise.name + " прошло успешно");
      });
    })
  }

  onExerciseEditBtnClick(): void {
    this.isExerciseEditModeActivated = true;
  }

  onImageSelectModalClick(image: string): void {
    this.exercise.image = image;
    this.isNewAvatarLoadModalOpen = false;
  }
  showAlert(msg: string): void {
    this.alertService.show({
      message: msg,
      clrAlertClosable: true,
      clrAlertAppLevel: false,
      clrAlertType: AlertType.SUCCESS
    })
  }
  onClose(value: any): void {
    this.alertService.onClose(value);
  }
}
