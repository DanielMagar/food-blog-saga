import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import { Link } from 'react-router-dom';
const FoodItemsList = () => {
  const dispatch = useDispatch();

  // UseSelector must match the key in rootReducer
  const foodItems = useSelector((state) => state.food.foodItems);  // 'state.food.foodItems'
  const loading = useSelector((state) => state.food.loading);
  const error = useSelector((state) => state.food.error);

  useEffect(() => {
    dispatch({ type: 'FETCH_FOOD_REQUEST' });
  }, [dispatch]);

  return (
    <div className='FoodItemsList d-flex flex-row align-items-center justify-content-center pt-3'>
      <Card style={{width: "50%"}}> 
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {foodItems && (
          <Card.Body>
            <Badge  style={{width: "200px"}} className='mb-2'>Food Items</Badge>
          <ListGroup>
            {foodItems.map((food) => (
              <ListGroup.Item style={{cursor: "pointer"}}>
                <Link to={`/foodItem/details/${food.id}`}>{food.name}</Link>
                </ListGroup.Item>
            ))}
          </ListGroup>
          </Card.Body>

        )}

    </Card>
    </div>
  )
}

export default FoodItemsList