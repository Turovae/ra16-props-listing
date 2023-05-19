import Listing from './components/Listing';
import data from '../data/etsy.json';
console.log(data);

function App() {
  return (
    <>
      <Listing items={data} />
      <Listing />
    </>
  );
}

export default App
