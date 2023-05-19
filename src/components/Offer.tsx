interface itemProps {
  url: string,
  title: string,
  MainImage: { url_570xN: string },
  price: string,
  currency_code: string,
  quantity: string,
}

interface offerProps {
  item: itemProps,
}

function Offer(props: offerProps) {
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
          <p className="item-title">{title}</p>
          <p className="item-price">{price}{currency_code}</p>
          <p className="item-quantity level-high">{quantity}</p>
        </div>
      </div>
    </>
  );

}

export default Offer;
