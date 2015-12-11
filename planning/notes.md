### Express apps using Mongo - REVIEW SESSION NOTES

## Backend
Need:
* index.js - main file that gets everything going. load dependencies and configuration.
  * require mongoose, body-parser, passport, etc.
  * can define routes here or they can be defined in a different file

### Routes
* what kind of request can be made on this app
  * GET, POST, PUT, PATCH, DELETE ?
    * only define what you want people to be able to use

* defined on an instance of Express

* request is made in a browser
* Express tries to fulfill that request via the router
* Router sends request to appropriate controller
* Controller consults the appropriate model(s) and then renders
a response, which might be a view which is an entire .html page, or it might be in the form of JSON, depending on what kind of request it was

### Middleware
Anytime you see "app.use" that's using middleware. app is express (and "app" could be any word but it's convention to call it app), so app.use is saying "Express use [middleware]" before doing your controller action
  * body-parser - looks at the request's body if it's a form submission, reads it and converts it into JS
  * defining your own function to determine whether a request is asking for json or an html view


## Package.json
Just a JSON file telling your app what dependencies it needs and other details

Some related commands:
* npm install -g [""] - installs globally
* npm install --save [""] - installs it and saves it within the app so when someone else clones it and runs install, these dependencies will be included
* npm install - looks at package.JSON and installs needed dependencies


## Front End - Pirates vs. Ninjas

### Plain Inherently Railsy Apps That're Essentially Static
User clicks something and browser sends request directly to backend

### Nicely Interactive, Nothing But JavaScript Apps (Single-page app)
User clicks something and JS intercepts request and makes the AJAX request to the backend in JSON, accepts .json response and handles the view on the front end, through the model

* public/js
  * index.js
  * models
  * views or sometimes called viewcontrollers
    * handle user interaction AND updating the view
    * create elements and click listeners to render views
      * ArtistView.js
      * SongView.js

  * script.js
    * put the document ready function
    * Example:
    ```
    $(document).ready(function() {
      Artist.fetch().then(function(artists){
        //etc
        })

      })
    ```
