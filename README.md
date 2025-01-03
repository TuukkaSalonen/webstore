# Project for course Advanced Web Front-ends COMP.CS.520
A simple product web store with redux state management and React frontend.
Has register and login features. User can purchase products and view orders.

Orders are saved in a basic 'database' json file in the backend.

Admin user can view other users and modify/delete them. Admin can also add, modify and delete products. In addition, admin can view all the orders in the store.

## Running the backend/frontend
Run backend at `backend` directory with command `npm start`
The user passwords are hashed but if you want to try an admin user, email: admin@email.com and pass: 1234567890

Run frontend at `react_frontend` directory with command `npm run frontend`

## Running tests
- run `npm run test:e2e:dev` to run the end to end tests in interactive watch mode.
- run `npm run test:e2e` to run the end to end tests once in a non-interactive mode.