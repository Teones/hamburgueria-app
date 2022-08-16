import { useNavigate } from "react-router-dom"


import '../css/FavoritesPage.css'
export default function Favorites(){
    return(
        <div className="favorites">
            <Header />
            <MyFavorites />
        </div>
    )
}

function Header() {
    const navigate = useNavigate()
    return(
        <div className="header">
            <ion-icon onClick={() => navigate("/home")} name="arrow-back-outline"></ion-icon>
            <p>Favoritos</p>
        </div>
    )
}

function MyFavorites(){
    return(
        <div className="myFavorites">
        Em breve você poderá ver os seus<br/>
        lanches favoritos aqui!
    </div>
    )
}