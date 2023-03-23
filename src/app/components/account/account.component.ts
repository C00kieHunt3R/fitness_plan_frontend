import {Component, OnDestroy, OnInit} from '@angular/core';
import {AccountService} from "../../services/account.service";
import {Gender, UserAccountData} from "../../model/model";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit, OnDestroy {

  userData!: UserAccountData;
  sub$: Subscription = new Subscription();
  constructor(
    private service: AccountService
  ) {

  }
  ngOnInit() {
    this.sub$ = this.service.getById(1).subscribe(ret => {
      this.userData = ret;
      // if (this.userData.gender === Gender.GENDER_MALE) {
      //   this.userData.gender =
      // }
      console.log(this.userData.gender)
      this.userData.gender == Gender.GENDER_MALE ? this.userData.gender = "Мужской" : this.userData.gender = "Женский";
    });
  }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }
}
