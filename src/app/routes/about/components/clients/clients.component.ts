import { Component, OnInit } from '@angular/core';

@Component({
    selector: "clients-component",
	templateUrl: "./clients.component.html",
	styleUrls: ["./clients.component.css"]
})

export class ClientsComponent implements OnInit {
    constructor() { }

    array = _.range(1, 5);

    ngOnInit() { }
}