import { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import React from "react";
import { Button, Card, Container, Form, Row } from "react-bootstrap";
import FetchCheckoutForm from "../hooks/fetchCheckoutForm";
import Heading from "./Heading";

const CheckoutForm = ({ totalPrice, onSuccessfulCheckout }) => {
	const [isProcessing, setProcessingTo] = useState(false);
	const [checkoutError, setCheckoutError] = useState();

	const stripe = useStripe();
	const elements = useElements();

	const handleCardDetailsChange = (ev) => {
		ev.error ? setCheckoutError(ev.error.message) : setCheckoutError();
	};

	const handleFormSubmit = async (ev) => {
		ev.preventDefault();

		const billingDetails = {
			name: ev.target.name.value,
			email: ev.target.email.value,
			address: {
				city: ev.target.city.value,
				line1: ev.target.address.value,
				state: ev.target.state.value,
				postal_code: ev.target.zip.value,
			},
		};

		setProcessingTo(true);

		const cardElement = elements.getElement("card");

		try {
			const { data: clientSecret } = await axios.post("/api/payment_intents", {
				amount: totalPrice * 100,
			});

			const paymentMethodReq = await stripe.createPaymentMethod({
				type: "card",
				card: cardElement,
				billing_details: billingDetails,
			});

			if (paymentMethodReq.error) {
				setCheckoutError(paymentMethodReq.error.message);
				setProcessingTo(false);
				return;
			}

			const { error } = await stripe.confirmCardPayment(clientSecret, {
				payment_method: paymentMethodReq.paymentMethod.id,
			});

			if (error) {
				setCheckoutError(error.message);
				setProcessingTo(false);
				return;
			}

			onSuccessfulCheckout();
		} catch (err) {
			setCheckoutError(err.message);
		}
	};

	const cardElementOpts = {
		iconStyle: "solid",
		// style: iframeStyles,
		hidePostalCode: true,
	};

	return (
		<>
			<Heading title="Checkout" />
			<Container>
				<Form onSubmit={handleFormSubmit}>
					<Card>
						<Card.Body>
							<FetchCheckoutForm />
							<Row>
								<CardElement
									options={cardElementOpts}
									onChange={handleCardDetailsChange}
								/>
							</Row>
							<Row>
								<Button disabled={isProcessing || !stripe}>
									{isProcessing ? "Processing..." : `Pay R$ ${totalPrice}`}
								</Button>
							</Row>
						</Card.Body>
					</Card>
				</Form>
			</Container>
		</>
	);
};

export default CheckoutForm;
