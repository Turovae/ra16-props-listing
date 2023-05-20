import Listing from './components/Listing';
import data from '../data/etsy.json';
import { Item } from './interaces';
console.log(data);

function App() {
  return (
    <>
      <Listing items={data as Item[] } />
    </>
  );
}

export default App
