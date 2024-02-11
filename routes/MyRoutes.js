import React from 'react';
import{HomePage,ProductsList} from '../pages';
import { Route,Routes } from 'react-router-dom';
import {ProductDetails} from '../pages/ProductDetails';
import { Login } from '../pages/Login';
import { Register } from '../pages/Register';
import {CartPage} from '../pages/Cart/CartPage'
import { ProtectedRoutes } from './ProtectedRoutes';
import {OrderPage} from '../pages/Order/OrderPage';
import { DashboardPage } from '../pages/Dashboard/DashboardPage';
import { PageNotFound } from '../pages/PageNotFound';

export const MyRoutes = () => {
  return (
    <div>
        <Routes >
            <Route  path='/' element={<HomePage />}/>
            <Route  path='/products' element={<ProductsList />}/>
            <Route  path='/products/:product_id' element={<ProductDetails />}/>
            <Route  path='/login' element={<Login />}/>
            <Route  path='/register' element={<Register />}/>
            <Route  path='/cart' element={<ProtectedRoutes><CartPage /></ProtectedRoutes>}/>
            <Route path='/order-summary' element={<ProtectedRoutes><OrderPage /></ProtectedRoutes>} />
            <Route path='/dashboard' element={<ProtectedRoutes><DashboardPage /></ProtectedRoutes>} />
            <Route path='*' element={<PageNotFound />} />
        </Routes>
    </div>
  )
}
