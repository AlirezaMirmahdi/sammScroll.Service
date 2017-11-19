import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';

import { HomeRoutingModule } from './home-routing.module';
import { Cmp1Component, PipeNodeComponent } from './Cmp1/Cmp1.component';
import { Cmp2Component } from './Cmp2/Cmp2.component';

//components
import { SammPercentSliderComponent } from '../../directives/sammPercentSliderDrv/sammPercentSlider.component';

//services
import { SammScrollService } from '../../services/sammScrollSrv/sammScroll.service';

//ui

@NgModule({
    imports: [  
        HomeRoutingModule,
        CommonModule
    ],
    declarations: [
        HomeComponent,
        Cmp1Component,
        PipeNodeComponent,
        Cmp2Component,
        SammPercentSliderComponent
    ],
    entryComponents: [
    ],
    providers: [
        SammScrollService
    ]
})
export class HomeModule { }

