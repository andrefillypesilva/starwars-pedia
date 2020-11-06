import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './structure/header/header.component';
import { FooterComponent } from './structure/footer/footer.component';
import { ShortDescriptionPipe } from './pipes/short-description.pipe';
import { ResultCardComponent } from './components/result-card/result-card.component';
import { RouterModule } from '@angular/router';
import { InternalHeaderComponent } from './structure/internal-header/internal-header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResultBlockComponent } from './components/result-block/result-block.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ShortDescriptionPipe,
    ResultCardComponent,
    InternalHeaderComponent,
    ResultBlockComponent,
  ],
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  exports: [
    HeaderComponent,
    FooterComponent,
    ShortDescriptionPipe,
    ResultCardComponent,
    InternalHeaderComponent,
    ResultBlockComponent,
  ],
})
export class SharedModule {}
