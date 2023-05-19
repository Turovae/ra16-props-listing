function getFirstFiftySymbols(txt: string): string {
  return txt.length <= 50
    ? txt
    : txt.slice(0, 50) + '...';
}

function Title(props: { title: string }) {
  return (
    <p className="item-title">{getFirstFiftySymbols(props.title)}</p>
  )
}

export default Title;
