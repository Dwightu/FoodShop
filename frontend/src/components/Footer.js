import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer className='bg-success'>
      <Container>
        <Row>
          <Col className='text-center py-3 text-light'>Copyright &copy; FoodShop</Col>
        </Row>
        <Row>
          <Col className='text-center text-light mb-3'>2022 Dwight Yu</Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
