import { Component, OnInit, AfterViewInit, ElementRef, Input } from '@angular/core';
import { SammScrollService } from '../../../services/sammScrollSrv/sammScroll.service';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';


@Component({
    selector: 'cmp1',
    templateUrl: './cmp1.component.html',
    styleUrls: ['./cmp1.component.css']
})

export class Cmp1Component implements OnInit {
    constructor() { }
    
    ngOnInit(): void { 
        
    }
    
    Pipe_nodes=[
        "hi I am first!"
        , "hi I am second!"
        , "and I am third!"
        , "I am here the fourth!"
        , "ummmm fifth!"
        , "aaaaand sixth!"
        , "seveeeeenth!"
        , "I am the last one, eighth!"
    ];
    
}


@Component({
    selector: 'pipe_node',
    template: `
        <div [@becomeActive]="NodeCurrentState" class="node-vertical">
            <span [@tooltipVisible]="TooltipVisiState" class="tooltiptext tooltip-left">{{tooltipText}}</span>
        </div>
    `,
    styles: [`
        .node-vertical {
            margin-top: 100px;
            margin-bottom: 100px;
            display: inline-block;
            border-radius: 50%;
            height: 1.3em;
            width: 1.3em;
            content: "";
            box-shadow: 0 0 0 0.5em #4298c3;
            position: relative;
            right: -0.3em;
            background-color: #ffdbb7;
        }
        .tooltiptext {
            visibility: hidden;
            position: absolute;
            width: 120px;
            background-color: #555;
            color: #fff;
            text-align: center;
            padding: 5px 0;
            border-radius: 6px;
            z-index: 1;
            opacity: 0;
            direction: ltr;
        }
        .tooltip-left {
            top: -5px;
            right: 125%;
            margin-right: 0.5em;
        }
        .tooltip {
            position: relative;
            display: inline-block;
            border-bottom: 1px dotted #ccc;
            zcursor: help;
            color: #006080;
        }
        .tooltip-left::after {
            content: "";
            position: absolute;
            top: 50%;
            left: 100%;
            margin-top: -5px;
            border-width: 5px;
            border-style: solid;
            border-color: transparent transparent transparent #555;
        }
        *, *:before, *:after {
            box-sizing: inherit;
        }
    `],
    animations: [
    trigger('becomeActive', [
        state('active', style({
            'background-color': 'cyan'
        })),
      transition('notActive => active', [animate('500ms ease-in')])
    ]),
    trigger('tooltipVisible', [
        state('visible', style({
            visibility: 'visible',
            opacity: 1
        })),
      transition('notVisible => visible', [animate('700ms ease-in')])
    ])
  ]
})
export class PipeNodeComponent implements AfterViewInit {
     @Input() tooltipText: string;
    
    constructor(private scrollSrv : SammScrollService
                , private elm : ElementRef) { }
    
    private ScrollEventInfo : any;
    NodeCurrentState = "notActive";
    TooltipVisiState = "notVisible";
    
    ngAfterViewInit(): void { 
        var pageOffset = (window.innerHeight / 20 )* 19;
        var listenY = this.elm.nativeElement.getBoundingClientRect().top + window.pageYOffset;
        if(listenY <= pageOffset) 
        {
            setTimeout(() => {
                this.NodeCurrentState = "active"; 
                this.TooltipVisiState = "visible";
            }, 100);
        } else {
             this.ScrollEventInfo = this.scrollSrv.setEventListener(listenY - pageOffset);
            this.ScrollEventInfo.eventObserver.subscribe(
                () => { 
                    this.NodeCurrentState = "active"; 
                    this.TooltipVisiState = "visible"; 
                }
            );
        }
       
    }
}

