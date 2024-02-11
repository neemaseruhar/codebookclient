import React from 'react'
import { useLocation } from 'react-router-dom';
import { OrderSuccess } from './componenets/OrderSuccess'
import { OrderFail } from './componenets/OrderFail';

export const OrderPage = () => {
    const {state} = useLocation();
    return (
      <>
      
      {state.status ? <OrderSuccess data={state.data}/> : <OrderFail />}
      </>
    )
}
