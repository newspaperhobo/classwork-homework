// STEP 1: Before you start: take a look at the code below to get a feel for what it does. The code below is the solution to the classwork from period 2, so it should look familiar.

// Step 2: // STEP 2: In your terminal install the dependencies simply by typing in npm install. This will install the needed dependencies (express and ejs) and dev dependencies (morgan and nodemon) for this project. 
    // Note that you do NOT have to do npm init because cloning this project brings in the package.json file that's usually created through the npm init. 

// Step 3: In the partials folder (which is inside the views folder), create three files: 1) head.ejs 2) navigation-bar.ejs 3) footer.ejs

// Step 4: Take out all the code that will go into the head.ejs file from your 4 views/pages files and migrate a copy of the code to the head.ejs file. This should include the doctype tag, the opening html tag, the complete head tag (with all its contents), and the opening body tag. In place of this code in the 4 views/pages files, use the ejs tag to include the head.ejs partial where it goes. <% - include (../partials/) -%>

// Step 5: Take out all the code that will go into the navigation-bar.ejs file from your 4 views/pages files and migrate a copy of the code to the navigation-bar.ejs file. In place of this code in the 4 views/pages files, use the ejs tag to include the navigation-bar.ejs partial where it goes. 

// Step 6: Take out all the code that will go into the footer.ejs file from your 4 views/pages files and migrate a copy of the code to the footer.ejs file. This should include the footer and the closing tags that will complete the opening tags included in the head.ejs partial. In place of this code in the 4 views/pages files, use the ejs tag to include the footer.ejs partial where it goes. 

const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');
const morgan = require('morgan');
const { response } = require('express');

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('combined'));

// Variables to be used in EJS files.
let userName = 'CodeSquader';
let date = new Date();
let year = date.getFullYear();

//Routes 
app.get('/', (request, response) => {
    response.render('pages/index', {
        name: userName,
        copyrightYear: year,
    });
});

app.get('/about', (request, response) => {
    response.render('pages/about', {
        name: userName,
        copyrightYear: year,
    });
});

app.get('/contact', (request, response) => {
    response.render('pages/contact', {
        name: userName,
        copyrightYear: year,
    });
});


// Step 7: Create a route with the parameter :userParam below. When the server is listening, you should be able to manually navigate to http://localhost:3000/userParam where userParam could be the name of a person, and the page that's rendered by the route is user-profile.ejs. 
    // The route should capture whatever is written in place of userParam by using the request.params property. The route should render the user-profile.ejs page, but in place of PARAM-PLACEHOLDER in the first paragraph on that page, whatever was entered in as the userParam should be displayed in the first paragraph. 
    // Don't forget to also pass in the value stored in the year variable from above because that's needed for the footer to render. 


app.get('/:userParam', (req, res) => {
    let params = req.params;
    let userParam = params.userParam
    console.log(params);
    res.render('pages/user-profile', {
        name: userParam,
        copyrightYear: year,
    });
})



//Server
app.listen(PORT, () => {
    console.log(`The server is listening on port ${PORT}`);
});

