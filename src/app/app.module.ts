import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PcrFormComponent } from './components/pcr-form/pcr-form.component';
import { PcrComponent } from './components/pcr/pcr.component';
import { PcrCalculatorComponent } from './components/pcr-calculator/pcr-calculator.component';
import { PcrCalculatorService } from './services/pcr_calculator/pcr-calculator.service';
import { PcrService } from './services/pcr/pcr.service';
import { CadenaADNComponent } from './components/cadena-adn/cadena-adn.component';
import { MenuComponent } from './components/menu/menu.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';




@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    FormsModule,
    AppComponent,
    NavigationComponent,
    PcrFormComponent,
    PcrComponent,
    PcrCalculatorComponent,
    CadenaADNComponent,
    MenuComponent,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,

  ],
  providers: [
    PcrCalculatorService,
    PcrService,
    CadenaADNComponent

  ]
})
export class AppModule { }
