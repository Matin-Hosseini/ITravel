import ArticleBox from "../../../../components/ArticleBox";
import SectionHeader from "../../../../components/SectionHeader";
import "./index.css";
const articles = [1, 2, 3];

const Articles = () => {
  return (
    <section className="articles">
      <div className="container">
        <SectionHeader
          title="جدیدترین مقاله های ما"
          caption=" پیش به سوی ارتقای دانش"
          link={{ to: "/articles", title: "تمامی مقاله ها" }}
        />

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
