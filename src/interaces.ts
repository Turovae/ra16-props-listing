interface Item {
    listing_id: number,
    state: 'active' | 'removed',
    url: string,
    MainImage: { url_570xN: string },
    title: string,
    price: string,
    currency_code: string,
    quantity: number,
}

interface ListingProps {
    items?: Item[],
}

export type { Item, ListingProps };
