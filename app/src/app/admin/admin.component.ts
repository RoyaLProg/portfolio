import { Component, OnInit } from '@angular/core';
import { AdminService } from './admin.service';
import { sha256 } from 'js-sha256';
import { UntypedFormBuilder } from '@angular/forms';
import { Response } from './response';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit {

  constructor(private adminService : AdminService, private formBuilder: UntypedFormBuilder, private router: Router) { }

  adminForm = this.formBuilder.group({
    username: '',
    password: ''
  });

  message : string = '';

  ngOnInit(): void {
    if (this.adminService.isLoggedIn())
      this.router.navigate(['/admin/dashboard']);
  }

  public onSubmit(): void {
    const password = this.hashPassword(this.adminForm.value.password);
    const username = this.adminForm.value.username;
    this.adminService.connect(username, password).subscribe(
      (data: Response) => {
        if (!data.success)
          this.message = data.message;
        else{
          this.message = '';
          this.adminService.setSession(data);
          this.router.navigate(['/admin/dashboard']);
        }
      }
    );
  }

  private hashPassword(password: string): string {
    const hash = sha256.create();
    return hash.update(password).hex();
  }
}
