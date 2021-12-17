import React from 'react';
import { Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const MyOrderCard = ({ order }) => {
    const { img, price, _id } = order;
    const navigate = useNavigate();

    const handlePayment = () => {
        navigate(`/payment/${_id}`)
    }

    return (
        <Col sm={3}>
            <div className='order-card'>
                <div>
                    <img width='100%' height='160px' src={img} alt="" />
                </div>
                <div className='d-flex align-items-center justify-content-between'>
                    {/* <h2>{name}</h2> */}
                    <h3>${price}</h3>
                    <div>
                        {
                            order.payment ? 'Paid' : <button onClick={() => handlePayment(_id)}>Payment</button>
                        }
                        <button>Delete</button>
                    </div>
                </div>
            </div>
        </Col>
    );
};

export default MyOrderCard;