import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"

import "../css/ProductPage.css"

export default function Product ({cart}) {
    const {id} = useParams()
    const [product, setProduct] = useState(false)
    
    useEffect(() => {
        const url = `http://localhost:5000/menu/${id}`
        const promise = axios.get(url)
        promise.then(response => {
            const {data} = response
            setProduct(data)
        })
        promise.catch(err => {
            console.log(err)
            alert(`Erro ${err.response.status}, ${err.response.data.message} `)
        })
    }, [])

    return (
        <>
        { product ? 
            <div className="produto">
                <Background />
                <Header />
                <img src={product.image} alt="produto" />
                <Infos key={product.id}
                    name={product.name} description={product.description}
                    subCategory={product.subCategory}  
                />
                <Interactions price={product.price} id={id} cart={cart}
                name={product.name} subCategory={product.subCategory} image={product.image}/>
            </div>
                : "carregando"
        }
        </>
    )
}

function Background () {
    return (
        <div className="background"></div>
    )
}

function Header() {
    const [favorite, setFavorite] = useState(false)
    const navigate = useNavigate()
    return (
        <div className="header">
            <div className="caixa-icone" onClick={() => navigate("/home")}>
                <div className="icone">
                    <ion-icon name="arrow-back-outline"></ion-icon>
                </div>
            </div>
             <p>Produto</p>
            <div className="caixa-icone" onClick={() => setFavorite(!favorite)}>
                {favorite ? 
                <ion-icon name="heart-sharp"></ion-icon> :
                <ion-icon name="heart-outline"></ion-icon>
            }
            </div>
        </div>
    )
}


function Infos ({name, description, subCategory}) {
    return (
        <div className="infos">
            <p className="subCategory">{subCategory}</p>
            <p className="name">{name}</p>
            <div className="divisoria"><div className="divisoria"></div></div>
            <p className="description">{description}</p>
        </div>
    )
}

function Interactions ({price, id, cart, subCategory, name, image}) {
    const [quantidade, setQuantidade] = useState(1)
    let valor = (quantidade * price).toFixed(2)


    function addCart () {
        for (let i = 0; i < cart.order.length; i++) {
            if (cart.order[i].menuId === id) {
                cart.order[i].menuId = id
                cart.order[i].amount = quantidade;
                cart.order[i].price = price
                cart.order[i].name = name;
                cart.order[i].subCategory = subCategory;
                cart.order[i].image = image;
                cart.totalPrice = valor
                return
            } else {
                continue
            }
        }
        cart.order.push({menuId: id, amount: quantidade, name, subCategory, image, price})
        cart.totalPrice = cart.totalPrice ? 
        Number(cart.totalPrice) + Number(valor) : valor
    }


    return (
        <div className="interactions">
            Quantidade
            <div className="flex">
                <div className="botoes">
                    <button className="decrementar" onClick={() => setQuantidade(quantidade-1)}>-</button>
                    <div className="quantidade">{quantidade}</div>
                    <button className="incrementar" onClick={() => setQuantidade(quantidade+1)}>+</button>
                </div>
                <div className="valor">R$ {valor}</div>
            </div>
            <button className="submit" onClick={() => addCart()} >Adicionar ao carrinho</button>
        </div>
    )
}