# CustomerLabs

# Prerequisites
Node.js and npm installed on your machine.
Note: Instead of sqlite database used postgresql because faced many issue with my node.js and npm configuration everything got messed up while exploring new things few days back, need to troubleshoot with my whole system configuration. 
PostgreSQL database set up with credentials (DATABASE_NAME, DATABASE_USER, DATABASE_PASSWORD, DATABASE_HOST, DATABASE_PORT) configured in a .env file.
The server will start running on http://localhost:3000
Tested API vis Postman

# API Documentation

# Accounts

## Create Account
URL: POST /accounts
Body: JSON object containing account details (email, accountName, website).
Get Account by ID
URL: GET /accounts/:accountId
Params: accountId - ID of the account to retrieve.
## Update Account
URL: PUT /accounts/:accountId
Params: accountId - ID of the account to update.
Body: JSON object containing updated account details (email, accountName, website).
## Delete Account
URL: DELETE /accounts/:accountId
Params: accountId - ID of the account to delete.

# Destinations

## Create Destination
URL: POST /destinations
Body: JSON object containing destination details (accountId, url, method, headers).
Get Destinations by Account ID
URL: GET /accounts/:accountId/destinations
Params: accountId - ID of the account to retrieve destinations for.
## Update Destination
URL: PUT /destinations/:destinationId
Params: destinationId - ID of the destination to update.
Body: JSON object containing updated destination details (url, method, headers).
## Delete Destination
URL: DELETE /destinations/:destinationId
Params: destinationId - ID of the destination to delete.

# Data Handling
## Receive Data
URL: POST /server/incoming_data
Headers: CL-X-TOKEN - App secret token.
Body: JSON object containing data to be processed.

Any clarification kindly contact via : iammsprakash@gmail.com
