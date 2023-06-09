import React from 'react'
import { Row, Col, Image } from 'react-bootstrap'
import deliveryIcon from '../assets/icons/fast-delivery-icon.png'
import orderPlace from '../assets/icons/order-success.png'
import worldwide from '../assets/icons/worldwide-delivery.png'
import courier from '../assets/icons/courier-services.png'
import styles from './AwesomeFeatures.module.css'

const AwesomeFeatures = () => {
  return (
    <div className='mx-5 px-5 my-5'>
      <Row className='mb-5'>
        <Col md={12} className='text-center'>
          <h1 className='font-weight-bold'>
            Just Relax at Home , <br /> we will take care.
          </h1>
          <p>
            Just sit back and relax. We will take care of your pizza needs.
          </p>
        </Col>
      </Row>
      <Row>
        <Col md={3}>
          <div className={`${styles.feature_image} p-5 text-center`}>
            <Image fluid src={deliveryIcon} />
            <h4 style={{ fontWeight: 900 }} className='mb-3'>
              Fast delivery in 1 hour with our ninja's
            </h4>
            <p>Get the fastest delivery</p>
          </div>
        </Col>
        <Col md={3}>
          <div className={`${styles.feature_image} p-5 text-center`}>
            <Image fluid src={orderPlace} />
            <h4 style={{ fontWeight: 900 }} className='mb-3'>
              Stay Safe and order via the web during the pandemic
            </h4>
            <p>We follow the guidlines to give safe delivery during this COVID 19</p>
          </div>
        </Col>
        <Col md={3}>
          <div className={`${styles.feature_image} p-5 text-center`}>
            <Image fluid src={worldwide} />
            <h4 style={{ fontWeight: 900 }} className='mb-3'>
              Fresh and Healthy Pizzas delivered at your doorstep
            </h4>
            <p>Safe and sercure delivery</p>
          </div>
        </Col>
        <Col md={3}>
          <div className={`${styles.feature_image} p-5 text-center`}>
            <Image fluid src={courier} />
            <h4 style={{ fontWeight: 900 }} className='mb-3'>
              More than  150+ Couriers
            </h4>
            <p>WorldWide Shop Locations</p>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default AwesomeFeatures
