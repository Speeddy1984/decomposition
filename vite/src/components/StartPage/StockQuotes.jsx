/**
 * Компонент возвращает котировки
 */
const StockQuotes = ({ stockQuotes }) => {
  return stockQuotes.map((item) => (
    <a key={item.id} href={item.link}>
      {item.quoteName} {item.quotePrice} {item.quoteChange}
    </a>
  ));
};

export default StockQuotes;
