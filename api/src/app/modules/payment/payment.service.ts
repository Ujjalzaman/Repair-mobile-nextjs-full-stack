import config from "../../../config";

const stripe = require('stripe')(config.stripe.publishableKey);

interface IProps  {
    description?: string,
    images?: string,
    name?: string,
    price: number
}

const createPayment = async (user: any, data:IProps): Promise<any> => {
    const { email } = user;

    const product = await stripe.products.create({
        name: data.name,
        description: data.description,
        images: [data.images],
    });

    const priceObject = await stripe.prices.create({
        unit_amount: data.price * 100,
        currency: 'usd',
        product: product.id,
    });

    const result = await stripe.checkout.sessions.create({
        line_items: [
            {
                price: priceObject.id,
                quantity: 1
            }
        ],
        customer_email: email,
        mode: 'payment',
        success_url: `http://localhost:3000/payment/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `http://localhost:3000/payment/error`,
    });
 
    return result
}

const getSuccessPayment = async (data: any): Promise<any> => {
    const { sessionId } = data;
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    return session;
}

export const PaymentService = {
    createPayment,
    getSuccessPayment
}