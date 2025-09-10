const express = require("express")
require("dotenv").config()

const app = express()
const port = process.env.PORT

const obj = {
    "name": "Rushikesh",
    "age": 22,
    "isStudent": true,
    "skills": ["C++", "React", "Python"],
    "projects": [
        {
            "title": "Team Collaboration Platform",
            "year": 2024,
            "features": ["Role-based access", "Task tracking", "AI bot"]
        },
        {
            "title": "ClickCart",
            "year": 2025,
            "features": ["E-commerce website", "Payment gateway", "User dashboard"]
        }
    ],
    "location": {
        "city": "Nashik",
        "country": "India"
    }
}


app.get('/', (req, res) => {
    res.send("Hello World!")
})
app.get('/Rushikesh', (req, res) => {
    res.send("Rushikesh Landge!")
})
app.get('/Login', (req, res) => {
    res.send("<h1>Login Here</h1>")
})

// Sending JSON response
app.get('/github', (req, res) => {
    res.json(obj)
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`);

})