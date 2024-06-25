/**
 * Компонент возвращает список тегов новостей
 */
const NewsTags = ({ newsTags }) => {
  return newsTags.map((tag) => (
    <a key={tag} href="#">
      {tag}
    </a>
  ));
};

export default NewsTags;
