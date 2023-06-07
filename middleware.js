const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const data = require('./data.js')

app.get('/', (req, res) => {
    res.json(data.products)
})

app.get('/api/products/:id', (req, res) => {
    const idx = data.products.findIndex((product) => product.id === parseInt(req.params.id))

    console.log(typeof parseInt(req.params.id))

    if (idx === -1) {
        res.status(404).json('Product not found')
        return;
    }
    res.json(data.products[idx]);
})


app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
    console.log(req.params);
    const productID = parseInt(req.params.productID);
    const reviewID = parseInt(req.params.reviewID);
    const product = data.products.find((product) => product.id === productID);
    const review = product.reviews.find((review) => review.reviewId === reviewID);
    console.log(product, review)
    if (product && review) {
        res.json(review);
    }
    else {
        res.status(404).json('Product or review not found');
    }
})


app.get('/api/v1/query', (req, res) => {
    console.log(req.query);
    const { search, limit } = req.query;
    const products = search ? data.products.filter((product) => {
        if (product.name.substring(0, search.length) === search) {
            return product;
        }
    }) : data.products;

    const limitedProducts = limit ? products.slice(0, Number(limit)) : products;
    if (limitedProducts.length > 0)
        return res.status(200).json(limitedProducts);
    else return res.status(404).json('No products found');
    //! below line will through error Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client 
    // res.send('hello world')
})


app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})
