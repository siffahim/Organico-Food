import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';
import MyOrderCard from './MyOrderCard';

const MyOrder = () => {
    const [orders, setOrders] = useState([]);
    const { user } = useAuth();
    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    return (
        <Container>
            <h2>My Order {orders.length}</h2>
            <Row className='g-3'>
                {
                    orders.map(order => <MyOrderCard
                        key={order}
                        order={order}
                    />)
                }
            </Row>
        </Container>
    );
};

export default MyOrder;