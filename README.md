Node.js Express MongoDB Template
A minimal Node.js template using Express and MongoDB with Mongoose.



npm install
Create a .env file in the config folder:

env
Copy code
PORT=5000
MONGO_URI=mongodb://localhost:27017/your-database
Replace your-database with your MongoDB database name.

Usage
Start the server:

Routes:

GET: http://localhost:5000/api/
POST: http://localhost:5000/api/POST
PUT: http://localhost:5000/api/UPDATE/:id
DELETE: http://localhost:5000/api/DELETE/:id
Testing
Use Postman to test the routes.

Dependencies
dotenv
Express.js
Mongoose
References
req.params & req.query
REST API 
