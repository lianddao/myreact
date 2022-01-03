const ProductCategory = require('./ProductCategory')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')


const adapter = new FileSync('db.json')
const db = low(adapter)


// Create server
const app = express()
app.use('/', express.static('public'));   // serve static files

app.use(bodyParser.json()); // support json encoded bodies, needed por post x-www-form-urlencoded to work
app.use(bodyParser.urlencoded({extended: true})); // support encoded bodies
app.use(cors())


// Routes
// GET /allProducts
app.get('/Products', (req, res) => {
    const allProducts = db.get('Products')
    .value()
    res.send(allProducts)
})



app.get('/ProductCategory', (req, res) => {
    res.send(ProductCategory.getAll())
})






// 获取「波峰焊」数据
app.get(encodeURI('/波峰焊'), (req, res) => {
    const all = db.get('波峰焊').value()
    res.send(all)
})


// 获取「工厂区域」数据
app.get(encodeURI('/工厂区域'), (req, res) => {
    const all = db.get('工厂区域').value()
    res.send(all)
})






// 获取「产品种类」数据
app.get(encodeURI('/产品/产品种类'), (req, res) => {
    const all = db.get('产品种类').value()
    res.send(all)
})

// 获取「产品种类的产品数量」
app.get(encodeURI('/product/category/:id'), (req, res) => {
    var categoryId = parseInt(req.params.id)
    var count = db.get('产品').filter({ProductCategoryID: categoryId}).size().value()
    console.log(categoryId + ' 数量 = ' + count)
    res.send({count: count})
})


// 获取「产品种类的产品数量」, 高性能版本
app.post(encodeURI('/product/category2/'), (req, res) => {
    req.body.list.map(one => {
        var categoryId = parseInt(one.id)
        var count = db.get('产品').filter({ProductCategoryID: categoryId}).size().value()
        console.log(one.id + "," + one.name + ' 数量 = ' + count)
        one.count = count
    })
    res.send(req.body.list)
})


// 获取「产品」数据
app.get(encodeURI('/产品/所有产品'), (req, res) => {
    const all = db.get('产品').value()
    res.send(all)
})


app.get(encodeURI('/顶层产品目录'), (req, res) => {
    var rootCategory = db.get('产品种类').filter({parentId: null}).value()
    res.send(rootCategory)
})




// 登录
app.post("/login", (req, res) => {
    const username = req.body.username
    const password = req.body.password
    const user = db.get('用户')
    .find({username: username, password: password})
    .value()
    res.send(user)
})



// GET /product/:id
app.get('/product/:id', (req, res) => {
    const product = db.get('Products')
    .find({id: Number(req.params.id)})
    .value()
    res.send(product)
})


// DELETE /product/:id
app.delete('/product/:id', (req, res) => {
    const productDeleted = db.get('Products')
    .remove({id: Number(req.params.id)})
    .write()
    res.send(productDeleted)
})

// PUT /updateProduct
app.put('/updateProduct', (req, res) => {
    db.get('Products')
    .find({id: Number(req.body.id)})
    .assign({item: req.body.item})
    .write()
    res.send('updated')
})


// POST /Products
app.post('/products', (req, res) => {
    db.get('Products').push({id: req.body.id, item: req.body.item})
    .write()
    res.send('added')
})

// RESET DATABASE /reset
app.delete('/reset', (req, res) => {
    db.set('Products', [{item: 'Sweater', id: 1}, {item: 'Jelly Shoes', id: 2}, {item: 'WindBreaker', id: 3}])
    .write()
})





// Init
// db.defaults({ Products: [{item: 'Sweater', id: 1}, {item: 'Jelly Shoes', id: 2 }, {item: 'WindBreaker', id: 3}] })
//   .write()
//   .then(() => {
app.listen(4004, () => console.log('Server is listening'))
// })
