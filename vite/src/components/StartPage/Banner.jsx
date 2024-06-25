/**
 * Компонент возвращает баннер под строкой поиска 
 */
const Banner = ({ banner }) => {
  return (
    <div className="banner">
      <a href="#">
        <img src={banner} alt="banner" />
      </a>
    </div>
  );
};

export default Banner;
