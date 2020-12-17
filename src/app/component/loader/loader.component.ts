import { LoaderService } from './../../service/loader.service';
import { Subject } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html'
})
export class LoaderComponent {

  loading: Subject<boolean> = this.loaderService.isLoading;

  constructor(private loaderService:LoaderService) { }
}
