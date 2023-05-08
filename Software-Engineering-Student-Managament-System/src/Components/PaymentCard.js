import React from 'react'
import { Card, Button, Form, Row, Col } from 'react-bootstrap'
import CartProvider, { CartContext } from '../PaymentContext'
import { useContext } from 'react'

function PaymentCard(props) {
    const product = props.product
    const cart = useContext(CartContext)
    const ProductQuantity = cart.getProductQuantity(product.id)
    console.log(cart.items)
    return (
        <CartProvider>
        <Card>
            <Card.Body>
                <Card.Title>
                    {product.title}
                </Card.Title>
                <Card.Text>
                    Rs{product.price}
                </Card.Text>
                {ProductQuantity > 0 ?
                    <>
                        <Form as={Row}>
                            <Form.Label column="true" sm="6">
                                In Cart: {ProductQuantity}
                            </Form.Label>
                            <Col sm="6">
                                <Button sm="6" onClick={() => cart.addOneToCart(product.id)} className="mx-2">+</Button>
                                <Button sm="6" onClick={() => cart.removeOneFromCart(product.id)} className="mx-2">-</Button>
                            </Col>
                        </Form>
                        <Button variant='danger' onClick={() => cart.deleteFromCart(product.id)} className="my-2">Remove From Cart</Button>

                    </>
                    :
                    <Button variant="primary" onClick={() => cart.addOneToCart(product.id)}>Add To Cart</Button>
                }

            </Card.Body>
        </Card>
        </CartProvider>
    )
}

export default PaymentCard