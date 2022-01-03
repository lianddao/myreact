const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')


const adapter = new FileSync('product.json')
const db = low(adapter)



function getProductCategory() {
    const all = db.get("ProductCategory").value()
    return all
}

function getProductSubcategory() {
    const sub = db.get("ProductSubcategory").value()
    return sub
}


function getAll() {
    const all = getProductCategory()
    all.map((n) => {
        const children = db.get("ProductSubcategory").filter({ProductCategoryID: n.ProductCategoryID}).value()
        n.children = children
    })
    console.log(all)
    return all
}


module.exports = {getProductCategory, getProductSubcategory, getAll}
