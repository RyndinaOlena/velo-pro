import './App.css';
import Header from './components/header';
import Catalog from './components/catalog';
import Hero from './components/hero';
import Description from './components/description/description';
import BestVelo from './components/best-item';
import MountainBikes from './components/mountain-bikes';
import Advantages from './components/advantages';
import Equipment from './components/equipment';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Catalog />
      <Description />
      <BestVelo />
      <MountainBikes />
      <Advantages />
      <Equipment />
    </>
  );
}

export default App;
