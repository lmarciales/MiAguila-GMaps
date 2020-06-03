import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ride',
  templateUrl: './ride.component.html',
  styleUrls: ['./ride.component.scss'],
})
export class RideComponent implements OnInit {
  constructor(private router: Router) {
    router.navigate(['ride/origin']);
  }

  ngOnInit(): void {}
}
