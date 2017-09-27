import { Component, OnInit } from '@angular/core';

@Component({
    selector: "recruitment-component",
	templateUrl: "./recruitment.component.html",
	styleUrls: ["./recruitment.component.css"]
})

export class RecruitmentComponent implements OnInit {
    constructor() { }

    title = "人才招聘";

    ngOnInit() { }
}