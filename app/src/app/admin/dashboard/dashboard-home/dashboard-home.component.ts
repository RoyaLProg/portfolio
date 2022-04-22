import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/admin/admin.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.css']
})
export class DashboardHomeComponent implements OnInit {

  constructor(private readonly adminService: AdminService, private router: Router) { }

  ngOnInit(): void {
  }

  logOut(): void {
    this.adminService.logout();
    this.router.navigate(['/']);
  }
}
