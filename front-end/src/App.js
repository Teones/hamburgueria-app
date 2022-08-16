import { useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

import MainPage from './pages/MainPage'
import SignIn from './pages/SignInPage'
import SignUp from './pages/SignUpPage'
import Home from './pages/HomePage'
import Product from './pages/ProductPage'
import Menu from './pages/MenuPage'
import Cart from './pages/CartPage'

import Requests from './pages/RequestsPage'
import Favorites from './pages/FavoritesPage'
import Config from './pages/ConfigPage'

import UserContext from './contexts/userContext'

import "./css/styles.css"
import "./css/reset.css"

export default function App () {
    const [user, setUser] = useState(
        localStorage.length !== 0 ?
            JSON.parse(localStorage.getItem("list")) :
            {}
        );
    let cart = {
        order: []
    }
    return (
        <UserContext.Provider value={{user, setUser}}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<MainPage />} />
                    <Route path='/sign-in' element={<SignIn />} />
                    <Route path='/sign-up' element={<SignUp />} />
                    <Route path='/home' element={<Home />} />
                    <Route path='/product/:id' element={<Product cart={cart} />} />
                    <Route path='/menu' element={<Menu />} />
                    <Route path='/cart' element={<Cart cart={cart} />} />

                    <Route path='/requests' element={<Requests />} />
                    <Route path='/favorites' element={<Favorites />} />
                    <Route path='/config' element={<Config />} />
                </Routes>
            </BrowserRouter>           
        </UserContext.Provider>
    )
}