interface offerProps {
  // props: object,
  item: object;
}

function Offer(props: offerProps) {
  console.log(props);

  return (
    <>
      <h4>I am offer</h4>
    </>
  );

}

export default Offer;
