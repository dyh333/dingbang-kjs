import { Component, ViewChild, ElementRef, Renderer2, OnInit } from '@angular/core';
import { ArticlesService } from '../../../../core/services/articles.service';

@Component({
    selector: 'sjyw-component',
    templateUrl: 'sjyw.component.html'
})

export class SjywComponent implements OnInit {
    @ViewChild('section')
    private sectionEl: ElementRef;

    // private _title = '审计业务';
    // private _title: any = {};
    private _article: any = {};

    constructor(private renderer: Renderer2, private articlesService: ArticlesService) { }

    ngOnInit() {
        this.articlesService.loadArticle('assets/articles/sjyw.article.json').subscribe({
            next: (article) => {
                this._article = article;

                this.sectionEl.nativeElement.insertAdjacentHTML('beforeend', this._article.content);
            },
            error: (error) => {
                console.log(error);
            }
        })
    }
}