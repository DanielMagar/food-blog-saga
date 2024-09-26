import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

const FoodItemDetails = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    // UseSelector must match the key in rootReducer
    const foodItems = useSelector((state) => state.food.foodItems);  // 'state.food.foodItems'
    const loading = useSelector((state) => state.food.loading);
    const error = useSelector((state) => state.food.error);
    const selectedItem = foodItems.length > 0 ? foodItems.find((item) => item.id === id) : [];
    console.log(selectedItem)
    console.log(foodItems)
    console.log(id, "id")
    useEffect(() => {
        dispatch({ type: 'FETCH_FOOD_REQUEST' });
    }, [dispatch]);

    const navigateBack = useNavigate()
    const handleBack = () => {
        navigateBack("/")
    }

    return (
        <div className='col-12'>
            <div className='d-flex flex-row align-items-center justify-content-center text-primary' style={{ width: "50%", marginLeft: "1%", cursor: "pointer" }} onClick={handleBack}><i class="bi bi-arrow-bar-left"></i>Back</div>
            <div className='d-flex flex-row align-items-center justify-content-center py-2'>
                <Card style={{ width: "50%" }}>
                    {loading && <p>Loading...</p>}
                    {error && <p>Error: {error}</p>}
                    <Card.Body>
                        <Badge style={{ width: "200px" }} className='mb-4'>{selectedItem?.name} details</Badge>
                        <div className='d-flex gap-4'>
                            <Card style={{ width: "50%" }}>
                                <img src={selectedItem?.imgUrl} className='p-4' />

                            </Card>
                            <Card style={{ width: "50%" }}>
                                <div className='p-4'>
                                    <ListGroup>
                                        <ListGroup.Item > <strong>Item:</strong> {selectedItem?.name}</ListGroup.Item>
                                        <ListGroup.Item><strong>Category:</strong> {selectedItem?.category}</ListGroup.Item>
                                        <ListGroup.Item><strong>Price:</strong> <i className="bi bi-currency-rupee"></i> {selectedItem?.price}</ListGroup.Item>
                                        <ListGroup.Item><strong>Ratings:</strong> 
                                            {[...Array(selectedItem?.ratings)].map((_, index) => (
                                                <i key={index} className="bi bi-star-fill ps-2" style={{ color: "orange" }}></i>
                                            ))}
                                        </ListGroup.Item>
                                    </ListGroup>
                                </div>
                            </Card>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default FoodItemDetails