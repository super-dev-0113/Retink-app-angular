import { Component, OnInit } from '@angular/core';
import { NgAuthService } from "../../ng-auth.service";

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})

export class ServiceComponent implements OnInit {

  constructor(public ngAuthService: NgAuthService) { }

  ngOnInit() {
    this.getServices();
  }
  services;
  getServices = () =>
    this.ngAuthService
      .GetServices()
      .subscribe(res => (this.services = res));
}
