import ArticleBox from "../../../../components/ArticleBox";
import "./index.css";
const articles = [1, 2, 3];

const Articles = () => {
  return (
    <section className="articles">
      <div className="container">
        <div className="articles-header">
          <div className="articles-header__right">
            <span className="articles-header__title title">
              جدیدترین مقاله ها
            </span>
            <span className="articles-header__text">
              پیش به سوی ارتقای دانش
            </span>
          </div>
          <div className="articles-header__left">
            <a href="#" className="articles-header__link">
              تمامی مقاله ها
              <i className="fas fa-arrow-left articles-header__icon"></i>
            </a>
          </div>
        </div>

        <div className="articles__content">
          <div className="row">
            {articles.map((article) => (
              <div className="col-md-6 col-lg-4" key={article}>
                <ArticleBox />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Articles;
