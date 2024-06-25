/**
 * Компонент возвращает раздел "Карты"
 */
const Map = ({ map }) => {
  return (
    <div className="map">
      <a href="#">{map.title}</a>
      <p>{map.description}</p>
    </div>
  );
};

export default Map;
