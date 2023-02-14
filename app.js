/*
Require express function
*/

const express = require("express");
const hbs = require("hbs");

/*
Create the app object
*/

const app = express()
app.set('view engine', 'hbs')

app.use(express.static(`${__dirname}/public`))
hbs.registerPartials(`${__dirname}/views/partials`);


app.get('/', (request, response) => {
    console.log("ciao")
    response.render('home', {
        navbar: true,
        footer: true,
        title: "Roberto | Home"
    })
})

app.get('/about', (request, response) => {
    response.render('about', {
        navbar: true,
        footer: true,
        title: "Roberto | About"
    })
})

app.get('/work', (request, response) => {
    response.render('work', {
        navbar: true,
        footer: true,
        title: "Roberto | Work"
    })
})

app.get('/media', (request, response) => {
    response.render('media', {
        navbar: true,
        footer: true,
        title: "Roberto | Media"
    })
})


/*
Listen to a specific port
*/

app.listen(3000, () => {
    console.log('🏃🏻‍♀️ on http://localhost:3000')
})
