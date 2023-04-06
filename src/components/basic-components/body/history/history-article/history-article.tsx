import { HistoryArticleComponent } from "../../models/history";
import "./history-article.scss";

const HistoryArticle : React.FC<HistoryArticleComponent> = ({ 
  article 
} : HistoryArticleComponent) => {
  
  return (
    <div className="article">
      <h2>
        {article.title}
      </h2>
      <div className="article-content">
        {article.content}
      </div>
    </div>
  );
};

export default HistoryArticle;