import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import UserContext from "../contexts/userContext"

import "../css/CartPage.css"

export default function Cart ({cart}) {
    const [total, setTotal] = useState( 
        cart.totalPrice ?
            Number(cart.totalPrice).toFixed(2) : 0
        )

    return (
        <div className="cart">
            <Header />
            <div className="divHorizontal"></div>
            <p className="length">{cart.order.length} itens</p>
            <div className="divHorizontal"></div>
            {cart.order.length > 0 ?
                <>
                    <Products cart={cart} setTotal={setTotal} />
                    <Abstract total={total} cart={cart} />
                </>
                : ""
            }
        </div>
    )
}

function Header () {
    const navigate = useNavigate()

    return (
        <div className="header">
            <ion-icon onClick={() => navigate("/home")} name="arrow-back-outline"></ion-icon>
            <p>Carrinho</p>
        </div>
    )
}

function Products ({cart, setTotal}) {
    console.log(cart)
    return (
        <div className="products">
            {cart.order.map((product) => <Product key={product.menuId} id={product.menuId} 
            image={product.image} subCategory={product.subCategory} cart={cart} setTotal={setTotal}
            amount={product.amount} name={product.name} price={product.price} />)}
        </div>
    )
}

function Product ({id, image, amount, name, subCategory, price, cart, setTotal}) {
    const [quantidade, setQuantidade] = useState(amount)
    const navigate = useNavigate()

    function valor (valor, operacao) {
        if (valor >= 0) {
            for (let i = 0; i < cart.order.length; i++) {
                console.log(cart.order[i].menuId, id, cart.order[i].menuId === id)
                if (cart.order[i].menuId === id) {
                    cart.order[i].amount = valor
                    cart.totalPrice = operacao === "-" ?
                        Number(cart.totalPrice) - Number(price) 
                        : Number(cart.totalPrice) + Number(price);
                    }
            }
            setQuantidade(valor)
            setTotal(cart.totalPrice.toFixed(2))
        }
    }

    return (
        <>
        <div className="product">
            <img onClick={() => navigate(`/product/${id}`)} src={image} alt="product" />
            <div className="infos" onClick={() => navigate(`/product/${id}`)}>
                <p className="subCategory">{subCategory}</p>
                <p className="name">{name}</p>
                <p className="price">{`R$ ${(quantidade * price).toFixed(2)}`}</p>
            </div>
            <div className="buttons">
            <button className="decrementar" onClick={() => valor(quantidade-1, "-")}>-</button>
                <div className="amount">{quantidade}</div>
            <button className="incrementar" onClick={() => valor(quantidade+1, "+")}>+</button>
            </div>
        </div>
        <div className="divHorizontal"></div>
        </>
    )
}

function Abstract ({total, cart}) {
    const {user} = useContext(UserContext)
    function submit () {
        const url = "http://localhost:5000/cart"
        const body = {... cart}
        const config = {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        }
        const promise = axios.post(url, body, config)
        promise.then( response => {
            const {data} = response
            console.log(data)
        })
        promise.catch(err => {
            console.log(`Erro ${err.response.status}, ${err.response.data.message} `)
        })
    }

    return (
        <div className="abstract">
            <div className="details">
                <div className="order">
                    <p>SubTotal</p>
                    <p>Frete</p>
                </div>
                <div className="prices">
                    <p>R$ {total}</p>
                    <p>--</p>
                </div>
            </div>
            <div className="divPontilhada"></div>
            <div className="total">
                <p>Total</p>
                <p className="valor">R$ {total}</p>
            </div>
            <button onClick={() => submit()} >Confirmar Pedido</button>
        </div>
    )
}