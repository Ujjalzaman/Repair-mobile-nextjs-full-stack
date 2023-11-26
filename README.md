# Next.js Project with Node.js and Express Backend

Welcome to our Next.js project with a Node.js and Express backend! This project aims to provide a comprehensive solution for managing mobile device repairs. Users can register, request services, track their repairs, make payments, and more. Admins have tools to efficiently manage service requests, appointments, technicians, inventory, and customer accounts.


## Getting Started

### 1. Clone the repository:

```bash
git clone https://github.com/Ujjalzaman/FixMyPhone-Mobile-Repair-FullStack-with-Nextjs-Prisma-Typescipt.git
```

### 2. Install Frontend Dependencies:
```bash
cd client
npm install
```
Setup environment for the frontend:
Under the src/app folder, create an env.local file.

Set the following credentials in the env.local file:

```bash
NEXT_PUBLIC_API_BASE_URL=http://localhost:3030/api/v1  # Replace with your backend link
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_5454747d54  # Replace with your Stripe publishable key for the payment gateway
STRIPE_SECRET_KEY=sk_test_656565  # Replace with your Stripe secret key
```

### 3. Install Backend Dependencies:
```bash
cd api
npm install
```
Setup environment for the backend:
Create a .env file in the api directory.

Set the following credentials in the .env file:

```bash
DATABASE_PROD_URL=database url
NODE_ENV='development'
PORT=5051
JWT_SECRET=secret key
JWT_EXPIRED_IN=30d
JWT_REFRESH_SECRET=refresh token
JWT_SECRET_SALT_ROUND=10

# Cloudinary
CLOUD_NAME=dg8dkpulv
API_KEY=454831555123244
API_SECRET=t7UWrk_ZpfWm1rGsGskWyn2TDJI
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=stripe publishable key
STRIPE_SECRET_KEY=stripe secret key
```

### 4. Ready to Go:
You're all set! Happy coding. 🚀


## Features

### Customer Features

1. **Registration and Login:**
   - Customers can create accounts and log in to access the website's features.

2. **Service Request:**
   - Users can request repairs for their mobile devices, providing details such as device type, issue description, and preferred appointment time.

3. **Service Tracking:**
   - Track the status of repair requests, including updates on progress and estimated completion times.

4. **Appointment Booking:**
   - Schedule repair appointments, choosing from available time slots.

5. **Payment Processing:**
   - Make secure online payments for repair services.

6. **Order History:**
   - View repair order history, including invoices and receipts.

7. **Messaging and Notifications:**
   - Receive notifications about repair updates and communicate with the service team.

8. **Profile Management:**
   - Update personal information, including contact details and payment methods.

### Admin Functionality

1. **Service Request Management:**
   - View and manage repair service requests, assign them to technicians, and update the status.

2. **Appointment Scheduling:**
   - Manage appointment schedules, including adding, modifying, or canceling appointments.

3. **Technician Management:**
   - Manage technician schedules, assignments, and workloads.

4. **Inventory Management:**
   - Keep track of spare parts and inventory for repairs.

5. **Payment Verification:**
   - Verify and process payments made by customers.

6. **Customer Management:**
   - Manage customer accounts, including account creation, password resets, and deactivation.

7. **Reporting and Analytics:**
   - Generate reports on repair service performance, revenue, and other key metrics.

8. **Communication:**
   - Communicate with customers and technicians to provide updates, address concerns, and resolve issues.

### Super Admin Functionality

1. **User Role Management:**
   - Super Admins can create, modify, or delete admin accounts and have access to all functionality.








