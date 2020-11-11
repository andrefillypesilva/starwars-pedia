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
import { TableInfoComponent } from './components/table-info/table-info.component';
import { ModalComponent } from './components/modal/modal.component';
import { ReplaceAllPipe } from './pipes/replace-all.pipe';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ShortDescriptionPipe,
    ResultCardComponent,
    InternalHeaderComponent,
    ResultBlockComponent,
    TableInfoComponent,
    ModalComponent,
    ReplaceAllPipe,
  ],
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  exports: [
    HeaderComponent,
    FooterComponent,
    ShortDescriptionPipe,
    ResultCardComponent,
    InternalHeaderComponent,
    ResultBlockComponent,
    TableInfoComponent,
    ModalComponent,
    ReplaceAllPipe
  ],
})
export class SharedModule {}
