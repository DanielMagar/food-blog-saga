import React from 'react';
import "./Home.css";
import { Button } from 'react-bootstrap';
import FoodItemsList from './FoodItemsList';

const Home = () => {
  return (
    <div className='home'>
       <FoodItemsList/>
    </div>
  )
}

export default Home