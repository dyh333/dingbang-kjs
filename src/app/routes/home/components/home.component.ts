import { Component, OnInit } from '@angular/core';

@Component({
    selector: "home-component",
	templateUrl: "./home.component.html",
	styleUrls: ["./home.component.scss"]
})

export class HomeComponent implements OnInit {
    sjyw="scope-sjyw";
    swyw="scope-swyw";
    yzyw="scope-yzyw";
    more = "more";
    constructor() { }

    ngOnInit() { }
}