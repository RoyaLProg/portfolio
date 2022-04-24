import { Component, Host, Injectable, OnInit } from '@angular/core';
import { AdminService } from './../admin.service';
import { Router } from '@angular/router';
import { HttpRequest, HttpEvent, HttpHandler, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private readonly adminService: AdminService, private readonly router: Router) { }

  user = {
    name: '',
  };
  ngOnInit(): void {
    if (!this.adminService.isLoggedIn()) {
      this.router.navigate(['/admin']);
    }
  }

  logout() {
    this.adminService.logout();
    this.router.navigate(['/admin']);
  }
}

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) : Observable<HttpEvent<any>>{
    if (req.headers.has('X-GitHub-OTP')) return next.handle(req);

    const idToken = localStorage.getItem('SESSTOKEN');
    if (idToken) {
      const cloned = req.clone({
        headers: req.headers.set('Authorization', 'Bearer ' + idToken)
      });
      return next.handle(cloned);
    }
    else {
      return next.handle(req);
    }
  }
}
