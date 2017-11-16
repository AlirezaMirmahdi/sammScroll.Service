import { Component, OnInit } from '@angular/core';
import { SammScrollService } from '../../../services/sammScrollSrv/sammScroll.service';

@Component({
    selector: 'cmp2',
    templateUrl: './cmp2.component.html',
    styleUrls: ['./cmp2.component.css']
})

export class Cmp2Component implements OnInit {
    constructor() { }
    
    ngOnInit(): void { 
        
    }
    
    LineBarList = [
        {
            title : 'item1',
            value : 75,
            linebarColorClass : 'line-bg-color',
            titleColorClass : 'line-title-color' ,
            valueAnimation : true
        }, {
            title : 'item2',
            value : 32,
            linebarColorClass : 'line-bg-color',
            titleColorClass : 'line-title-color' ,
            valueAnimation : true
        }, {
            title : 'item3',
            value : 53,
            linebarColorClass : 'line-bg-color',
            titleColorClass : 'line-title-color' ,
            valueAnimation : true
        }, {
            title : 'item4',
            value : 14,
            linebarColorClass : 'line-bg-color',
            titleColorClass : 'line-title-color' ,
            valueAnimation : true
        }, {
            title : 'item5',
            value : 86,
            linebarColorClass : 'line-bg-color',
            titleColorClass : 'line-title-color' ,
            valueAnimation : true
        }, {
            title : 'item6',
            value : 75,
            linebarColorClass : 'line-bg-color',
            titleColorClass : 'line-title-color' ,
            valueAnimation : true
        }, {
            title : 'item7',
            value : 65,
            linebarColorClass : 'line-bg-color',
            titleColorClass : 'line-title-color' ,
            valueAnimation : true
        }, {
            title : 'item8',
            value : 90,
            linebarColorClass : 'line-bg-color',
            titleColorClass : 'line-title-color' ,
            valueAnimation : true
        }
    ];
    
}







