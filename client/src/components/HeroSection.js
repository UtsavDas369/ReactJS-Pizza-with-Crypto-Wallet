import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import styles from './HeroSection.module.css'

const HeroSection = () => {
  return (
    <div className="mx-5 px-5">
      <Row className='d-flex align-items-center'>
        <Col md={6}>
          <h1 className='text-capitalize font-weight-bold'>
            Hungry huh? Grab <br /> a pizza 
          </h1>

          <p className='mb-4'>
          Pizza is an Italian dish consisting of a usually round,
           flattened base of leavened wheat-based dough topped with tomatoes,
            cheese, and often various other ingredients, which 
          is then baked at a high temperature, traditionally in a wood-fired oven.
          </p>
          <Button className="btn custom-btn">Find Foods</Button>
        </Col>

        <Col md={6} className={styles.hero_bg}></Col>
      </Row>
    </div>
  )
}

export default HeroSection
