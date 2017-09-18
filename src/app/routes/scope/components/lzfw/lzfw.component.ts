import { Component, ViewChild, ElementRef, Renderer2, OnInit } from '@angular/core';
import { ArticlesService } from '../../../../core/services/articles.service';

@Component({
    selector: 'lzfw-component',
    templateUrl: 'lzfw.component.html'
})

export class LzfwComponent implements OnInit {
    @ViewChild('section')
    private sectionEl: ElementRef;

    private _title = '理账服务';
    private _article: any = {};

    constructor(private renderer: Renderer2, private articlesService: ArticlesService) { }

    ngOnInit() { 
        this.articlesService.loadArticle('assets/articles/lzfw.article.json').subscribe({
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