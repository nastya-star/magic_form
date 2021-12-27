# Magic form

It is an application based on node.js "express" library.
######
There is a form that receives a username and an email from the user. Also, it adds it to an existing table, adding an id and a time of the request.

## Documentation

### Getting started

**1.** Create a new folder

**2.** Clone this repository and install dependencies
```
git clone https://github.com/nastya-star/magic_form.git
cd magic_form
npm install
```
**3.** Run the application
```
npm start
```
**4.** Open your browser and go to *http://localhost:3000*

**5.** Enjoy yourself 😊😊😊

### Functions

#### Frontend

**checkEmail(email) -> boolean** (receives an email and checks whether exists the same one. Returns true or false)

**writeUser(username, email, date) -> object** (receives a username, email and date. Pushes data to an array and returns an object with a pushed element. If the same email already exists, returns undefined)

**createField(username, email, date) -> string** (receives a username, email and date. Calls writeUser function and returns null if there is an error. In a valid case, returns an HTML code of field)

**postData(url, data) -> Promise** (receives a URL and data to post. Returns Promise with response from the server)

#### Backend

**validateEmail(email) -> boolean** (receives an email and checks whether it is valid. Returns true or false)

**validateUsername(username) -> boolean** (receives a username and checks whether it is valid. Returns true or false)

**getDate() -> string** (returns current time in format "01.01.2000 23:59:59")
