import React from 'react'
import { useParams } from 'react-router-dom'

const Product = () => {
    let params = useParams()
    console.log(params) // Object: id1: ..., id2: ...
  return (
    <div>Product Page</div>
  )
}

export default Product