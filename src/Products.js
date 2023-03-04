import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Products() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    fetchdata()
  }, [])

  let fetchdata = async () => {
    try {
      const products = await axios.get('https://634c0872317dc96a308fd6f9.mockapi.io/products')
      setProducts(products.data)
    } catch (error) {
      console.log(error)
    }
  }

  let deleteproduct=async (pdt)=>{
    let confirmation = window.confirm("Are you sure you want to delete this product?")
    if(confirmation){
      await axios.delete(`https://634c0872317dc96a308fd6f9.mockapi.io/products/${pdt}`)
    }
    alert("Product deleted")
    fetchdata()
  }
  return (
    <div className="container-fluid">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Products</h1>
        <Link to="/product_create" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
          className="fas fa-download fa-sm text-white-50"></i>Add product</Link>
      </div>
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {
            products.map((product, index) => {
              return (
                <div className="col mb-5">
                  <div className="card h-100">
                    <img className="card-img-top" src={product.pimg} alt="..." />
                    <div className="card-body p-4">
                      <div className="text-center">
                        <h5 className="fw-bolder">{product.pname}</h5>
                        ${product.pprice}
                      </div>
                      <button onClick={()=>deleteproduct(product.id)} className='btn btn-danger'>Delete Product</button>
                    </div></div></div>)
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Products