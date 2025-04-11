import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { TablasComponent } from './tablas/tablas.component';
import { TablasPipePipe } from '../pipes/tablas-pipe.pipe';
import { ListasComponent } from './listas/listas.component';
import { ListaPipe } from '../pipes/lista-pipe.pipe';



@NgModule({
  declarations: [
    BarChartComponent, LineChartComponent, PieChartComponent, TablasComponent, TablasPipePipe, ListasComponent, ListaPipe
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    BarChartComponent, LineChartComponent, PieChartComponent, TablasComponent, ListasComponent
  ]
})
export class ComponentsModule { }
