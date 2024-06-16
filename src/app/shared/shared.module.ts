import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, MatFormFieldModule, MatInputModule,
  ],
  exports: [FormsModule,
    MatFormFieldModule,
    MatInputModule, MatTabsModule, MatToolbarModule, MatTableModule, MatCardModule, MatButtonModule
  ],
  declarations: []
})
export class SharedModule { }
