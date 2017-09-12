import { Component, ViewChild, ElementRef, Renderer2, OnInit } from '@angular/core';
import { ArticlesService } from '../../services/articles.service';

@Component({
    selector: 'sjjz-component',
    templateUrl: 'sjjz.component.html'
})

export class SjjzComponent implements OnInit {
    @ViewChild('section')
    private sectionEl: ElementRef;

    private _title = '审计鉴证';
    private _article: any = {};

    constructor(private renderer: Renderer2, private articlesService: ArticlesService) { }

    ngOnInit() { 
        this.articlesService.loadArticle('assets/articles/sjjz.article.json').subscribe({
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