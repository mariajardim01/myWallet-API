# MyWallet API

## Description
MyWallet API is a RESTful service for managing user financial transactions, including deposits and withdrawals. It provides authentication, transaction history, and data security using JSON Web Tokens (JWT).

## Technologies Used
- Node.js
- Express.js
- MongoDB
- Joi (Validation)
- Bcrypt (Password hashing)
- JSON Web Token (JWT) for authentication

## Installation

Clone the repository:
```sh
git clone https://github.com/yourusername/mywallet-api.git
cd mywallet-api
```

Install dependencies:
```sh
npm install
```

## Environment Variables
Create a `.env` file in the root directory and define the following:
```env
PORT=5000
DATABASE_URL=your_mongodb_connection_string
KEY=your_secret_key
```

## Running the Server
```sh
npm start
```

## API Endpoints

### Authentication
#### Sign Up
**Endpoint:** `POST /sign-up`
**Description:** Registers a new user.

**Request Body:**
```json
{
    "name": "Maria",
    "email": "maria2@gmail.com",
    "password": "123456"
}
```
**Response:**
- `201 Created` on success
- `400 Bad Request` on invalid data

#### Sign In
**Endpoint:** `POST /sign-in`
**Description:** Authenticates a user and returns a token.

**Request Body:**
```json
{
    "email": "maria10@gmail.com",
    "password": "123456"
}
```
**Response:**
- `200 OK` with token
- `401 Unauthorized` on invalid credentials

### Transactions
#### Create Transaction
**Endpoint:** `POST /transactions`
**Description:** Creates a new transaction.

**Request Headers:**
```
Authorization: Bearer <token>
```
**Request Body:**
```json
{
    "value": 15.4,
    "description": "string",
    "type": "deposit"
}
```
**Response:**
- `201 Created` on success
- `400 Bad Request` on invalid data

#### Get Transactions
**Endpoint:** `GET /transactions`
**Description:** Retrieves user transactions.

**Request Headers:**
```
Authorization: Bearer <token>
```
**Response:**
- `200 OK` with transaction list
- `401 Unauthorized` if the token is invalid

#### Update Transaction
**Endpoint:** `PUT /transactions/{transactionId}`
**Description:** Updates a transaction.

**Request Headers:**
```
Authorization: Bearer <token>
```
**Request Body:**
```json
{
    "value": 15.4,
    "description": "string",
    "type": "deposit"
}
```
**Response:**
- `200 OK` if successful
- `400 Bad Request` if invalid data
- `403 Forbidden` if unauthorized
- `404 Not Found` if transaction doesn't exist

#### Delete Transaction
**Endpoint:** `DELETE /transactions/{transactionId}`
**Description:** Deletes a transaction.

**Request Headers:**
```
Authorization: Bearer <token>
```
**Response:**
- `204 No Content` if successful
- `403 Forbidden` if unauthorized
- `404 Not Found` if transaction doesn't exist

## Deployment
The API is deployed on Render:
[MyWallet API Deployment](https://dashboard.render.com/web/srv-cuttp5ogph6c73b6d8s0/logs)




