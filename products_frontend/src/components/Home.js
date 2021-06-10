import { listProducts } from '../actions/productActions';
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'


const Home = () => {
  const dispatch = useDispatch()
  const productList = useSelector(state => state.productList)
  const { error, loading, products } = productList

  useEffect(() => {
    dispatch(listProducts())

  }, [])
  return (
    <div>
      <ul>
        {
          products.map((product) => {
            return (
              <div>
                <h1>{product.name}</h1>
                <h2>{product.category}</h2>
                <h2>{product.descr}</h2>
              </div>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Home
