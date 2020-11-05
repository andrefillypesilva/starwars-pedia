import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-internal-header',
  templateUrl: './internal-header.component.html'
})
export class InternalHeaderComponent implements OnInit {

  constructor(
    private readonly router: Router
  ) { }

  ngOnInit(): void {
  }

  onGoToHome(): void {
    this.router.navigate(['/']);
  }

}
