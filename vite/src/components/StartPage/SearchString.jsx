/**
 * Компонент возвращает поисковую строку с ярлыком сиситемы слева и примером поискового запроса
 */
const SearchString = ({ searchString }) => {
  const tags = searchString.tags;

  return (
    <div className="searchBar">
      <div className="tags">
        {tags.map((item, index) => (
          <div key={index} className="tag">
            <a href="#">{item}</a>
          </div>
        ))}
      </div>
      <div className="search">
        <img
          src="https://cs6.pikabu.ru/avatars/976/x976349-854990650.png"
          alt="Яндекс"
        ></img>
        <form>
          <input type="text" />
          <button type="submit">Найти</button>
        </form>
      </div>
      <div className="searchExample">
        <p>
          Найдется всё. Например, <a href="#">{searchString.searchExample}</a>
        </p>
      </div>
    </div>
  );
};

export default SearchString;
