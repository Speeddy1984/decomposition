/**
 * Компонент возвращает список новостей
 */
const News = ({ news }) => {
  return news.map((item) => (
    <div key={item.id} className="newsItem">
      <img src={item.source} alt="source"></img>
      <a href={item.link}>{item.newsText}</a>
    </div>
  ));
};

export default News;
