export class Article {
  title: string;
  content: string;

  constructor(title: string, content: string) {
    this.title = title;
    this.content = content;
  }
}


export interface HistoryArticleComponent {
  article: Article;
} 

