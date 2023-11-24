Node.js Express MongoDB Template
A minimal Node.js template using Express and MongoDB with Mongoose.

Setup
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/your-node-project.git
Install dependencies:

bash
Copy code
npm install
Create a .env file in the config folder:

env
Copy code
PORT=5000
MONGO_URI=mongodb://localhost:27017/your-database
Replace your-database with your MongoDB database name.

Usage
Start the server:

bash
Copy code
node server.js
Routes:

GET: http://localhost:5000/api/users
POST: http://localhost:5000/api/users
PUT: http://localhost:5000/api/users/:id
DELETE: http://localhost:5000/api/users/:id
Testing
Use Postman to test the routes.

Dependencies
dotenv
Express.js
Mongoose
References
req.params & req.query
REST API Tutorial
