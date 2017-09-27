import { Component, OnInit } from '@angular/core';
import { TranslatorService } from '../../core/translator/translator.service';

@Component({
    selector: 'header-component',
    templateUrl: 'header.component.html',
    styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
    constructor(private tsServ: TranslatorService) { }

    ngOnInit() { 
        this.tsServ.use('en-US');
    }
}