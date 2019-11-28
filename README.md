This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

## React-Router 

Here, we will implement react-router in the navigation panel so to browse from one page to another. For that first we will install `react-router` library in our project using given command.
`yarn add i react-router-dom`

Then we'll start implementing it. First in the `index.js`  the component `{BrowserRouter}` is imported and then `<App />` component is wrapped in side of it so to keep our browsing history.

Next we'll add different components for routing where we will nagivate to. They are `Customers, MovieForm, NotFound, Rentals.` And the we'll create routes.

In `app.js` file  import `Route` component  so to implement routing for all  components that we want to browse through. For that `Route` component needs two arguments `path` here we define our path for the component  and `component` here component that we want to browse through is mentioned. These are different component for our app we create for different purposes.

`<Route> path='/movies' component={Movies}</Route>`

Now  add `<Redirect> and <Switch>` to make browsing more systematic.

### Nav-Bar
Implement nativation using bootstrap boilerplate code by creating a seprate `NavBar` component. Then set navigation for all the component that is to be navigated.

Rename `class to className, a to NavLink, href-to `. Then assing them their corresponing path for the navigation. Like:

`<NavLink  className="nav-item nav-link" to="/movies"> 
Movies </NavLink>`

`imoport {Link, NavLink}` these components are imported.

### Linking the table

In order to give link to tables we need to modify the first column content in `moviesTable` component. So to render  link component we pass movie as parameter to arrow function get link to movie with proper id.

`Movie details page` for this we need to register new route.
In `App.js` add new route for `MovieForm` which direct to give clicked movie.

 Now we can exact movie based on their id.
 We added here a button to take user back to the movies page.
 
### React-Router Summary
In this seciton we implemented 
`
Route Parameters
Query String
Redirect user to and fr o
Not Found (404) Pages
Nested Routing
`
### Form Building
In this section we build form with validation. 

We will build login form.
Registration form
Form to edit movies in Vildy project.
Add search box.

### Login Form

We create `loginForm ` component then create route for it  and finally add to `NavBar` for navigation.

Now `Login` is filled with its content using `Bootstrap Form` where we create input field for user to login in the system using `Credentials`.
`Zencoding trick: (form>div.form-group>lable+input.form-control)*2` for quick and easy form creating inside `div`. 

Next we add `id` for both inputs `Username and Password`, which must be same same value for `label's htmlFor and id` in both cases of Username and Password.

As we need `Login` button so we use `button.btn.btn-primary` to create a bootstrapped button.

### Handling Form Submission

We will `Handle Form submission` by creating a method with preventDefault event.

As every form submisstion has an event `onSubmit` we will create a method for it and set it to `preventDefault` so to control default behaviour of form which is full page loading of the form with submission.

### Setting Value of the Input Form

When building forms, quite often our form components have state that is initialized based on what we get from the server.
For example, if we are builidng movie component form, we need to call the server, get the movies with given id, store it in the state and then populate the form.

Similar concept we apply with our login form but here we get state from our user as `Username and Password`.
We set our each input field creating two states for username and password remaining initially empty.
Then we update with `this.setState` using method which we'll create for each inputs on event `onChange`. 

Since, we have multiple inputs we can hanlde their property with `handleChange` method dynamically. For which we need to add `name attribute` to both inputs in this case and then set `handleChange` accordingly.
Also, we can use object destructuring in `render` to make our code cleaner.

`const {account} = this.state`

Note: When we work with property dynamically instead of using, dot notation we can work with bracket notation. 
