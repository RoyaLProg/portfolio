import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../admin.service';
import { Router } from '@angular/router';
import { UntypedFormBuilder } from '@angular/forms';
import { Response } from '../../response';
import { sha256 } from 'js-sha256';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(
    private readonly adminService: AdminService,
    private readonly router: Router,
    private readonly formBuilder: UntypedFormBuilder,
    private readonly userService: UserService) { }

  ngOnInit(): void {
    if (!this.adminService.isLoggedIn()) {
      this.router.navigate(['/admin']);
    }
  }

  userErrorMessage: string = '';
  userSuccessMessage: string = '';
  passErrorMessage: string = '';
  passSuccessMessage: string = '';

  changePasswordForm = this.formBuilder.group({
    oldPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  changePassword() {
    if (!this.changePasswordForm.value.oldPassword || !this.changePasswordForm.value.newPassword || !this.changePasswordForm.value.confirmPassword) {
      this.passErrorMessage = 'Please fill in all fields.';
      return ;
    }
    if (this.changePasswordForm.value.newPassword !== this.changePasswordForm.value.confirmPassword) {
      this.passErrorMessage = 'New password and confirm password does not match.';
      return ;
    }
    this.userService.changePassword(
      this.hashPassword(this.changePasswordForm.value.oldPassword),
      this.hashPassword(this.changePasswordForm.value.newPassword)
    ).subscribe(
      (data: Response) => {
        if (!data.success) {
          this.passErrorMessage = data.message;
        } else {
          this.passErrorMessage = '';
          this.passSuccessMessage = data.message;
          this.adminService.logout();
          this.router.navigate(['/admin']);
        }
      }
    );
  }

  changeUsernameForm = this.formBuilder.group({
    username: ''
  });

  changeUsername() {
    if (!this.changeUsernameForm.value.username) {
      this.userErrorMessage = 'Please fill in all fields. (should not be complicated as there is only one field)';
      return ;
    }
    this.userService.changeUsername(this.changeUsernameForm.value.username).subscribe(
      (data: Response) => {
        if (!data.success) {
          this.userErrorMessage = data.message;
        } else {
          this.userSuccessMessage = data.message;
          this.adminService.logout();
          this.router.navigate(['/admin']);
        }
      }
    );
  }
  private hashPassword(password: string): string {
    const hash = sha256.create();
    return hash.update(password).hex();
  }
}
