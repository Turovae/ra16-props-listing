import Title from "./Title";
import Price from "./Price";
import Quantity from "./Quantity";

interface Item {
  url: string,
  title: string,
  MainImage: { url_570xN: string },
  price: string,
  currency_code: string,
  quantity: number,
}

interface Offer {
  item: Item,
}

function Offer(props: Offer) {
  console.log(props);
  const { url, MainImage, title, price, currency_code, quantity } = props.item;

  return (
    <>
      <div className="item">
        <div className="item-image">
          <a href={url}>
            <img src={MainImage.url_570xN} alt="" />
          </a>
        </div>
        <div className="item-details">
          <Title title={title} />
          <Price price={price} currency_code={currency_code} />
          <Quantity quantity={quantity} />
        </div>
      </div>
    </>
  );

}

export default Offer;
