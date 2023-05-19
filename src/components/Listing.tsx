import Offer from "./Offer";

interface ItemProps {
  listing_id: number,
  state?: string,
  url: string,
  MainImage: { url_570xN: string },
  title: string,
  price: string,
  currency_code: string,
  quantity: string,
}

interface ListingProps {
  items?: Array<ItemProps>
}

function Listing(props: ListingProps) {
  const { items = [] } = props;

  console.log(items);

  return (
    <div className="item-list">
      {items.map((item) => item.state !== 'removed' ? <Offer key={item.listing_id} item={item} /> : null)}
    </div>
  );
}

export default Listing;
