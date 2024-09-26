import './App.css';
import Header from './components/Header/Header';
import Home from './components/Contents/Home';
import Footer from './components/Footer/Footer';
import { Routes, Route } from 'react-router-dom';
import FoodItemDetails from './components/Contents/FoodItemDetails';



function App() {

  return (
    <div className="App">

      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/main" element={<Home />} />
        <Route  path="/foodItem/details/:id" element={<FoodItemDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
