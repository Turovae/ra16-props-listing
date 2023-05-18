import Offer from "./Offer";

interface ItemProps {
    listing_id: number,
}

interface ListingProps {
    items?: Array<ItemProps>
}

function Listing(props: ListingProps) {
    const { items = [] } = props;

    console.log(items);

    return (
        <div className="item-list">
            <h3>I am listing component</h3>
            {items.map((item) => <Offer key={item.listing_id} item={item} />)}
        </div>
    );
}

export default Listing;
