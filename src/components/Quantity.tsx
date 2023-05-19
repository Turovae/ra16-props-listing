function changeClass(quantity: number): string {
  const base = 'item-quantity';
  const low = 'level-low';
  const medium = 'level-medium';
  const high = 'level-high';
  
  if (quantity <= 10) {
    return base + ' ' + low;
  }

  if (quantity <= 20) {
    return base + ' ' + medium;
  }

  return base + ' ' + high;
}

function Quantity(props: { quantity: number }) {
  const { quantity } = props;
  return (
    <p className={changeClass(quantity)}>{quantity}</p>
  );
}

export default Quantity;
