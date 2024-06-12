# User API Spec

## Register HR Account

Endpoint : POST /api/user/register

Request Body :

```json
{
  "username": "wildan",
  "password": "apa hayo",
  "email": "wildan",
  "jenis_kelamin": "LK",
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
