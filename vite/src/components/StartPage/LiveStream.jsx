/**
 * Компонент возвращает список эфиров 
 */
const LiveStream = ({ liveStream }) => {
  return (
    <div className="stream">
      <a href="#">{liveStream.title}</a>
      {liveStream.items.map((item) => (
        <p key={item.id}>
          <a href="#">
            <img src={liveStream.icon} alt="play"></img>
            {item.programm} {item.chanel}
          </a>
        </p>
      ))}
    </div>
  );
};

export default LiveStream;
