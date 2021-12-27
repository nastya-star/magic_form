# Magic form

This is application based on node.js "express" library.
######
There is a form that receives username and email from user and adds is to an existing table, adding an id and a time of request.

## Documentation

### Getting started

**1.** Create a new folder

**2.** Clone this repository
```
git clone https://github.com/nastya-star/magic_form.git
```
**3.** Install dependencies
```
npm install
```
**4.** Run the application
```
npm start
```
### Functions

#### Frontend

**checkEmail(email) -> boolean** (receives an email and checks whether exists the same one. Returns true or false)

**writeUser(username, email, date) -> object** (receives a username, email and date. Pushes data to an array and returns an object with pushed element. If the same email already exists returns undefined)

**createField(username, email, date) -> string** (receives a username, email and date. Calls writeUser function and returns null if there is an error. In valid case returns an HTML code of field)

**postData(url, data) -> Promise** (receives a url and data to post. Returns Promise with response from the server)

#### Backend

**validateEmail(email) -> boolean** (receives an email and checks whether it is valid. Returns true or false)

**validateUsername(username) -> boolean** (receives a username and checks whether it is valid. Returns true or false)