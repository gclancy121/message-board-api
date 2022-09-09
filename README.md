# message-board-api
A waifu collecting API that my message board will use - users must be logged in to see waifus, and they can post new ones if they are logged in. 

--- User Endpoints ---
IMPORTANT: No user data is created by default - you must create your own with the correct information. 

[GET] - /users: Get a list of all current users. 

[GET] - /users/:username: Returns all information about a specific username.

[PUT] - /users/:id: Allows a user to update their profile and returns the updated user profile. 

[POST] - /users/register: Allows a user to add their credentials to a database, allowing them to log in and access the waifus. Payload must look like this: {username: "username", password: "password"}. Will throw error messages if any part of the payload is incorrect. 

[POST] - /users/login: Allows a user to log in, responds with a token and a login message. Payload must look like this: {username: "username", password: "password"}. Will throw error messages if any part of the payload is incorrect. 

[DELETE] - /users/:id: Allows a user to delete their own account. Responds with either a 1 or a 0 - 1 if successful, 0 if unsuccessful. 

--- Waifu Endpoints ---
[GET] - /waifus: Allows users to access all waifus.

[GET] - /waifus/:name: Fetch a waifu via a specific name. Name must be in params.

[GET] - /waifus/id/:id : Fetch a waifu via specific ID. ID must be in params. 

[POST] - /waifus: Allows users to post a new waifu to the database. Payload must look like this: {waifu_name: "name", waifu_description: "description"}. Will throw error messages if any part of the payload is incorrect. 

[DELETE] - /waifus/:id: Not currently implemented. Will allow users to delete a specific waifu at a specified ID. 

--Posts Endpoints ---
None currently implemented. Will add database for that soon.

To give an example of how waifu data is stored, there are a few examples in /data/seeds/create_waifu_data. Use the generated information as a guide for how the rest of the waifus must look. 