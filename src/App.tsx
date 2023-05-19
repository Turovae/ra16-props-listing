// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css';
import Listing from './components/Listing';
import data from '../data/etsy.json';

function App() {
  return (
    <>
      <Listing items={data} />
      <Listing />
    </>
  );
}

export default App
