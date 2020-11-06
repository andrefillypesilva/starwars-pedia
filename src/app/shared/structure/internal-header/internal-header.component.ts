import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-internal-header',
  templateUrl: './internal-header.component.html'
})
export class InternalHeaderComponent implements OnInit {

  public fixed: boolean;
  public initialHeaderPosition: number;

  @HostListener('window:scroll', ['$event'])
  fixInternalHeaderOnTop(event): void {
    if (window.pageYOffset > this.initialHeaderPosition) {
      this.fixed = true;
    } else {
      this.fixed = false;
    }
  }

  constructor(
    private readonly router: Router,
    private readonly elementRef: ElementRef
  ) { }

  ngOnInit(): void {
    this.fixed = false;
    this.initialHeaderPosition = this.elementRef.nativeElement.getBoundingClientRect().y;
  }

  onGoToHome(): void {
    this.router.navigate(['/']);
  }

}
