import express from "express"

const app = express()

const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send("Hello World!!")
})


app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            "id": 1,
            "title": "Getting started with Pyjocs",
            "content": "An introduction to Pyjocs: what it is, how to install it, and a simple hello-world example."
        },
        {
            "id": 2,
            "title": "Pyjocs: Data types",
            "content": "Overview of supported data types, serialization rules, and best practices when storing complex objects."
        },
        {
            "id": 3,
            "title": "Working with files",
            "content": "How to read and write Pyjocs data to disk, recommended file layouts, and examples using streams."
        },
        {
            "id": 4,
            "title": "Async operations",
            "content": "Patterns for asynchronous tasks in Pyjocs, including callbacks, promises/futures, and error handling."
        },
        {
            "id": 5,
            "title": "Advanced topics",
            "content": "Custom serializers, extending the Pyjocs schema, and integration with other tools and frameworks."
        }
    ]
    res.send(jokes)
})

app.listen(port, () => {
    console.log(`Server Running on port ${port}`);

})