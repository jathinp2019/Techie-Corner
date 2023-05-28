import React from 'react'
import { Card, Button, Form, Row, Col } from 'react-bootstrap'
import CartProvider, { CartContext } from '../PaymentContext'
import { useContext } from 'react'
import { MdOutlineRestaurant, } from "react-icons/md";
import { FaBus } from 'react-icons/fa'
import './paymentcard.css'


function PaymentCard(props) {
    const product = props.product
    const cart = useContext(CartContext)
    const ProductQuantity = cart.getProductQuantity(product.id)
    console.log(cart.items)
    return (
        <CartProvider>
            {product.title === "College Fee" ? (
                <>
                    <div className="card-body" style={{ backgroundColor: '#6fc0d1' }}>
                        <div className="icon-wrapper section">
                            <span className="icon">
                                <i className='far fa-edit' aria-hidden="true"></i>
                            </span>
                        </div>
                        <div className="text-wrapper section">
                            <div className="title"><span>{product.title}</span></div>
                            <div className="details"><span>Rs{product.price}</span></div>
                            {ProductQuantity > 0 ?
                                <>
                                    <Form as={Row}>
                                        <Form.Label column="true" sm="6">
                                            In Cart: {ProductQuantity}
                                        </Form.Label>
                                        <Col sm="6">
                                            <Button style={{ backgroundColor: '#76a1ab' }} sm="6" onClick={() => cart.addOneToCart(product.id)} className="mx-2">+</Button>
                                            <Button style={{ backgroundColor: '#76a1ab' }} sm="6" onClick={() => cart.removeOneFromCart(product.id)} className="mx-2">-</Button>
                                        </Col>
                                    </Form>
                                    <Button style={{ backgroundColor: '#e75d5d' }} onClick={() => cart.deleteFromCart(product.id)} className="my-2">Remove From Cart</Button>

                                </>
                                :
                                <Button style={{ backgroundColor: '#76a1ab' }} onClick={() => cart.addOneToCart(product.id)}>Add To Cart</Button>
                            }
                        </div>
                    </div>
                </>
            ) : product.title === "Mess Fee" ? (
                <>
                    <div className="card-body" style={{ backgroundColor: '#7dc691' }} >
                        <div className="icon-wrapper section">
                            <span className="icon">
                                <MdOutlineRestaurant />
                            </span>
                        </div>
                        <div className="text-wrapper section">
                            <div className="title"><span>{product.title}</span></div>
                            <div className="details"><span>Rs{product.price}</span></div>
                            {ProductQuantity > 0 ?
                                <>
                                    <Form as={Row}>
                                        <Form.Label column="true" sm="6">
                                            In Cart: {ProductQuantity}
                                        </Form.Label>
                                        <Col sm="6">
                                            <Button style={{ backgroundColor: '#7dad8a' }} sm="6" onClick={() => cart.addOneToCart(product.id)} className="mx-2">+</Button>
                                            <Button style={{ backgroundColor: '#7dad8a' }} sm="6" onClick={() => cart.removeOneFromCart(product.id)} className="mx-2">-</Button>
                                        </Col>
                                    </Form>
                                    <Button style={{ backgroundColor: '#e75d5d' }} onClick={() => cart.deleteFromCart(product.id)} className="my-2">Remove From Cart</Button>

                                </>
                                :
                                <Button style={{ backgroundColor: '#7dad8a' }} onClick={() => cart.addOneToCart(product.id)}>Add To Cart</Button>
                            }
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <div className="card-body" style={{ backgroundColor: '#d98e64' }}>
                        <div className="icon-wrapper section">
                            <span className="icon">
                                <FaBus />
                            </span>
                        </div>
                        <div className="text-wrapper section">
                            <div className="title"><span>{product.title}</span></div>
                            <div className="details"><span>Rs{product.price}</span></div>
                            {ProductQuantity > 0 ?
                                <>
                                    <Form as={Row}>
                                        <Form.Label column="true" sm="6">
                                            In Cart: {ProductQuantity}
                                        </Form.Label>
                                        <Col sm="6">
                                            <Button style={{ backgroundColor: '#bf8d71' }} sm="6" onClick={() => cart.addOneToCart(product.id)} className="mx-2">+</Button>
                                            <Button style={{ backgroundColor: '#bf8d71' }} sm="6" onClick={() => cart.removeOneFromCart(product.id)} className="mx-2">-</Button>
                                        </Col>
                                    </Form>
                                    <Button style={{ backgroundColor: '#e75d5d' }} onClick={() => cart.deleteFromCart(product.id)} className="my-2">Remove From Cart</Button>

                                </>
                                :
                                <Button style={{ backgroundColor: '#bf8d71' }} onClick={() => cart.addOneToCart(product.id)}>Add To Cart</Button>
                            }
                        </div>
                    </div>
                </>
            )}
                            
        
        </CartProvider>
    )
}

export default PaymentCard
