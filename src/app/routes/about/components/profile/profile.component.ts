import { Component, ViewChild, ElementRef, Renderer2, OnInit } from '@angular/core';

import { ArticlesService } from "../../../../core/services/articles.service";

@Component({
    selector: "profile-component",
	templateUrl: "./profile.component.html",
	styleUrls: ["./profile.component.css"]
})

export class ProfileComponent implements OnInit {
    @ViewChild('section')
    private sectionEl: ElementRef;

    title = '轩诚简介';
    article: any = {};

    constructor(private renderer: Renderer2, private articlesService: ArticlesService) { }

    ngOnInit() { 
        this.articlesService.loadArticle('assets/articles/profile.article.json').subscribe({
            next: (article) => {
                this.article = article;
                
                this.sectionEl.nativeElement.insertAdjacentHTML('beforeend', this.article.content);
            },
            error: (error) => {
                console.log(error);
            }
        })
    }
}