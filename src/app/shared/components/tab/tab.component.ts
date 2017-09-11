import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'tab-component',
    templateUrl: 'tab.component.html'
})

export class TabComponent implements OnInit {
    @Input()
    tabs = [
        {
          active: true,
          name  : 'Tab 1',
          icon  : 'anticon anticon-apple'
        },
        {
          active: false,
          name  : 'Tab 2',
          icon  : 'anticon anticon-android'
        }
    ];

    constructor() { }

    ngOnInit() { }
}