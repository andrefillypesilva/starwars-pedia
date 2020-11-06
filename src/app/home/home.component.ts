import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  public formGroup: FormGroup;

  constructor(
    private readonly router: Router,
    private readonly fb: FormBuilder
  ) {
    this.formGroup = this.fb.group({
      search: [null, Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onSearch(): void {
    if (this.formGroup.valid) {
      this.router.navigate(['/resources'], { queryParams: { search: this.formGroup.get('search').value } });
    }
  }

  onGoToRandomPage(): void {

  }

}
