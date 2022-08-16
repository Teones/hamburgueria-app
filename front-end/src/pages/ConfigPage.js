import { useNavigate } from "react-router-dom"


import '../css/ConfigPage.css'
export default function Config(){
    return(
        <div className="config">
            <Header />
            <Configurations />
        </div>
    )
}

function Header() {
    const navigate = useNavigate()
    return(
        <div className="header">
            <ion-icon onClick={() => navigate("/home")} name="arrow-back-outline"></ion-icon>
            <p>Configurações</p>
        </div>
    )
}

function Configurations(){
    return(
        <div className="configurations">
        Em breve vocêpoderá ver as <br/>
        Configurações aqui!
    </div>
    )
}