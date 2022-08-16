import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import UserContext from "../contexts/userContext"

import "../css/MenuPage.css"

export default function Menu () {
    const {user} = useContext(UserContext);
    return (
        <div className="menu">
            <Header name={user.name} />
            <Options name={user.name} />
        </div>
    )
}

function Header ({name}) {
    const navigate = useNavigate()
    return (
        <div className="header">
            {name ? 
            <p>{name}</p> :
            <button onClick={() => navigate("/sign-in")}>Fazer Login</button>
            }
            <ion-icon name="close-sharp" onClick={() => navigate("/home")} ></ion-icon>
        </div>
    )
}

function Options ({name}) {
    const options = [
        {name: "Cardápio", icone: <ion-icon name="restaurant-outline"></ion-icon>, route: "/home"},
        {name: "Carrinho", icone: <ion-icon name="cart-outline"></ion-icon>, route: "/cart"},
        {name: "Favoritos", icone: <ion-icon name="heart-outline"></ion-icon>, route: "/favorites"},
        {name: "Meus Pedidos", icone: <ion-icon name="newspaper-outline"></ion-icon>, route: "/requests"},
        {name: "Configurações", icone: <ion-icon name="construct-outline"></ion-icon>, route: "/config"}
    ]
    return (
        <div className="options">
            <div className="divisoria"><div className="divisoria"></div></div>
            {options.map((option) => <Option 
                name={option.name} icone={option.icone} route={option.route} user={name} key={option.name} />
            )}
        </div>
    )
}

function Option ({name, icone, route, user}) {
    const navigate = useNavigate()
    return (
        <>
        {user ?
            <div className="option" onClick={() => navigate(route)}>
                {icone}
                {name}
            </div> :
            name !== "Favoritos" && name !== "Meus Pedidos" ? 
            <div className="option" onClick={() => navigate(route)}>
                {icone}
                {name}
            </div> : 
            <></>
        }
        </>
    )
}