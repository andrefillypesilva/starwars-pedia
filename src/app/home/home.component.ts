import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  @ViewChild('t') t: any;

  public formGroup: FormGroup;

  private pages: string[] = ['films', 'people', 'planets', 'species', 'starships', 'vehicles'];

  constructor(
    private readonly router: Router,
    private readonly fb: FormBuilder
  ) {
    this.formGroup = this.fb.group({
      search: [null, Validators.required]
    });
  }

  ngOnInit(): void {
    // this.formGroup.get('search').valueChanges.subscribe((value) => {
    //   console.log('Do an interactive search here: ', value);
    // });
  }

  onSearch(): void {
    if (this.formGroup.valid) {
      this.router.navigate(['/resources'], { queryParams: { search: this.formGroup.get('search').value } });
    // } else if (this.formGroup.get('search').untouched) {
      // this.onGoToRandomPage();
      // this.formGroup.get('search').disable();
      // console.log(this.formGroup.get('search').errors);
    } else {
      this.t.open();
    }
  }

  onGoToRandomPage(): void {
    const index = Math.floor(Math.random() * 5);
    this.router.navigate([`/resources/${this.pages[index]}`]);
  }

  onGoToPage(url: string): void {
    this.router.navigate([`/resources/${url}`]);
  }

}
