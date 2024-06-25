/**
 * Компонент возвращает блок Погоды
 */
const Weather = ({ weather }) => {
  return (
    <div className="weather">
      <a href="#">{weather.title}</a>
      <p>{weather.morning}</p>
      <p>{weather.day}</p>
    </div>
  );
};

export default Weather;
