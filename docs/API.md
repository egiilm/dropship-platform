# API Documentation

## Base URL
```
http://localhost:3001/api
```

## Authentication
All protected endpoints require a JWT token in the `Authorization` header:
```
Authorization: Bearer <token>
```

## Endpoints

### Authentication

#### Register
- **POST** `/auth/register`
- **Body**:
  ```json
  {
    "email": "user@example.com",
    "password": "secure_password",
    "name": "John Doe"
  }
  ```

#### Login
- **POST** `/auth/login`
- **Body**:
  ```json
  {
    "email": "user@example.com",
    "password": "secure_password"
  }
  ```

### Products

#### Get All Products
- **GET** `/products?page=1&limit=20&search=query`
- **Response**:
  ```json
  {
    "data": [...],
    "pagination": {
      "page": 1,
      "limit": 20,
      "total": 100,
      "pages": 5
    }
  }
  ```

#### Create Product
- **POST** `/products`
- **Body**:
  ```json
  {
    "name": "Product Name",
    "description": "Product description",
    "price": 29.99,
    "supplierId": "supplier_id",
    "images": ["url1", "url2"]
  }
  ```

#### Get Product by ID
- **GET** `/products/:id`

### Orders

#### Get All Orders
- **GET** `/orders`

#### Create Order
- **POST** `/orders`
- **Body**:
  ```json
  {
    "customerId": "customer_id",
    "items": [
      {
        "productId": "product_id",
        "quantity": 2,
        "price": 29.99
      }
    ],
    "totalAmount": 59.98,
    "status": "pending"
  }
  ```

### Suppliers

#### Get All Suppliers
- **GET** `/suppliers`

#### Create Supplier Connection
- **POST** `/suppliers`
- **Body**:
  ```json
  {
    "name": "AliExpress",
    "apiKey": "your_api_key",
    "apiUrl": "https://api.aliexpress.com",
    "type": "aliexpress"
  }
  ```

### Analytics

#### Get Dashboard Stats
- **GET** `/analytics/dashboard`
- **Response**:
  ```json
  {
    "totalOrders": 150,
    "totalRevenue": 4500.00,
    "totalCustomers": 200,
    "totalProducts": 500
  }
  ```
