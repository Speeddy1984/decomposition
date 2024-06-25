/**
 * Компонент возвращает ссылку на сервис "Работа над ошибками" либо другой в блоке справа от новостей
 */
const ServiceLink = ({ serviceLink }) => {
  return serviceLink.map((item) => (
    <div key={item.id} className="serviceLink">
      <img src={item.image} alt="image"></img>
      <a href={item.link}>{item.name}</a>
      <p>{item.description}</p>
    </div>
  ));
};

export default ServiceLink;
