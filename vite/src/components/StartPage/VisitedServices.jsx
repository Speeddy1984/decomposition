/**
 * Компонент возвращает блок Посещаемое
 */
const VisitedServices = ({ visitedServices }) => {
  return (
    <div className="visitedServices">
      <a href="#">{visitedServices.title}</a>
      {visitedServices.articles.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
};

export default VisitedServices;
