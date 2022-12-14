import express from "express"

// create an express application
const app = express()

// set template engine
app.set('view engine', 'ejs')

// specify where to source for static files
app.use(express.static('public'))

// Homepage
app.get('/', (req, res) => {
    res.render('index')
})

// Aboutpage
app.get('/about', (req, res) => {
    res.render(
        'about'
    )
})

const items = [
    {id:1, name:'Cocoa'},
    {id:2, name:'Cake'},
    {id:3, name:'1Kg of Butter'},
    {id:4, name:'Peanut Butter'},
    {id:5, name:'2Kg of Rice'},
]


//list
app.get('/list', (req, res) =>{
    res.render(
        'list',
        {items:items}
    )
})

// add Item
app.get('/add', (req, res) =>{
    res.render('add')
})

//  404 error
app.get('*', (req, res) => {

    res.render('404error')
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () =>{
    console.log('app is live..')
})