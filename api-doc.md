# Test Protergo API Documentation

### Deployed server

- Server: https://practical.test-protergo.tech

You can continue with account below this :

_Role Admin_

- email : admin@mail.com
- password : password

_Role User_

- email : user@mail.com
- password : password

&nbsp;

## Models :

_User_

```
- email : string, required, unique, email
- password : string, required
- role : string, required
```

_Item_

```
- name : string, required
- quantity : integer, required
- description : string, required
```

## Endpoints :

List of available endpoints:

- `POST /login`

Routes below need authentication:

- `GET /users`
- `GET /items`
- `GET /items/:id`

Routes below need authentication & authorization:

- `POST /register`
- `POST /items/add`
- `PUT /items/:id`
- `DELETE /items/:id`

&nbsp;

## 1. POST /login

Request:

- body:

```json
{
  "email": "string",
  "password": "string"
}
```

_Response (200 - OK)_

```json
{
  "access_token": "string"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Email is required"
}
OR
{
  "message": "Password is required"
}
```

_Response (401 - Unauthorized)_

```json
{
  "message": "Invalid Email/Password"
}
```

&nbsp;

## 2. GET /users

Description:

- Get all user from database

Request:

- headers:

```json
{
  "access_token": "string"
}
```

_Response (200 - OK)_

```json
{
    "users": [
        {
            "id": 1,
            "email": "admin@mail.com",
            "password": "$2a$10$KwUhqtnN4k5apEEcXAiODeiqR5pbiI4YKwNGk8yT0KkzSMZGnBcJO",
            "role": "admin",
            "createdAt": "2023-03-15T14:33:11.508Z",
            "updatedAt": "2023-03-15T14:33:11.508Z"
        },
        {
            "id": 2,
            "email": "user@mail.com",
            "password": "$2a$10$GjPO.kb9iFIXYNXGbHL.Pu8UaKIgvw5Xoe8KiPWN8o1JvT4C7nvWa",
            "role": "user",
            "createdAt": "2023-03-15T14:33:11.575Z",
            "updatedAt": "2023-03-15T14:33:11.575Z"
        },
        ...
    ]
}
```

&nbsp;

## 3. GET /items

Description:

- Get all item from database

Request:

- headers:

```json
{
  "access_token": "string"
}
```

_Response (200 - OK)_

```json
{
    "items": [
        {
            "id": 2,
            "name": "Shoes",
            "description": "This shoes is made by the best iron in the world. Heat Guarantee",
            "quantity": 10,
            "createdAt": "2023-03-15T14:33:11.575Z",
            "updatedAt": "2023-03-15T14:33:11.575Z"
        },
        {
            "id": 3,
            "name": "Sock",
            "description": "This sock is made by the best wire in the world. Crease Guarantee",
            "quantity": 10,
            "createdAt": "2023-03-15T14:33:11.575Z",
            "updatedAt": "2023-03-16T12:21:11.745Z"
        }
        ...
    ]
}
```

&nbsp;

## 4. GET /items/:id

Description:

- Get item with id from database

Request:

- headers:

```json
{
  "access_token": "string"
}
```

- params:

```json
{
  "id": "integer"
}
```

_Response (200 - OK)_

```json
{
  "item": {
    "id": 1,
    "name": "Sandal",
    "description": "This sandal is made by the best fiber optic in the world. Shatter Guarantee",
    "quantity": 3,
    "createdAt": "2023-03-15T14:33:11.575Z",
    "updatedAt": "2023-03-16T13:42:38.858Z"
  }
}
```

_Response (404 - Not Found)_

```json
{
  "message": "Item not found"
}
```

&nbsp;

## 5. POST /register

Request:

- body:

```json
{
  "email": "string",
  "role": "string",
  "password": "string"
}
```

_Response (201 - Created)_

```json
{
  "message": "Success create User with id (number)"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Email is required"
}
OR
{
  "message": "Invalid email format"
}
OR
{
  "message": "Email must be unique"
}
OR
{
  "message": "Password is required"
}
OR
{
  "message": "Role is required"
}
```

&nbsp;

## 6. POST /items/add

Description:

- Add item to database

Request:

- headers:

```json
{
  "access_token": "string"
}
```

_Response (201 - Created)_

```json
{
  "message": "Success add item with name (string)"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Name is required"
}
OR
{
  "message": "Quantity is required"
}
OR
{
  "message": "Description is required"
}
```

&nbsp;

## 7. PUT /items/:id

Description:

- Put item from database

Request:

- headers:

```json
{
  "access_token": "string"
}
```

- params:

```json
{
  "id": "integer"
}
```

_Response (200 - OK)_

```json
{
  "message": "Success update item with id (number)"
}
```

&nbsp;

## 8. DELETE /items/:id

Description:

- Delete item from database

Request:

- headers:

```json
{
  "access_token": "string"
}
```

- params:

```json
{
  "id": "integer"
}
```

_Response (200 - OK)_

```json
{
  "message": "Success destory item with id (number)"
}
```

_Response (404 - Not Found)_

```json
{
  "message": "Item not found"
}
```

&nbsp;

## Global Error

_Response (401 - Unauthorized)_

```json
{
  "message": "Invalid token"
}
```

_Response (403 - Forbidden)_

```json
{
  "message": "Unauthorized Role"
}
```

_Response (500 - Internal Server Error)_

```json
{
  "message": "Internal server error"
}
```
