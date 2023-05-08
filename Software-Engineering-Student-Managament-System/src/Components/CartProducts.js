import React from 'react'
import { Button } from 'react-bootstrap'
import { CartContext } from '../PaymentContext'
import { useContext } from 'react'
import { getProductData } from '../pages/Products'
import { CgColorBucket } from 'react-icons/cg'

function CartProducts(props) {
    const cart = useContext(CartContext)
    const id = props.id
    const quantity = props.quantity
    const productData = getProductData(id)
  return (
    <>
    <h3 style={{color:"black"}}>{productData.title}</h3>
    <p>Quantity Total : {quantity}</p>
    <p>₹{(quantity * productData.price)}</p>
    <Button variant = "danger" size='sm' onClick={() => cart.deleteFromCart(id)}> Remove </Button>
    <hr></hr>
    </>
  )
}

export default CartProducts