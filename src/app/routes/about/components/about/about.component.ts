import { Component, OnInit } from '@angular/core';

@Component({
    selector: "about-component",
	templateUrl: "./about.component.html",
	styleUrls: ["./about.component.css"]
})

export class AboutComponent implements OnInit {
    constructor() { }

    title = '关于轩诚';
    
    menuUrl = 'assets/config/about.config.json';

    ngOnInit() { }
}