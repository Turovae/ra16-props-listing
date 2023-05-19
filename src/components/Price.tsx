function getPrice( price: string, currency_code: string ): string {
  switch (currency_code) {
    case 'USD':
      return `$${price}`;
    case 'EUR':
      return `€${price}`;
    default:
      return price + currency_code;
  }
}

function Price(props: { price: string, currency_code: string }) {
  const { price, currency_code } = props;

  return (
    <p className="item-price">{getPrice(price, currency_code)}</p>
  );
}

export default Price;
