import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import img2 from '../../images/download.png';
import img from '../../images/Solucooaes-Bank.svg';
import CheckoutForm from './CheckoutForm';

const Payment = () => {
    const { paymentId } = useParams();
    const stripePromise = loadStripe('pk_test_51JwnGrLiLwVG3jO00U7B3YmokwdPnB6FKd1uresJgkbsL4f5xUfCmbFdBaGO42KvLmLfVzsgo1oIQToXABSTyypS00xQsEgKZ6')

    const [orderInfo, setOrderInfo] = useState({})

    useEffect(() => {
        fetch(`http://localhost:5000/orders/${paymentId}`)
            .then(res => res.json())
            .then(data => console.log(data))

    }, [paymentId])

    return (
        <div>
            <Container className='login-container py-5 mt-4'>
                <Row className='d-flex align-items-center'>
                    <Col sm={12} md={6}>
                        <img width='80%' src={img} alt="" />
                    </Col>
                    <Col sm={12} md={6}>
                        <p className='text-muted mb-2 fs-5'>Pay with</p>
                        <img src={img2} className='mb-5' alt="" />
                        <Elements stripe={stripePromise}>
                            <CheckoutForm />
                        </Elements>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Payment;