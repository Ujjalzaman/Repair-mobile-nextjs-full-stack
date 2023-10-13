# FixMyPhone-Mobile-Repair-FullStack-with-Nextjs-Prisma-Typescipt
The "FixMyPhone" website is your one-stop destination for mobile device repairs
# FixMyPhone – Project Management

The **FixMyPhone** website is your one-stop destination for mobile device repairs. Customers can easily request repairs, book appointments, and track the progress of their fixes. The website's admin and super admin functions streamline service management, ensuring a smooth and efficient repair process.

## Customer Functionality

1. **Registration and Login:**
   - Customers should be able to create accounts and log in to access the website's features.

2. **Service Request:**
   - Customers can request repairs for their mobile devices. They provide details such as the device type, issue description, and preferred appointment time.

3. **Service Tracking:**
   - Customers can track the status of their repair requests, including updates on the repair progress and estimated completion times.

4. **Appointment Booking:**
   - Customers can schedule repair appointments, choosing from available time slots.

5. **Payment Processing:**
   - Customers can make payments for repair services online through secure payment methods.

6. **Order History:**
   - Customers can view their repair order history, including invoices and receipts.

7. **Messaging and Notifications:**
   - Customers can receive notifications about repair updates and communicate with the service team if necessary.

8. **Profile Management:**
   - Customers can update their personal information, including contact details and payment methods.

## Admin Functionality

1. **Service Request Management:**
   - Admins can view and manage repair service requests, assign them to technicians, and update the status.

2. **Appointment Scheduling:**
   - Admins can manage appointment schedules, including adding, modifying, or canceling appointments.

3. **Technician Management:**
   - Admins can manage technician schedules, assignments, and workloads.

4. **Inventory Management:**
   - Admins can keep track of spare parts and inventory for repairs.

5. **Payment Verification:**
   - Admins can verify and process payments made by customers.

6. **Customer Management:**
   - Admins can manage customer accounts, including account creation, password resets, and account deactivation.

7. **Reporting and Analytics:**
   - Admins can generate reports on repair service performance, revenue, and other key metrics.

8. **Communication:**
   - Admins can communicate with customers and technicians to provide updates, address concerns, and resolve issues.

## Super Admin Functionality

- **User Role Management:**
  - Super Admins can create, modify, or delete admin accounts and have access to all the functionality.

## API Endpoints

- **Authentication:**
  - **Login:**
    - `POST /api/auth/login`
  - **Refresh Token:**
    - `POST /api/auth/refreshToken`

- **Customer Registration:**
  - `POST /api/user/create-customer`

- **Service Request:**
  - `POST /api/service-request`

- **Service Tracking:**
  - `/api/service-request/{request_id}/status`

- **Appointment Booking:**
  - `POST /api/appointment`

- **Update Profile:**
  - `PUT /api/customer/{customer_id}/profile`

## Status Types

```python
status_types = {
    "pending": "Pending",
    "in_progress": "In Progress",
    "awaiting_parts": "Awaiting Parts",
    "on_hold": "On Hold",
    "quality_check": "Quality Check",
    "ready_for_pickup": "Ready for Pickup",
    "completed": "Completed",
    "canceled": "Canceled",
    "scheduled": "Scheduled",
    "payment_pending": "Payment Pending",
    "delayed": "Delayed",
    "closed": "Closed",
    "dispatched": "Dispatched"
}
