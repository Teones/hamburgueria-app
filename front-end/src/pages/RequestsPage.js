import { useNavigate } from "react-router-dom"


import '../css/RequestsPage.css'
export default function Requests(){
    return(
        <div className="requests">
            <Header />
        </div>
    )
}

function Header() {
    const navigate = useNavigate()
    return(
        <div className="header">
            <ion-icon onClick={() => navigate("/home")} name="arrow-back-outline"></ion-icon>
            <p>Meus Pedidos</p>
        </div>
    )
}