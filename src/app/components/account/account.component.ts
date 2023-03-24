import {Component, OnDestroy, OnInit} from '@angular/core';
import {AccountService} from "../../services/account.service";
import {Gender, UserAccountData} from "../../model/model";
import {Observable, Subscription} from "rxjs";
import {IconsService} from "../../services/icons.service";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  // userData: UserAccountData;
  userData$!: Observable<UserAccountData>;
  userDataCopy!: Observable<UserAccountData>;
  isEditActivated: boolean = false;


  constructor(
    private service: AccountService,
    private iconsService: IconsService
  ) {
    this.userData$ = this.service.getById(1);

  }

  ngOnInit() {
    /*this.sub$ = this.service.getById(1).subscribe(ret => {
      this.userData = ret;
      // if (this.userData.gender === Gender.GENDER_MALE) {
      //   this.userData.gender =
      // }
      console.log(this.userData.gender)
      this.userData.gender == Gender.GENDER_MALE ? this.userData.gender = "Мужской" : this.userData.gender = "Женский";
    });*/
  }

  getGender(gender: Gender | undefined): string {
    if (!gender) {
      return 'Не определено'
    }
    return gender == Gender.GENDER_MALE ? "Мужской" : "Женский";
  }

  onEditClick() {
    this.isEditActivated = true;
  }

  onCancelClick() {
    this.isEditActivated = false;
    this.userData$ = this.service.getById(1);
  }

  onSubmitClick() {
    this.isEditActivated = false
  }
}
