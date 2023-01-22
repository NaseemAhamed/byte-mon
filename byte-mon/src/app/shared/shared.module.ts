import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  imports: [],
  declarations: [HeaderComponent, FooterComponent, NavComponent],
  exports: [HeaderComponent, FooterComponent, NavComponent],
})

export class SharedModule {}
