
This app store data in mongodb  using express js and node js.
Get all product list=>
fetch('https://serverside-five.vercel.app/product')
.then(product=>product.json())
.then(product=>product.data)


Searh Product Category Men,Women,Kids,Electronics And Makeup


fetch('https://serverside-five.vercel.app/q?cat=makeup')
.then(product=>product.json())
.then(product=>product.data)
