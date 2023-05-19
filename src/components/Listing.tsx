import Offer from "./Offer";

/**
 * Не могу разобраться с типизацией
 * компонент Listing принимает массив объектов, в которых присутсвуют два вида
 * наборов данных:
 * 
 * 1.
 * listing_id: number,
 * state: string,
 * ...
 * state может принимать два вида, это 'removed' в таком случае больше данных нет
 *   'active' в таком случае есть данные, которые нужно передавать в компонент Offer
 * если с условием создания пропуска создания компонента проблем нет, то типизация,
 * выполняемая мной приводит к ошибкам потому как в таком виде если некоторые поля сделать
 * для Listing опциональными, то компилятор требует сделать их опциональными и для
 * Offer, что вроде не является правильным. В общем, с точки зрения логики компоненты работают
 * нормально, а вот типизировать правильно у меня не получается.
 */

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
