// import React, { useState } from 'react'
// import { Form, Button, Col } from 'react-bootstrap'
// import { useDispatch, useSelector } from 'react-redux'
// import FormContainer from '../components/FormContainer'
// import { savePaymentMethod } from '../actions/cartActions'
// import CheckoutSteps from '../components/CheckoutSteps'
// import { motion } from 'framer-motion'

// const PaymentScreen = ({ history }) => {
//   window.scrollTo(0, 0)
//   const cart = useSelector((state) => state.cart)
//   const { shippingAddress } = cart

//   if (!shippingAddress.address) {
//     history.push('/shipping')
//   }

//   const [paymentMethod, setPaymentMethod] = useState('PayPal')

//   const dispatch = useDispatch()

//   const submitHandler = (e) => {
//     e.preventDefault()
//     dispatch(savePaymentMethod(paymentMethod))
    
//     history.push('/placeorder')
//   }

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 0.6 }}
//     >
//       <FormContainer>
//         <CheckoutSteps step1 step2 step3 />
//         <h1 className='text-center'>Payment Method</h1>
//         <Form onSubmit={submitHandler} className='text-center'>
//           <Form.Group>
//             <Form.Label as='legend'>Payment Method (Recommended)</Form.Label>
//             <Col className='pl-0'>
//               <Form.Check
//                 type='radio'
//                 label='Cash On Delivery'
//                 id='PayPal'
//                 name='paymentMethod'
//                 value='PayPal'
//                 checked
//                 onChange={(e) => setPaymentMethod(e.target.value)}
//                 className='pl-0'
//                 style={{ fontSize: '18px' }}
//               ></Form.Check>
//             </Col>
//           </Form.Group>
//           <Button type='submit' variant='primary'>
//             Continue
//           </Button>
//         </Form>
//       </FormContainer>
//     </motion.div>
//   )
// }


import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useState } from "react";
import { ethers } from "ethers";
import ErrorMessage from "./ErrorMessage";
import TxList from "./TxList";
// // import Adoption from '../contracts/pizza.json';
import Web3 from "web3";

import { useDispatch, useSelector } from 'react-redux'
// export const initWeb3 = createAsyncThunk(
//     "InitWeb3",
//     async (a, thunkAPI) => {
//         // console.log("in init web3 = ", a);
//         // console.log("in init web3 = ", thunkAPI);
//         // console.log("init web3 = ", thunkAPI.dispatch);
//         try {
//             if (Web3.givenProvider) {
//                 const web3 = new Web3(Web3.givenProvider);
//                 //web3.eth
//                 await Web3.givenProvider.enable();

//                 const networkId = await web3.eth.net.getId();
//                 const network = Adoption.networks[networkId];
//                 const contract = new web3.eth.Contract(Adoption.abi, network.address);
//                 const addresses = await web3.eth.getAccounts();
               
//                 return {
//                     web3,
//                     contract: contract,
//                     address: addresses[0]
//                 };
//             }
//             else {
//                 console.log("Error in loading web3");
//             }
//         }
//         catch (error) {
//             console.log("Error in loading Blockchain = ", error);
//         }

//     }
// )



const startPayment = async ({ setError, setTxs, ether, addr }) => {
  try {
    if (!window.ethereum)
      throw new Error("No crypto wallet found. Please install it.");

    await window.ethereum.send("eth_requestAccounts");
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    ethers.utils.getAddress(addr);
    const tx = await signer.sendTransaction({
      to: addr,
      value: ethers.utils.parseEther(ether)
    });
    console.log({ ether, addr });
    console.log("tx", tx);
    setTxs([tx]);
  } catch (err) {
    setError(err.message);
  }
};

export default function App() {
  
 
  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart
  const [error, setError] = useState();
  const [txs, setTxs] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    setError();
    await startPayment({
      setError,
      setTxs,
      ether: data.get("ether"),
      addr: data.get("addr")
    });
  };
  function completed() {
 
    alert("Order Placed!!!");
  }
  return (
    <form className="m-4" onSubmit={handleSubmit}>
      <div className="credit-card w-full lg:w-1/2 sm:w-auto shadow-lg mx-auto rounded-xl bg-white">
        <main className="mt-4 p-4">
          <h1 className="text-xl font-semibold text-gray-700 text-center">
            Payment
          </h1>

          <div className="my-3">
          <h1>Total:{' '}
          {cartItems
                        .reduce((acc, item) => acc + item.qty * item.price, 0)
                        .toFixed(2)} ETH</h1>
            <div className="my-3">
              <input
                type='name'
                name="addr"
                className="blockchain"
                placeholder="Recipient Address"
              />
            </div>
           
            <div className="my-3">
              <input
                name="ether"
                type='name'
                className="blockchain"
                value= {cartItems
                  .reduce((acc, item) => acc + item.qty * item.price, 0)
                  .toFixed(2)}
                placeholder="Amount in ETH"
              />
            </div>
          </div>
        </main>
        <footer className="p-4">
          <button
            type="submit"
            className="btn btn-primary submit-button focus:ring focus:outline-none w-full"
          
          >
            Pay now
          </button>
    
          <ErrorMessage message={error} />
          <TxList txs={txs} />
        </footer>
      </div>
    </form>
  );
}

