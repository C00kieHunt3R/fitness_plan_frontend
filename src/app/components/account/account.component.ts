import {Component, OnDestroy, OnInit} from '@angular/core';
import {AccountService} from "../../services/account.service";
import {UserAccountData} from "../../model/model";
import {take} from "rxjs";
import {IconService} from "../../services/icon.service";


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit, OnDestroy {

  // userData: UserAccountData;
  userData?: UserAccountData
  isEditActivated: boolean = false;


  constructor(
    private service: AccountService,
    private iconsService: IconService,
  ) {
    this.getUserData(1);
  }

  ngOnInit() {
  }

  // getGender(gender: Gender | undefined): GenderTypeView {
  //   // if (gender == Gender.GENDER_MALE) {
  //   //   return {value: Gender.GENDER_MALE, viewValue: "Мужской"};
  //   // } else if (gender == Gender.GENDER_FEMALE) {
  //   //   return {value: Gender.GENDER_FEMALE, viewValue: "Женский"};
  //   // }
  //   return gender == Gender.GENDER_MALE
  //     ? {value: Gender.GENDER_MALE, viewValue: "Мужской"}
  //     : {value: Gender.GENDER_FEMALE, viewValue: "Женский"};
  // }

  onEditClick() {
    this.isEditActivated = true;
  }

  onCancelClick() {
    this.isEditActivated = false;
    this.getUserData(1);
  }

  onSubmitClick() {
    this.isEditActivated = false;
    this.service.update(this.userData).subscribe(ret => {
      this.userData = ret;
    });
  }

  getUserData(id: number): void {
    this.service.getById(1).pipe(take(1)).subscribe(value => {
      this.userData = value;
    })
  }

  ngOnDestroy(): void {
  }
}
