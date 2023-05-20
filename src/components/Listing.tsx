import Offer from "./Offer";
import { ListingProps } from "../interaces";

function Listing(props: ListingProps) {
  const { items = [] } = props;

  console.log(items);

  return (
    <div className="item-list">
      {items.map((item) => item.state === 'active'
        ? <Offer key={item.listing_id} item={item} />
        : null)}
    </div>
  );
}

export default Listing;
