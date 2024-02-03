import { Analytics, Chat, Dashboard, Reviews, Wallet } from '@mui/icons-material'
import React from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import OrderDetails from '../pages/OrderDetails'
import Orderlist from '../pages/Orderlist'
import Customer from '../pages/Customer'
import Food from '../pages/Food'
import FoodDetails from '../pages/FoodDetails'
import Calendar from '../pages/Calender'
import CustomerDetails from '../pages/CustomerDetails'
import Layout from './Layout'



const router = createBrowserRouter(
    createRoutesFromElements(
     
        <Route  element={<Layout/>}>                
           <Route path="/"  element={<Dashboard/>}/>
           <Route path='/orderlist' element={<Orderlist/>}/>
           <Route path='/orderdetail' element={<OrderDetails/>}/>
           <Route path='/customer' element={<Customer/>}/>
           <Route path='analytics' element={<Analytics/>}/>
           <Route path='/reviews' element={<Reviews/>}/>
           <Route path="/foods" element={<Food />}/>
           <Route path='/fooddetails'element={<FoodDetails/>} />
           <Route path='/customerdetails' element={<CustomerDetails/>}/>
           <Route path='/calendar' element={<Calendar/>}/>
           <Route path='/chat' element={<Chat/>}/>
           <Route path='/wallet' element={<Wallet/>}/>
            </Route>
    )
)

const RouterApp = () => {
   
  return (
  <>
  <RouterProvider router = {router}/>
  
  </>
  )
}

export default RouterApp