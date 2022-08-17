# message-board-api
A waifu collecting API that my message board will use - users must be logged in to see waifus, and they can post new ones if they are logged in. 

--- User Endpoints ---
[POST] - /auth/register: Allows a user to add their credentials to a database, allowing them to log in and access the waifus. Payload must look like this: {username: "username", password: "password"}. Will throw error messages if any part of the payload is incorrect. 

[POST] - /auth/login: Allows a user to log in, responds with a token and a login message. Payload must look like this: {username: "username", password: "password"}. Will throw error messages if any part of the payload is incorrect. 

[DELETE] - not currently implemented, will implement a delete functionality to remove users from the database.

--- Waifu Endpoints ---
[GET] - /waifus: Allows logged in users to access all waifus. If you do not go through the login process, you will be locked out and not allowed to access.

[POST] - /waifus: Allows users to post a new waifu to the database. Payload must look like this: {waifu_name: "name", waifu_description: "description"}. Will throw error messages if any part of the payload is incorrect. 

A few waifus have been included by default. You can find their seed data in /data/seeds/create_waifu_data. 
