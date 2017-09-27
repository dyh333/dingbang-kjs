import { Component, ViewChild, ElementRef, Renderer2, OnInit } from '@angular/core';
import { ArticlesService } from '../../../../core/services/articles.service';

@Component({
  selector: 'zxpx-component',
  templateUrl: './zxpx.component.html',
  styleUrls: ['./zxpx.component.scss']
})
export class ZxpxComponent implements OnInit {
  @ViewChild('section')
  private sectionEl: ElementRef;

  private _article: any = {};

  constructor(private renderer: Renderer2, private articlesService: ArticlesService) { }

  ngOnInit() {
    this.articlesService.loadArticle('assets/articles/zxpx.article.json').subscribe({
      next: (article) => {
          this._article = article;

          this.sectionEl.nativeElement.insertAdjacentHTML('beforeend', this._article.content);
      },
      error: (error) => {
          console.log(error);
      }
    });
  }
}
