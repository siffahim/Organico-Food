import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import MyOrderCard from './MyOrderCard';

const MyOrder = () => {
    const [orders, setOrders] = useState([]);
    const { user } = useAuth();
    const navigate = useNavigate();
    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user.email}`, {
            headers: {
                "authorization": `Bearer ${sessionStorage.getItem('idToken')}`
            }
        })
            .then(res => {
                if (res.status === 200) {
                    return res.json()
                }
                else if (res.status === 401) {
                    return navigate('/login')
                }
            })
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