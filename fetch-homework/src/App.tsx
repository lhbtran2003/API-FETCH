import React from 'react'
import { getAllProduct } from './service/ex2'
import { createProduct } from './service/ex5';

function App() {
 const products = getAllProduct();
  products.then(product => console.log(product)
  ).catch(err => console.log(err)
  )
  
  const product = {
    "id" : 20,
    "title" : "hề lô mấy chế iu mấy chế iu khỏe hơm"
  }
  const newProduct =  createProduct(product);
  newProduct.then(product => console.log(product)
  )
  return (
    <div>

    </div>
  )
}
export default App