/**
 * Компонент возвращает блок ТВ-программы
 */
const TVGuide = ({ tvGuide }) => {
  return (
    <div className="tvGuide">
      <a href="#">{tvGuide.title}</a>
      {tvGuide.items.map((item) => (
        <p key={item.id}>
          {item.time} {item.programm} {item.chanel}
        </p>
      ))}
    </div>
  );
};

export default TVGuide;
