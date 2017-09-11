import { Component, OnInit } from '@angular/core';
import { ArticleService } from './article.service';

@Component({
    selector: 'article-component',
    templateUrl: 'article.component.html',
    styleUrls: [],
    providers: [ArticleService]
})

export class ArticleComponent implements OnInit {
    constructor(articleService: ArticleService) { }

    ngOnInit() { }
}