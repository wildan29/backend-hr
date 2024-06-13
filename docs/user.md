# User API Spec

## Register HR Account

Endpoint : POST /api/user/register

Request Body :

```json
{
  "username": "wildan",
  "password": "apa hayo",
  "email": "wildan",
  "role": "HRD"
}
```

Response Body Success :

```json
{
  "data": {
    "message": "Account created successfully"
  }
}
```

Response Body Error :

```json
{
  "errors": "username or email already registered"
}
```

## Login HR Account

Endpoint : POST /api/user/login

Request Body :

```json
{
  "username": "wildan/email",
  "password": "apa hayo"
}
```

Response Body Success :

```json
{
  "data": {
    "token": "Account created successfully"
  }
}
```

Response Body Error :

```json
{
  "errors": "Invalid credentials. Please check your username/email and password."
}
```
