import React from 'react'
import MainLayout from '../Layout/MainLayout'
import './payment.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Button, Modal } from 'react-bootstrap'
import { Row, Col } from 'react-bootstrap'
import { ProductArray, getProductData } from './Products'
import PaymentCard from '../Components/PaymentCard'
import { useState, useContext } from 'react'
import CartProvider from '../PaymentContext'
import { CartContext } from '../PaymentContext'
import CartProducts from '../Components/CartProducts'
import Backgroundvideo from "../Components/images/Backgroundvideo.mp4"


function PaymentPage() {
  const cart = useContext(CartContext)
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const productscount = cart.items.reduce((acc, item) => acc + item.quantity, 0)

  const checkout = async () => {
    await fetch('http://localhost:4000/checkout', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ items: cart.items })
    }).then((response) => { return response.json() }
    ).then((response) => {
      if (response.url) {
        window.location.assign(response.url)
      }
    }
    )
  }
  return (
    <>
    
     
    
      
      <MainLayout>
      
        <div className="placement">
          <div align='Right' className='p-4'>
            <Button style={{ backgroundColor: '#5c72ad' }} onClick={handleShow}>Cart {productscount} Items</Button>
          </div>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Payment Cart</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {productscount > 0 ?
                <>
                  {cart.items.map((currentproduct, idx) =>
                  (
                    <CartProducts key={idx} id={currentproduct.id} quantity={currentproduct.quantity}></CartProducts>
                  )
                  )}
                  <h1> Total : {cart.getTotalCost()}</h1>
                  <Button variant='success' onClick={checkout}>Checkout</Button>
                </>
                :
                <h1 style={{color: 'black'}}>Cart is Empty</h1>
              }
            </Modal.Body>
          </Modal>

          <Container>
            
            {/* <section class="style-one">
              <div class="wordart">
                <h1 class="preview" data-content="CodePen">Welcome To Payments Page</h1>
              </div>
            </section> */}
            <div style={{marginRight:'380px'}}>
            <section class="style-one">
              <div class="wordart">
                <h1 class="preview" data-content="CodePen" style={{marginLeft:'123px'}}>Welcome To Payments Page</h1>
              </div>
            </section>
            <Row xs={1} md={3} className='g-4'>
              {ProductArray.map((product, idx) => (
                <Col align='center' key={idx}>
                  <PaymentCard product={product}></PaymentCard>
                </Col>
              ))}

                

            </Row>
            </div>
          </Container>
        </div>

      </MainLayout>
    </>
  )
}

export default PaymentPage