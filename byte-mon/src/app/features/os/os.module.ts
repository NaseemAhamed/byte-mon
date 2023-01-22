import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OsComponent } from './os.component';

@NgModule({
  imports: [RouterModule],
  declarations: [OsComponent],
  exports: [OsComponent],
})
export class OSModule {}
