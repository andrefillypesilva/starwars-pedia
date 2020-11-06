import { Component, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-internal-header',
  templateUrl: './internal-header.component.html'
})
export class InternalHeaderComponent implements OnInit {

  @Input() public search = '';

  public formGroup: FormGroup;

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
    private readonly fb: FormBuilder,
    private readonly router: Router,
    private readonly elementRef: ElementRef
  ) { }

  ngOnInit(): void {
    this.fixed = false;
    this.initialHeaderPosition = this.elementRef.nativeElement.getBoundingClientRect().y;

    this.formGroup = this.fb.group({
      search: [this.search, Validators.required]
    });
  }

  onGoToHome(): void {
    this.router.navigate(['/']);
  }

  onSearch(): void {
    if (this.formGroup.valid) {
      this.router.navigate(['/resources'], { queryParams: { search: this.formGroup.get('search').value } });
    }
  }

}
