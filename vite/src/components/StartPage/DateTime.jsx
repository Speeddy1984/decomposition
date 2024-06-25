/**
 * Компонент возвращает текущую дату, время и день недели 
 */
const DateTime = ({ dateTime }) => {
  const formatDate = (dateTime) => {
    const daysOfWeek = [
      "Воскресенье",
      "Понедельник",
      "Вторник",
      "Среда",
      "Четверг",
      "Пятница",
      "Суббота",
    ];
    const months = [
      "Января",
      "Февраля",
      "Марта",
      "Апреля",
      "Мая",
      "Июня",
      "Июля",
      "Августа",
      "Сентября",
      "Октября",
      "Ноября",
      "Декабря",
    ];

    const dayOfWeek = daysOfWeek[dateTime.getDay()];
    const day = dateTime.getDate();
    const month = months[dateTime.getMonth()];
    const hours = dateTime.getHours().toString().padStart(2, "0");
    const minutes = dateTime.getMinutes().toString().padStart(2, "0");

    return `${day} ${month}, ${dayOfWeek} ${hours}:${minutes}`;
  };

  const formattedDate = formatDate(dateTime);

  return <div>{formattedDate}</div>;
};

export default DateTime;
