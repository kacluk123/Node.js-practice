const fs = require('fs');
const path = require('path');
const uuid = require('uuid');

const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'products.json'
);

const getProductsFromFile = cb => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Product {
  constructor(t) {
    this.title = t;
    this.id = uuid();
  }

  save() {
    getProductsFromFile(products => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), err => {
        console.log(err);
      });
    });
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }

  static deleteItemFromJsonFile(id){
    getProductsFromFile(products => {
      const newArrayOfProducts = products.filter(item => item.id !== id)
      fs.writeFile(p, JSON.stringify(newArrayOfProducts), err => {
        console.log(err);
      });
    })
  }
};
