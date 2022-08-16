import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import UserContext from "../contexts/userContext";

import "../css/HomePage.css"

export default function Home () {
    const {user} = useContext(UserContext);
    return (
        <div className="home">
            <Header name={user.name} />
            {/* <Promocao /> */}
            <Menu />
        </div>
    )
}

function Header({name}) {
    const navigate = useNavigate()
    return (
        <div className="header">
            <div className="boas-vindas">
                Seja Bem-Vindo {name ? name : "" } 👋
                <p>O que deseja para hoje?</p>
                <div className="icone" onClick={() => navigate("/menu")}>
                    <ion-icon name="menu-sharp"></ion-icon>
                </div>
            </div>
        </div>
    )
}

// function Promocao () {
//     return (
//         <div className="promocao">
//             <div className="produto">
//                 <div className="tag">Promoção</div>
//                 <p className="titulo">Combo 1</p>
//                 <p className="subtitulo">2 Old Burger por apenas:</p>
//                 <p className="preco">R$ 35,50</p>
//             </div>

//             <div className="fundoLaranja"></div>
//         </div>
//     )
// }

function Menu () {
    const [menu, setMenu] = useState({})
    const [search, setSearch] = useState()
    
    useEffect(() => {
        const url = "http://localhost:5000/menu"
        const promise = axios.get(url)
        promise.then(response => {
            const {data} = response
            setMenu(data)
        })
        promise.catch(err => {
            console.log(err)
            alert(`Erro ${err.response.status}, ${err.response.data.message} `)
        })
    }, [])
    
    return (
        <>
        <div className="pesquisa">
            <input type="text" placeholder="Digite o nome do Burger" 
                value={search} onChange={e => setSearch(e.target.value)}/>
            <ion-icon name="search-outline"></ion-icon>
        </div>

        {menu.length ?
        <div className="menu">
            {menu.map((opcao) => <Opcao id={opcao.id}
                image={opcao.image} name={opcao.name} key={opcao.id}
                price={opcao.price} subCategory={opcao.subCategory}
            />)}
        </div> 
        :
        "carregando"
        }
        </>
    )
}

function Opcao ({id, image, name, price, subCategory}) {
    const navigate = useNavigate()
    return (
        <div className="opcao" onClick={() => navigate(`/product/${id}`)} >
            <img src={image} alt="option" />
            <p className="categoria">{subCategory}</p>
            <p className="titulo">{name}</p>
            <p className="preco">R$ {price}</p>
        </div>
    )
}