import { NgModule } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatRadioModule } from '@angular/material/radio';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  imports: [
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatIconModule,
    MatInputModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatButtonModule,
    MatTooltipModule,
    MatProgressBarModule,
    MatDialogModule,
    MatSelectModule,
    MatMenuModule,
    MatDividerModule,
    MatRadioModule,
    MatToolbarModule,
  ],
  exports: [
    MatSidenavModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatInputModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatButtonModule,
    MatTooltipModule,
    MatProgressBarModule,
    MatDialogModule,
    MatSelectModule,
    MatMenuModule,
    MatDividerModule,
    MatRadioModule,
  ],
})
export class MyMaterialModule {}
