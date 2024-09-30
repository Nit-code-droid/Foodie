import React, { useContext, useState } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../Context/StoreContext'

const PlaceOrder = () => {
  const{getTotalCartAmount,token,food_list,cartItems,url}=useContext(StoreContext)
  const [data,setData]=useState({
    firstName:"",
    lastName:"",
    email:"",
    street:"",
    city:"",
    state:"",
    zipcode:"",
    country:"",
    phone:"",
  })

  const onChangeHandler=(event)=>{
    const name=event.target.name;
    const value=event.target.value;
    setData(data=>({...data,[name]:value}))
  }

  

  

  
  return (
    <form  className='place-order'>
      <div className="place-order-left">
        <b className="title">
          Delivery Information
        </b>
        <div className="multi-fields">
          <input name="firstName" onChange={onChangeHandler} value={data.firstName} type="text" placeholder='First Name' required/>
          <input   name="lastName" onChange={onChangeHandler} value={data.lastName} type="text" placeholder='Last Name'required/>
        </div>
        <input  name="email" onChange={onChangeHandler} value={data.email}  type="Email"  placeholder='Email address' required/>
        <input  name="street" onChange={onChangeHandler} value={data.street}  type="text" placeholder='Street'required/>
        <div className="multi-fields">
          <input  name="city" onChange={onChangeHandler} value={data.city}  type="text" placeholder='City' required/>
          <input  name="state" onChange={onChangeHandler} value={data.state}  type="text" placeholder='State' required/>
        </div>
        <div className="multi-fields">
          <input  name="zipcode" onChange={onChangeHandler} value={data.zipcode}  type="text" placeholder='Zip code' required/>
          <input  name="country" onChange={onChangeHandler} value={data.country}   type="text" placeholder='Country' required/>
        </div>
        <input  name="phone" onChange={onChangeHandler} value={data.phone}   type='text' placeholder='Phone' required/>
      </div>
      
    <div className="place-order-right">
    <div className="cart-total">
          <div>
          <div className="cart-total-details">
              <p>
                   Subtotal
              </p>
              <p>
                    {getTotalCartAmount()}
              </p>
            </div>
            <hr />
            <div className="cart-total-details">
            <p>
                   Delivery Fee
              </p>
              <p>
                    {getTotalCartAmount()===0?0:2}
              </p>
              </div>
              <hr />
            <div className="cart-total-details">
            <b>
                   total
              </b>
              <b>
                    {getTotalCartAmount()===0?0:getTotalCartAmount()+2}
              </b>
              </div>
          
        </div>
          <button type='submit' >Proceed to Payment</button>
        </div>

    </div>
    </form>
  )
}

export default PlaceOrder