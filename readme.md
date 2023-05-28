# College Fee Payment Server 📚 💰

This is the backend server for a college fee payment system. The server handles payment processing, user authentication, and announcement data retrieval.

## Technologies Used 💻

- Express
- Mongoose
- JWT (JSON Web Tokens)
- Bcrypt
- Stripe

## Getting Started 🚀

First, install required dependencies with `npm install` command.

Then, to start the server, run `node server.js` in the terminal.

The server will be listening on port 4000.

## Server Endpoints 🌐

### Authentication Endpoints

| Method | Endpoint    | Description                              | Params                        |
| ------ | ----------- | ---------------------------------------- | ----------------------------- |
| POST   | /adminpage  | Create a new user account                | fname, lname, email, password |
| POST   | /login-user | Login with an existing account           | email, password               |
| POST   | /userdata   | Retrieve user details based on JWT token | token                         |

### Stripe Payment Endpoint

| Method | Endpoint  | Description                                               | Params |
| ------ | --------- | --------------------------------------------------------- | ------ |
| POST   | /checkout | Create a new Stripe payment session for items in the cart | items  |

### Announcements Data Endpoint

| Method | Endpoint | Description                     | Params |
| ------ | -------- | ------------------------------- | ------ |
| POST   | /anndata | Retrieve all announcements data | none   |

## Code Overview 📝

```javascript
// Required dependencies
const express = require('express')
const mongoose = require('mongoose')
var cors = require('cors')
const stripe = require('stripe')('sk_test_51MrzASSAYLrAqiBDunzidLbjPsRp06Uzb6v4kkwDeIG3UzOiKsEKe2Vtud1tPTXZsy4oYXAQzza3uAd7EXROzc5U00XpqowSZ2')
const app = express()

// Express middlewares
app.use(cors())
app.use(express.static("public"))
app.use(express.json())

// Stripe Checkout API endpoint
app.post("/checkout", async (req, res) => {})

// Required user details model
require('./userDetails')
const User = mongoose.model('users')

// Connect to MongoDB
mongoose.connect(mongoUrl, { useNewUrlParser: true, })
.then(() => { console.log('Success') })
.catch((e) => console.log(e))

// Authentication endpoints
app.post('/adminpage', async (req, res) => {})
app.post('/login-user', async (req, res) => {})
app.post('/userdata', async (req, res) => {})

// Announcements schema and model
const announcementSchema = new mongoose.Schema({
subject: 'string',
type: 'string',
date: Date,
})

const Announcement = mongoose.model('announcements', announcementSchema)

// Announcement endpoint
app.post('/anndata', async (req, res) => {})

// Start the server
app.listen(4000, () => console.log("Listening on port 4000"))
```

### Note 📌

- Replace `mongoUrl` with your own MongoDB connection URL.
- Replace the `JWT_SECRET` with your own secret key for JWT authentication.




# PaymentCard 🛒

The `PaymentCard` component is a part of an e-commerce application that handles the display and functionality related to adding, updating, or removing products from the cart.

## Code Overview 📚

The component imports necessary libraries and components:

```javascript
import React from 'react'
import { Card, Button, Form, Row, Col } from 'react-bootstrap'
import CartProvider, { CartContext } from '../PaymentContext'
import { useContext } from 'react'
import { MdOutlineRestaurant } from "react-icons/md";
import { FaBus } from 'react-icons/fa'
import './paymentcard.css'
```

### How It Works ⚙️

1. **`PaymentCard` Function**: The main function that takes the `props` as its argument.
2. **`product`**: The product object is extracted from the passed `props`.
3. **`CartContext`**: The `CartContext` is imported from the `PaymentContext` file and is used to manage the cart.
4. **`ProductQuantity`**: The current quantity of the product in the cart is fetched using the `getProductQuantity` function from the `CartContext`.

Depending on the product title, the component conditionally renders the payment card with different styles and icons.

#### College Fee 🎓

- The card background color will be `#6fc0d1`
- The icon used will be a pencil (`<i className='far fa-edit' aria-hidden="true"></i>`)

#### Mess Fee 🍽️

- The card background color will be `#7dc691`
- The icon used will be a restaurant symbol from the `react-icons` library (`<MdOutlineRestaurant />`)

#### Transport Fee 🚌

- The card background color will be `#d98e64`
- The icon used will be a bus symbol from the `react-icons` library (`<FaBus />`)

### Product Actions 🎬

The component provides the following actions based on the product quantity in the cart:

- *Add To Cart*: Adds one product to the cart.
- *Increment Quantity*: Adds one to the product quantity in the cart.
- *Decrement Quantity*: Removes one from the product quantity in the cart.
- *Remove From Cart*: Deletes the product from the cart completely.

These actions are handled through various functions from the `CartContext`.

## Functions 🧮

| Function Name               | Description                                                      |
| --------------------------- | ---------------------------------------------------------------- |
| `cart.getProductQuantity` | Fetches the quantity of a product in the cart by the product ID. |
| `cart.addOneToCart`       | Adds one item to the cart by the product ID.                     |
| `cart.removeOneFromCart`  | Removes one item from the cart by the product ID.                |
| `cart.deleteFromCart`     | Deletes a product from the cart by the product ID.               |

## Styles 💄

All the styles for this component are maintained in the `paymentcard.css` file.

## Export 🚢

The `PaymentCard` component is exported as the default export:

```javascript
export default PaymentCard
```





# User Details 📝

`userDetails.js` is a file containing the Mongoose schema for storing user details. The schema includes multiple fields like the user's first name, last name, email, password, and other related informations.

## Schema Definition 🚀

The `UserDetailSchema` is defined using `mongoose.Schema`. It contains the following fields:

| Field    | Type   | Description                  | Unique |
| -------- | ------ | ---------------------------- | ------ |
| fname    | String | First Name of the User       | -      |
| lname    | String | Last Name of the User        | -      |
| email    | String | Email Address of the User    | ✅     |
| password | String | Password of the User         | -      |
| address  | String | Address of the User          | -      |
| att_c1   | Number | Attendance Attribute 1       | -      |
| att_c2   | Number | Attendance Attribute 2       | -      |
| att_c3   | Number | Attendance Attribute 3       | -      |
| fnam     | String | Father's Name of the User    | -      |
| fnum     | String | Father's Contact Number      | -      |
| git      | String | GitHub profile of the User   | -      |
| link     | String | LinkedIn profile of the User | -      |
| mnam     | String | Mother's Name of the User    | -      |
| mnum     | String | Mother's Contact Number      | -      |
| sem1     | Number | Semester 1 Marks             | -      |
| sem2     | Number | Semester 2 Marks             | -      |
| sem3     | Number | Semester 3 Marks             | -      |
| sem4     | Number | Semester 4 Marks             | -      |
| sem5     | Number | Semester 5 Marks             | -      |
| image    | String | Profile Image of the User    | -      |
| Phone    | String | Contact Number of the User   | -      |

The schema is then attached to the `users` collection.

```javascript
const UserDetailSchema = new mongoose.Schema({
// schema fields definition
}, { collection: 'users' })
```

Finally, the schema is registered as a Mongoose model named `"users"`.

```javascript
mongoose.model("users", UserDetailSchema)
```

## Example Usage 💡

Here's how you can use the `UserDetailSchema` with Mongoose:

```javascript
const mongoose = require('mongoose');
const UserDetails = mongoose.model('users');

const newUser = new UserDetails({
fname: 'John',
lname: 'Doe',
email: 'john.doe@email.com',
password: 'mysecurepassword',
address: '123 Main St',
// ... Other fields
});

newUser.save((err) => {
if (err) {
console.log('Error saving user:', err);
} else {
console.log('User saved successfully');
}
});
```






# 📚 PaymentContext.js Documentation

This code implements a React context for managing the cart state in a shopping application. The context provides essential functionalities such as adding and removing products, calculating the total cost, and more.

## 🏗️ Structure

The code is structured as follows:

1. Import necessary dependencies from React.
2. Define and export the `CartContext`.
3. Define and export the `CartProvider` component.
4. Implement cart management functions in the `CartProvider` component.

## 📌 CartContext

The `CartContext` object is created using `createContext()`. The context object contains the following properties and methods:

| Property / Method  | Type     | Description                           |
| ------------------ | -------- | ------------------------------------- |
| items              | Array    | List of cart products                 |
| getProductQuantity | Function | Get the quantity of a product in cart |
| addOneToCart       | Function | Add one product to the cart           |
| removeOneFromCart  | Function | Remove one product from cart          |
| deleteFromCart     | Function | Delete a product from cart            |
| getTotalCost       | Function | Calculate the total cost of the cart  |

## 🛒 CartProvider Component

The `CartProvider` component is a wrapper component that provides the cart context to its children. It defines the cart state and implements the cart management functions.

### State

The `CartProvider` component uses the `useState()` hook to manage its state. The state is an array of cart products, each containing an `id` and `quantity`.

```jsx
const [CartProducts, setCartProducts] = useState([])
```

### Functions

#### getProductQuantity(id)

This function takes a product `id` as its parameter and returns the quantity of that product in the cart.

```jsx
function getProductQuantity(id) {
const quantity = CartProducts.find(product => product.id === id)?.quantity
if (quantity === undefined) {
return 0
}
return quantity
}
```

#### addOneToCart(id)

This function accepts a product `id` as its parameter and adds one quantity of that product to the cart.

```jsx
function addOneToCart(id) {
const quantity = getProductQuantity(id)
if(quantity === 0){
setCartProducts([ ...CartProducts, { id:id, quantity: 1 } ])
} else {
setCartProducts(
CartProducts.map(
product => product.id === id ? {...product,quantity: product.quantity + 1 }:product
)
)
}
}
```

#### deleteFromCart(id)

This function takes a product `id` as its parameter and deletes that product from the cart.

```jsx
function deleteFromCart(id){
setCartProducts(
CartProducts => CartProducts.filter(currentProduct=>{
return currentProduct.id != id;
})
)
}
```

#### removeOneFromCart(id)

This function accepts a product `id` as its parameter and removes one quantity of that product from the cart.

```jsx
function removeOneFromCart(id){
const quantity = getProductQuantity(id)
if(quantity == 1){
deleteFromCart(id)
} else {
setCartProducts(
CartProducts.map(
product => product.id === id ? {...product,quantity: product.quantity - 1 }:product
)
)
}
}
```

#### getTotalCost()

This function calculates and returns the total cost of the cart.

```jsx
function getTotalCost(){
let totalCost = 0
CartProducts.map((cartItem) => {
const productData = getProductData(cartItem.id)
totalCost += (productData.price * cartItem.quantity)
})
return totalCost
}
```

### Context Value

The context value object contains the cart state and cart management functions.

```jsx
const contextValue = {
items: CartProducts,
getProductQuantity,
addOneToCart,
removeOneFromCart,
deleteFromCart,
getTotalCost
}
```

### Provider

The `CartProvider` component returns a `CartContext.Provider` component, passing the context value object and rendering its children.

```jsx
return (
<CartContext.Provider value={contextValue}>
{children}
</CartContext.Provider>
)
```

## ⚡ Usage

To manage the cart state and utilize the cart management functions, wrap your components with the `CartProvider` component and use the `CartContext` to access the cart state and functions.

**Example:**

```jsx
import CartProvider, { CartContext } from './PaymentContext'

function App() {
return (
<CartProvider>
{/* Your components go here */}
</CartProvider>
)
}

// Access cart state and functions in your components
function ShoppingCart() {
const { items, addOneToCart, getTotalCost } = useContext(CartContext)
// ...
}
```






# 📚 ed.js

This file contains the code for a Node.js application using the Express.js framework. The purpose of this application is to manage and update user information stored in a MongoDB database.

## 📦 Dependencies

- **express**: A fast, unopinionated, minimalist web framework for Node.js.
- **mongoose**: A popular Object Data Modeling (ODM) library for MongoDB.
- **cors**: Middleware that provides a Connect/Express middleware to enable Cross-Origin Resource Sharing (CORS).
- **stripe**: A library for Stripe's API.
- **jsonwebtoken**: A library to handle JSON Web Tokens.
- **bcryptjs**: A library to hash and verify passwords.

## 🌐 API Endpoints

### POST `/getedit`

- Request body: `{ token }`
- Decrypts the JSON Web Token to get the user email.
- Fetches the user document from the MongoDB database.
- Response: `{ status: "ok", data: data }`

### GET `/user`

- No request body required.
- Fetches the user document with the provided email from the MongoDB database.
- Response: The user document, or an error message if the user is not found.

### POST `/register`

- Request body: The fields to update (address, fname, lname, etc.).
- Updates the user document in the MongoDB database.
- Response: The updated user document, or an error message if the user is not found.

## 🗄️ Database

A MongoDB database is used to store user information. The connection string is defined as `mongoUrl`. The user schema is defined as follows:

| Key     | Value type |
| ------- | ---------- |
| email   | String     |
| address | String     |
| fname   | String     |
| lname   | String     |
| att_c1  | String     |
| att_c2  | String     |
| att_c3  | String     |
| fnam    | String     |
| fnum    | String     |
| git     | String     |
| link    | String     |
| mnam    | String     |
| mnum    | String     |
| sem1    | String     |
| sem2    | String     |
| sem3    | String     |
| sem4    | String     |
| sem5    | String     |
| image   | String     |
| Phone   | String     |

## 🚀 Starting the Server

The server listens on port 8000.

```javascript
app.listen(8000, () => {
console.log('App listening at port 8000');
});
```

## 🌟 Key Takeaways

- User information is managed by a back-end application built with Express.js and MongoDB.
- User information can be fetched and updated through API endpoints.
- The code includes several dependencies for handling CORS, JSON Web Tokens, and password management.






# flask/app.py Documentation

This is a **Flask** application that uses a **MongoDB** database to store quiz questions and user marks. The application has several endpoints to handle various functions, such as fetching quiz questions, updating user marks, and creating the database with sample quiz data.

## Requirements 📦

- Flask
- Flask-CORS
- PyMongo

## Database Connection 🌐

The `get_database` function connects to the MongoDB database.

```python
def get_database():
CONNECTION_STRING = 'mongodb+srv://se_tech:se12345@se.wawkg12.mongodb.net/?retryWrites=true&w=majority'
client = MongoClient(CONNECTION_STRING)
return client['stud_info']
```

The `get_update_database` function connects to a different MongoDB database where user marks are stored.

```python
def get_update_database():
CONNECTION_STRING = 'mongodb+srv://se_tech:se12345@se.wawkg12.mongodb.net/exp?retryWrites=true&w=majority'
client = MongoClient(CONNECTION_STRING)
return client['exp']
```

## Endpoints 🚀

### /data

This endpoint allows the client to fetch quiz questions based on a provided `course_id`.

HTTP Methods: `GET`, `POST`

#### Parameters

| Parameter | Description                                 |
| --------- | ------------------------------------------- |
| course_id | The ID of the course to fetch questions for |

#### Example

```http
GET /data?course_id=19CSE305
```

#### Response

```json
[
{
"course_id": "19CSE305",
"question": "What is the capital of France?",
"answers": [
{
"text": "Paris",
"correct": true
},
{
"text": "Berlin",
"correct": false
},
{
"text": "London",
"correct": false
},
{
"text": "Madrid",
"correct": false
}
]
},
...
]
```

### /addItem

This endpoint allows the client to add a new quiz question along with its answers and the correct option.

HTTP Methods: `GET`, `POST`

#### Parameters

| Parameter | Description                           |
| --------- | ------------------------------------- |
| course_id | The ID of the course                  |
| question  | The quiz question                     |
| answer1   | First answer option                   |
| answer2   | Second answer option                  |
| answer3   | Third answer option                   |
| answer4   | Fourth answer option                  |
| correct   | The index of the correct answer (1-4) |

#### Example

```http
POST /addItem?course_id=19CSE305&question=New%20Question&answer1=A&answer2=B&answer3=C&answer4=D&correct=2
```

#### Response

```
success
```

### /course_ids

This endpoint fetches the distinct `course_id`s stored in the database.

HTTP Methods: `GET`, `POST`

#### Example

```http
GET /course_ids
```

#### Response

```json
[
"19CSE303",
"19CSE304",
"19CSE305"
]
```

### /updateMarks

This endpoint updates the user's marks for a particular course.

HTTP Methods: `GET`, `POST`

#### Parameters

| Parameter | Description           |
| --------- | --------------------- |
| name      | The email of the user |
| marks     | The marks of the user |
| cid       | The course ID         |

#### Example

```http
POST /updateMarks?name=myemail@example.com&marks=90&cid=19CSE304
```

#### Response

```
Marks updated successfully
```

### /create

This endpoint initializes the database with sample quiz data.

HTTP Methods: `GET`, `POST`

#### Example

```http
GET /create
```

#### Response

```
Created DB
```

## Running the Application 🏃‍♂️

Execute the following command to run the application:

```bash
python app.py
```

This will start the application on `localhost` with port `5000`.





# MainLayout.js 📁

`MainLayout` is a functional React component that serves as the main layout for your application. It consists of the `Sidebar` component and a `children` prop to render the content passed to it.

## Components 🧩

Here are the components used in the `MainLayout` component:

1. **Sidebar**: This component is imported from '../Components/Sidebar' and is responsible for rendering the sidebar.

## Functionality 🚀

The component accepts a `children` prop which renders the content passed to the `MainLayout` component.

```javascript
function MainLayout({ children }) {
...
}
```

## Rendered JSX 📝

The `MainLayout` component returns the following JSX structure:

```jsx
<div>
{/* <Header/> */}
<Sidebar />
<div>{children}</div>
</div>
```

- A `div` element wrapping the entire layout.
- A `Sidebar` component.
- A `div` element to render the `children` prop.

## Export 🌐

The `MainLayout` component is exported as default:

```javascript
export default MainLayout;
```

## Usage Example 📚

Here's an example of how to use the `MainLayout` component in your application:

```jsx
import React from 'react';
import MainLayout from './MainLayout';

function App() {
return (
<MainLayout>
<h1>Welcome to our application!</h1>
</MainLayout>
);
}

export default App;
```

In this example, the `MainLayout` component is imported and used as a wrapper for the content of the `App` component. The `<h1>` element will be rendered as the `children` prop in the `MainLayout`.






# 📁 Profilepage.js

This file includes a `ProfilePage` component that represents the user's profile page displaying their personal, academic, and contact details.

## 📝 Component

The `ProfilePage` component is a React functional component that uses `useState` and `useEffect` hooks from the 'react' library. The component also imports several components from the `mdb-react-ui-kit` library, such as `MDBCol`, `MDBContainer`, `MDBRow`, `MDBCard`, `MDBCardText`, `MDBCardBody`, `MDBCardImage`, `MDBBtn`, `MDBBreadcrumb`, `MDBBreadcrumbItem`, `MDBProgress`, `MDBProgressBar`, `MDBIcon`, `MDBListGroup`, and `MDBListGroupItem`. Furthermore, the `AiFillEdit` icon is imported from the `react-icons/ai` library.

### 📦 useState and useEffect

| Hook            | Description                                                                                           |
| --------------- | ----------------------------------------------------------------------------------------------------- |
| `userData`    | The state variable that holds the fetched user data. Initialized as an empty string.                  |
| `setUserData` | The state updater function for `userData`.                                                          |
| `useEffect`   | Fetches the user's data from the API at `http://localhost:4000/userdata` when the component mounts. |

### 🎨 UI Components

The `ProfilePage` component is wrapped inside the `MainLayout` component, and it is divided into multiple sections using `MDBContainer`, `MDBRow`, and `MDBCol`. The user's personal, academic, and contact information is displayed using `MDBCard`, `MDBCardBody`, `MDBCardImage`, `MDBCardText`, and `MDBListGroup`. The user can edit their profile by clicking on the "Edit Profile" link, which is accompanied by an `AiFillEdit` icon.

#### User Details

| Field            | Description                                                                                   |
| ---------------- | --------------------------------------------------------------------------------------------- |
| Avatar           | A `MDBCardImage` displaying the user's profile picture.                                     |
| Roll No          | A paragraph displaying the user's roll number.                                                |
| Sem              | A paragraph displaying the user's semester.                                                   |
| Branch           | A paragraph displaying the user's branch.                                                     |
| GitHub           | A `MDBListGroupItem` that includes the user's GitHub link along with an `MDBIcon`.        |
| LinkedIn         | A `MDBListGroupItem` that includes the user's LinkedIn link along with an `MDBIcon`.      |
| Name             | A `MDBCardText` displaying the user's full name.                                            |
| Email            | A `MDBCardText` displaying the user's email address.                                        |
| Phone            | A `MDBCardText` displaying the user's phone number.                                         |
| Address          | A `MDBCardText` displaying the user's address.                                              |
| Father's Details | A `MDBCard` with `MDBCardBody` that includes the user's father's name and contact number. |
| Mother's Details | A `MDBCard` with `MDBCardBody` that includes the user's mother's name and contact number. |

🌟 That's all about the `ProfilePage` component! It's an elegant and straightforward user profile page displaying personal, academic, and contact details while providing an option to edit the profile.





# Quiz.js

This is a documentation for the `Quiz.js` file, which is a React component that renders a quiz. It uses **React** hooks such as `useState`, `useEffect`, and `useSearchParams`. It also fetches data from a server and updates the user's marks on the server.

## Features

- Timer for the quiz
- Fetches questions and user data from the server
- Updates user's marks on the server
- Navigation through questions and answers
- Shows quiz results and related messages
- Restart and exit the quiz

## React Hooks Used

- useState
- useEffect
- useSearchParams

## Variables and States

| Variable        | Type    | Description                                                          |
| --------------- | ------- | -------------------------------------------------------------------- |
| timeRemaining   | integer | Time remaining for the quiz in seconds, initially set to 60          |
| timerActive     | boolean | Whether the timer is active or not, initially set to `false`       |
| userData        | object  | User data fetched from the server                                    |
| questions       | array   | Array of questions and answers fetched from the server               |
| currentQuestion | integer | Index of the current question                                        |
| showScore       | boolean | Whether to show the score section or not, initially set to `false` |
| score           | integer | The user's current score                                             |
| searchParams    | object  | Search parameters of the URL                                         |
| courseId        | string  | The course identifier from the URL search parameters                 |

## useEffect Hooks

- Fetch user data from the server at component mount
- Fetch questions from the server, depending on the `courseId`
- Set the timer status to active when the questions are fetched
- Handle the timer countdown and quiz termination when the time runs out

## Functions

### handleAnswerButtonClick(isCorrect)

Handles the click event of an answer button.

- If the answer is correct, increment the score.
- If there is the next question, set the current question to the next one.
- Otherwise, end the quiz and update the marks on the server.

### updateMarksOnServer()

Updates the user's marks on the server.

- Sends a request to the server with user's email, score, and course ID.

### handleRestartButtonClick()

Restarts the quiz by resetting the score, current question, and hide the score section.

### handleExitButtonClick()

Closes the quiz window.

## Component Structure

- MainLayout
- Quiz
- Timer
- Score Section
- Quiz Results
- Restart Quiz button
- Exit Quiz button
- Question Section
- Question Count
- Question Text
- Answer Section
- Answer buttons

## Usage

```javascript
import Quiz from './path/to/Quiz';
```

```jsx
<Quiz />
```






# Products.js 📦

This file contains the code related to the products and their prices. The following products are defined in the `ProductArray`:

- **College Fee**
- **Bus Fee**
- **Mess Fee**

Each product has a unique ID, title, and price.

## ProductArray 🎓🚌🍽️

The `ProductArray` is an array of objects that contains the product details. It is defined as follows:

| ID                             | Title       | Price  |
| ------------------------------ | ----------- | ------ |
| price_1Mx5hLSAYLrAqiBDB39r8F1G | College Fee | 400000 |
| price_1Mx5iXSAYLrAqiBD7brI9IRs | Bus Fee     | 40000  |
| price_1Mx5jkSAYLrAqiBDiJul5WDO | Mess Fee    | 20000  |

```javascript
const ProductArray = [
{ id: "price_1Mx5hLSAYLrAqiBDB39r8F1G", title : "College Fee", price: 400000 },
{ id: "price_1Mx5iXSAYLrAqiBD7brI9IRs", title : "Bus Fee", price: 40000 },
{ id: "price_1Mx5jkSAYLrAqiBDiJul5WDO", title : "Mess Fee", price: 20000 }
]
```

## getProductData() 📖

The `getProductData()` function takes a product ID as an argument and returns the corresponding product data. If the product ID is not found in the `ProductArray`, it logs a message and returns `undefined`.

```javascript
function getProductData(id){
let productData = ProductArray.find(product => product.id === id);
if(productData == undefined){
console.log("Product data not found for ID " + id);
return undefined;
}
return productData;
}
```

## Exported Members 🚀

The following members are exported from this module:

- `ProductArray`: The array containing product details
- `getProductData`: A function to get the product data based on the product ID

```javascript
export {ProductArray, getProductData};
```





# Admin Add User 📝

This documentation covers the `Adminadduser.js` file, which is a React component that allows admins to add a new user.

## Overview

The `Adminadduser.js` file exports a class called `Adminreg` which extends React `Component`. It contains a constructor with an initial state, a `handleSubmit` function which is used to submit the new user information, and a `render` function that returns a form with input fields for first name, last name, email, and password.

### Initial State 🏁

The initial state of the component is defined in the constructor:

| Property | Type   | Description               | Initial Value |
| -------- | ------ | ------------------------- | ------------- |
| fname    | String | First name of the user    | ""            |
| lname    | String | Last name of the user     | ""            |
| email    | String | Email address of the user | ""            |
| password | String | Password for the account  | ""            |

### handleSubmit Function 📨

This function is responsible for handling the form submission process. It takes the state values and sends a POST request to the backend server with the user information.

```javascript
handleSubmit(e){
e.preventDefault()
const {fname,lname,email, password} = this.state
console.log(fname,lname,email,password)
fetch("http://localhost:4000/adminpage",{
method: "POST",
crossDomain: true,
headers: {
"content-type": "application/json",
Accept:"application/json",
"Access-Control-Allow-Origin": "*",
},
body: JSON.stringify({
fname,
lname,
email,
password,
}),
}).then((res)=>res.json())
.then((data) =>{
console.log(data , "Registered")
})
}
```

### render Function 🎨

The `render` function renders a form with the following fields:

- First name input field
- Last name input field
- Email address input field
- Password input field

Each input field has an `onChange` handler which updates the corresponding state property with the value entered by the user.

The form contains a submit button that triggers the `handleSubmit` function when clicked.

```javascript
render() {
return (
<form onSubmit={this.handleSubmit}>
<h3>Sign Up</h3>
<div className="mb-3">
<label>First name</label>
<input type="text" className="form-control" placeholder="First name" onChange={(e)=>this.setState({fname : e.target.value}) } />
</div>
<div className="mb-3">
<label>Last name</label>
<input type="text" className="form-control" placeholder="Last name" onChange={(e)=>this.setState({lname : e.target.value}) } />
</div>
<div className="mb-3">
<label>Email address</label>
<input type="email" className="form-control" placeholder="Enter email" onChange={(e)=>this.setState({email : e.target.value}) } />
</div>
<div className="mb-3">
<label>Password</label>
<input type="password" className="form-control" placeholder="Enter password" onChange={(e)=>this.setState({password : e.target.value}) } />
</div>
<div className="d-grid">
<button type="submit" className="btn btn-primary"> Sign Up </button>
</div>
</form>
)
}
```

That's it! Now you have a better understanding of the `Adminadduser.js` file and how it works. 😄





# 📄 Index.js Documentation

This JavaScript file sets up a simple **Express** server that uses **CORS** and connects to a **MongoDB** database to fetch specific data from two collections: `profile` and `remainder`. The server listens on port 3000 and provides an API endpoint `/getData` that returns the fetched data.

## 📦 Dependencies

- **`express`**: A popular Node.js web application framework for building web applications.
- **`cors`**: A Node.js package that provides a middleware for enabling Cross-Origin Resource Sharing in the server.
- **`mongodb`**: The official MongoDB driver for Node.js that provides necessary functionality to connect and interact with MongoDB databases.

## 🗄️ Database Information

- **`url`**: The MongoDB connection string used to connect to the database.
- **`database`**: The name of the database being used, which is `stud_info` in this case.

## 🏃‍♂️ Running the Code

The server starts by calling the `getData()` function, which is responsible for connecting to the MongoDB database, fetching data from two collections, and setting up the API endpoint `/getData`.

`getData()` does the following:

1. Connects to the MongoDB database using the `url` and `client`.
2. Selects the `stud_info` database.
3. Fetches data from the `profile` and `remainder` collections based on a specific filter (in this case, records with `name` equal to 'jathin').
4. Sets up the `/getData` API endpoint that accepts **GET** requests and returns the fetched data.
5. Starts the server on port 3000 and logs a message in the console.

### 📄 Code snippet

```javascript
import express from "express";
import cors from "cors";
import { default as mongodb } from "mongodb";

let MongoClient = mongodb.MongoClient;

const url = "mongodb+srv://se_tech:se12345@se.wawkg12.mongodb.net/?retryWrites=true&w=majority";
const database = "stud_info";
const client = new MongoClient(url);

const app = express();
app.use(cors());

async function getData() {
let result = await client.connect();
let db = result.db(database);
let collection = db.collection("profile");
let coll = db.collection("remainder");

let response = await collection.find({ name: "jathin" }).toArray();
let r1 = await coll.find().toArray();
console.log(response);
console.log(r1);

var a = Object.values(response[0]);
var b = Object.values(r1[0]);

app.get("/getData", (req, res) => {
res.send(a);
});

app.listen(3000, () => console.log("app is listening on port"));
}

getData();
```

### 📊 API Endpoint

| Endpoint | Method | Description                                                                  |
| -------- | ------ | ---------------------------------------------------------------------------- |
| /getData | GET    | Fetches and returns data from the `profile` and `remainder` collections. |




# Header.js Documentation

This **Header.js** file contains a `Header` React component. The purpose of this `Header` component is to render the header section of a webpage, which includes a logo, a timer, user information, and a dropdown menu for editing the user profile and logging out.

## Table of Contents

- [Imports](#imports)
- [Timer](#timer)
- [Header Component](#header-component)

* [States and Effects](#states-and-effects)
* [Event Handlers](#event-handlers)
* [Return](#return)

- [Export](#export)

## Imports

```js
import './css/header.css';
import imga from './images/aa.jpg';
import { BiSearch } from 'react-icons/bi';
import { AiFillEdit } from 'react-icons/ai';
import { IoLogOut } from 'react-icons/io5';
import Logo from './images/tlogo.png';
import Axios from 'axios';
import React, { useState, useEffect } from 'react';
```

- Import the `header.css` file for styling
- Import several images, including the Logo
- Import icons from `react-icons`
- Import Axios for making API requests
- Import React's `useState` and `useEffect` hooks

## Timer

The `Timer` component displays the current time, updated every second.

```js
const Timer = () => {
const [currentTime, setCurrentTime] = useState(new Date());

useEffect(() => {
const timer = setInterval(() => {
setCurrentTime(new Date());
}, 1000);

return () => {
clearInterval(timer);
};
}, []);

return (
<div style={{ color: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", height: "100%",fontSize:"30px",paddingTop:"17px" }}>
<p>{currentTime.toLocaleTimeString()}</p>
</div>
);
};
```

## Header Component

The `Header` component is the main functional component of this file.

### States and Effects

The component has several states:

- `userData`: Holds the user's data, fetched from the API.
- `data`: Unused state in the provided code.
- `showDropdown`: Determines whether the dropdown menu is shown or not.

```js
const [userData, setUserData] = useState('');
const [data, setData] = useState('');
const [showDropdown, setShowDropdown] = useState(false);
```

The `useEffect` hook has been used to fetch the user data and set it to the `userData` state.

```js
useEffect(() => {
fetch('http://localhost:4000/userdata', {
method: 'POST',
crossDomain: true,
headers: {
'content-type': 'application/json',
Accept: 'application/json',
'Access-Control-Allow-Origin': '*',
},
body: JSON.stringify({ token: window.localStorage.getItem('token') }),
})
.then((res) => res.json())
.then((data) => {
console.log(data, 'UserData');
setUserData(data.data);
});
}, []);
```

### Event Handlers

The component has two event handlers:

- `handleImageClick`: Toggles the `showDropdown` state when the user's profile picture is clicked.
- `logOut`: Clears local storage and redirects the user to the home page.

```js
const handleImageClick = () => {
setShowDropdown(!showDropdown);
};

const logOut = () => {
window.localStorage.clear();
window.location.href = './';
};
```

### Return

The `Header` component returns a JSX structure which includes:

- Logo image
- Timer component that shows the current time
- User information (Name and Profile Picture)
- Dropdown menu containing "Edit Profile" and "Logout" options

```js
return (
<header className='header'>
{/* Logo and Timer */}
{/* User Information and Dropdown Menu */}
</header>
);
```

## Export

Export the `Header` component as the default export.

```js
export default Header;
```





# Box.js - Documentation 📚

This file contains the functional component `Box`. It renders the main layout including user scores, attendance, a graph, and announcements.

## Import Statements 📥

- CSS file for the box component: `./css/box.css`
- `CircularProgressBar` component
- React Icons Package: `FaRupeeSign`
- `MainLayout` component
- Axios library
- React hooks: `useState`, `useEffect`
- Background video file: `./images/Backgroundvideo.mp4`

## Functional Component: Box 📦

The `Box` component receives `props` as its argument.

### State Variables 💾

- `userData`: Initial value is an empty string. It stores the user's data fetched from the server.
- `annData`: Initial value is an empty array. It stores the announcement data fetched from the server.

### useEffect Hooks ⚓

1. When the component mounts, the user's data is fetched from the server at `http://localhost:4000/userdata`. The token is stored in the local storage and sent to the server as part of the request. The fetched data is then set to the `userData` state variable.
2. When the component mounts, the announcement data is fetched from the server at `http://localhost:4000/anndata`. The fetched data is then set to the `annData` state variable.

### Calculations 🧮

- `totalattendance`: Sum of `userData.att_c1`, `userData.att_c2`, and `userData.att_c3`.
- `formattedDate`: Current date formatted as `YYYY-MM-DD`.

### Rendered Components 🖼️

- **MainLayout**: Wraps all the other components and provides the base layout.
- **box2**: Contains the user's scores in a table.
- **box3**: Contains the attendance information with a `CircularProgressBar` component.
- **gral**: Contains an iframe with the user's graph.
- **lb**: Contains a table of announcements.

## Export Statement 📤

The `Box` component is exported as the default export.
