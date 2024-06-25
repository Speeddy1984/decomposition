import "./App.css";
import NewsTags from "./components/StartPage/NewsTags";
import DateTime from "./components/StartPage/DateTime";
import News from "./components/StartPage/News";
import StockQuotes from "./components/StartPage/StockQuotes";
import ServiceLink from "./components/StartPage/ServiceLink";
import SearchString from "./components/StartPage/SearchString";
import Banner from "./components/StartPage/Banner";
import Weather from "./components/StartPage/Weather";
import VisitedServices from "./components/StartPage/VisitedServices";
import Map from "./components/StartPage/Map";
import TVGuide from "./components/StartPage/TVGuide";
import LiveStream from "./components/StartPage/LiveStream";

function App() {
  const newsTags = ["Сейчас в СМИ", "в Германии", "Рекомендуем"];
  const dateTime = new Date();
  const news = [
    {
      id: 1,
      source:
        "https://avatars.dzeninfra.ru/get-ynews-logo/41096/1040-1640775230584-square/logo-square",
      newsText: "Новость 1",
      link: "#",
    },
    {
      id: 2,
      source:
        "https://avatars.dzeninfra.ru/get-ynews-logo/41096/1040-1640775230584-square/logo-square",
      newsText: "Новость 2",
      link: "#",
    },
    {
      id: 3,
      source:
        "https://avatars.dzeninfra.ru/get-ynews-logo/41096/1040-1640775230584-square/logo-square",
      newsText: "Новость 3",
      link: "#",
    },
    {
      id: 4,
      source:
        "https://avatars.dzeninfra.ru/get-ynews-logo/41096/1040-1640775230584-square/logo-square",
      newsText: "Новость 4",
      link: "#",
    },
    {
      id: 5,
      source:
        "https://avatars.dzeninfra.ru/get-ynews-logo/41096/1040-1640775230584-square/logo-square",
      newsText: "Новость 5",
      link: "#",
    },
  ];

  const stockQuotes = [
    {
      id: 1,
      quoteName: "USD MOEX",
      quotePrice: 63.52,
      quoteChange: "+0,09",
      link: "#",
    },
    {
      id: 2,
      quoteName: "EUR MOEX",
      quotePrice: 70.86,
      quoteChange: "+0,14",
      link: "#",
    },
    { id: 3, quoteName: "НЕФТЬ", quotePrice: 64.9, quoteChange: "+1,63%", link: "#" },
  ];

  const serviceLink = [
    {
      id: 1,
      image:
        "https://thumb.photo-ac.com/af/afdcd7214413935c058438d3fdbc91c3_w.jpeg",
      name: "Работа над ошибками",
      description: "Смотрите на яндексе и запоминайте",
      link: "#",
    },
  ];

  const searchString = {
    tags: ['Видео', 'Картинки','Новости','Карты','Маркет','Переводчик','Эфир','ещё'],
    searchExample: 'Фаза луны сегодня'
  };

  const banner = "https://i.ibb.co/gzJCXDk/orig.jpg";

  const weather = {title: "Погода", morning: "Утром +17", day: "Днем +20"};

  const visitedServices = {title: "Посещаемое", articles: ["Недвижимость - о сталинках", "Маркет - люстры и светильники", "Авто.ру - привод 4х4 до 500 000"]};

  const map = {title: "Карта Германии", description: "Расписание"};

  const tvGuide = {
    title: "Телепрограмма",
    items: [
    {
      id: 1,
      time:
        "02:00",
      programm: "ТНТ. Best",
      chanel: "ТНТ Intermational",
    },
    {
      id: 2,
      time:
        "02:15",
      programm: "Джинглики",
      chanel: "Карусель INT",
    },
    {
      id: 3,
      time:
        "02:25",
      programm: "Наедине со всеми",
      chanel: "Первый",
    },
  ]
  };

  const liveStream = {
    title: "Эфир",
    icon: "https://i.ibb.co/7RrBYXs/playbutton-121290.png",
    items: [
    {
      id: 1,
      programm: "Упраление как искусство",
      chanel: "Успех",
    },
    {
      id: 2,
      programm: "Ночь. Мир в это время",
      chanel: "earthTV",
    },
    {
      id: 3,
      programm: "Андрей Возн...",
      chanel: "Совершенно секретно",
    },
  ]
  };
  
  return (
    <>
      <header className="headerRow">
        <div>
          <div className="newsTagsDate">
            <NewsTags newsTags={newsTags} />
            <DateTime dateTime={dateTime} />
          </div>
          <div className="newsItems">
            <News news={news} />
          </div>
          <div className="quotesItems">
            <StockQuotes stockQuotes={stockQuotes} />
          </div>
        </div>
        <div className="serviceLink">
          <ServiceLink serviceLink={serviceLink} />
        </div>
      </header>
      <main>
        <SearchString searchString={searchString}/>
        <Banner banner={banner}/>
      </main>
      <footer>
        <div className="footer">
          <div className="left">
            <Weather weather={weather}/>
            <VisitedServices visitedServices={visitedServices} />
          </div>
          <div className="center">
            <Map map={map} />
            <TVGuide tvGuide={tvGuide} />
          </div>
          <div className="right">
          <LiveStream liveStream={liveStream} />
          </div>

        </div>
      </footer>
    </>
  );
}

export default App;
