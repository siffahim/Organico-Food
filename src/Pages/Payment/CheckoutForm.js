import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState('');
    const [sucess, setSucess] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false);

    const price = 10;

    useEffect(() => {
        fetch('http://localhost:5000/create-payment-intent', {
            method: 'POST',
            headers: {
                "content-type": 'application/json'
            },
            body: JSON.stringify({ price })
        })
            .then(res => res.json())
            .then(data => setClientSecret(data.clientSecret))
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }

        setProcessing(true)

        //check card..................>
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            setError(error.message)
            setSucess('');
        }
        else {
            setError('');
            console.log(paymentMethod)
        }

        //confirm card payment
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: 'Jenny Rosen',
                    },
                },
            },
        );
        if (intentError) {
            setError(intentError.message)
            setSucess('');
        }
        else {
            setError('');
            console.log(paymentIntent)
            setProcessing(false)
            setSucess('Successfully payment')
        }

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    className='banking'
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                {
                    processing ? <p>Loading...</p> : <button type="submit" className='bank-btn' disabled={!stripe || sucess}>
                        Payment
                    </button>
                }
            </form>
            {
                error && <p className='mt-3' style={{ color: 'red', }}>{error}</p>
            }
            {
                sucess && <p className='mt-3' style={{ color: 'green' }}>{sucess}</p>
            }
        </div>
    );
};

export default CheckoutForm;