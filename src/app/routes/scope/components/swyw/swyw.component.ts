import { Component, ViewChild, ElementRef, Renderer2, OnInit } from '@angular/core';
import { ArticlesService } from '../../../../core/services/articles.service';

@Component({
    selector: 'swyw-component',
    templateUrl: 'swyw.component.html'
})

export class SwywComponent implements OnInit {
    @ViewChild('section')
    private sectionEl: ElementRef;

    // private _title = '理账服务';
    private _article: any = {};

    constructor(private renderer: Renderer2, private articlesService: ArticlesService) { }

    ngOnInit() { 
        this.articlesService.loadArticle('assets/articles/swyw.article.json').subscribe({
            next: (article) => {
                this._article = article;
                
                this.sectionEl.nativeElement.insertAdjacentHTML('beforeend', this._article.content);
            },
            error: (error) => {
                console.log(error);
            }
        })


        postal.channel('LEFT_MENU').publish('menu.selected', 'swyw');
        
    }
}