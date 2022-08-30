# message-board-api
A waifu collecting API that my message board will use - users must be logged in to see waifus, and they can post new ones if they are logged in. 

--- User Endpoints ---
IMPORTANT: No user data is created by default - you must create your own with the correct information. 

[GET] - /auth: Get a list of all current users. 

[GET] - /auth/:username: Returns all information about a specific username.

[POST] - /auth/register: Allows a user to add their credentials to a database, allowing them to log in and access the waifus. Payload must look like this: {username: "username", password: "password"}. Will throw error messages if any part of the payload is incorrect. 

[POST] - /auth/login: Allows a user to log in, responds with a token and a login message. Payload must look like this: {username: "username", password: "password"}. Will throw error messages if any part of the payload is incorrect. 

[DELETE] - /auth/:id: Allows a user to delete their own account. Responds with either a 1 or a 0 - 1 if successful, 0 if unsuccessful. 

--- Waifu Endpoints ---
[GET] - /waifus: Allows users to access all waifus. 

[GET] - /waifus/:id : Fetch a waifu via specific ID.

[POST] - /waifus: Allows users to post a new waifu to the database. Payload must look like this: {waifu_name: "name", waifu_description: "description"}. Will throw error messages if any part of the payload is incorrect. 

[DELETE] - /waifus/:id: Not currently implemented. Will allow users to delete a specific waifu at a specified ID. 

--Posts Endpoints ---
None currently implemented. Will add database for that soon.

A few waifus have been included by default. You can find their seed data in /data/seeds/create_waifu_data. 
