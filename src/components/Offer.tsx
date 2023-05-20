import Title from "./Title";
import Price from "./Price";
import Quantity from "./Quantity";
import { Item } from "../interaces";

function Offer(props: { item: Item }) {
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
