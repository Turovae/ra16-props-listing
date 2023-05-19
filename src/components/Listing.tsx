import Offer from "./Offer";

// interface ItemProps {
//   listing_id: number,
//   state: string,
//   url?: string | undefined,
//   MainImage?: { url_570xN: string } | undefined,
//   title?: string | undefined,
//   price?: string | undefined,
//   currency_code?: string | undefined,
//   quantity?: number | undefined,
// }

type ItemProps = {
  listing_id: number,
  state: string,
  url?: string | undefined,
  MainImage?: { url_570xN: string } | undefined,
  title?: string | undefined,
  price?: string | undefined,
  currency_code?: string | undefined,
  quantity?: number | undefined,
}

interface ListingProps {
  items?: Array<ItemProps>
}

function Listing(props: ListingProps) {
  const { items = [] } = props;

  console.log(items);

  return (
    <div className="item-list">
      {items.map((item) => item.state === 'active'
        && item.url
        ? <Offer key={item.listing_id} item={item} />
        : null)}
    </div>
  );
}

export default Listing;
