'use client'

import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import makePayment from '@/app/api/makePayment/route';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string);
export default function PreviewPage() {
  React.useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get('success')) {
      console.log('Order placed! You will receive an email confirmation.');
    }

    if (query.get('canceled')) {
      console.log('Order canceled -- continue to shop around and checkout when you’re ready.');
    }
  }, []);


//   const obSubmit = async() =>{
//     const result = await makePayment(); 
//   }

  return (
    <form action="/api/makePayment" method="POST">
      <section>
        <button type="submit" role="link">
          Checkout
        </button>
      </section>
      <style jsx>
        {`
          section {
            background: #ffffff;
            display: flex;
            flex-direction: column;
            width: 400px;
            height: 112px;
            border-radius: 6px;
            justify-content: space-between;
          }
          button {
            height: 36px;
            background: #556cd6;
            border-radius: 4px;
            color: white;
            border: 0;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s ease;
            box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
          }
          button:hover {
            opacity: 0.8;
          }
        `}
      </style>
    </form>
  );
}














// import { Button, Result } from 'antd';
// const ErrorPage = () => {
//     return (
//         <div style={{ height: '60vh' }}>
//             <div className='mt-5'>
//                 <Result
//                     status="warning"
//                     title="There are some problems with your operation."
//                     extra={
//                         <Button type="primary" key="console">
//                             Go Console
//                         </Button>
//                     }
//                 />
//             </div>
//         </div>
//     )
// }

// export default ErrorPage;