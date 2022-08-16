import { Link } from "react-router-dom"

import logo from "../assepts/burger.png"

import "../css/MainPage.css"

export default function MainPage() {
    return (
        <div className="mainPage">
            <Background />
            <IdentidadeVisual />
            <Descricao />
            <Botoes />
        </div>
    )
}

function Background () {
    return (
        <div className="background"></div>
    )
}

function IdentidadeVisual() {
    return (
        <div className="identidadeVisual">
            B7 • Burger
            <img src={logo} alt="logo" />
        </div>
    )
}

function Descricao () {
    return (
        <div className="descricao">
            O Hamburguer mais <br /> delicioso da sua Cidade!
            <div className="caminho">
                Logou
                <ion-icon name="arrow-forward-outline"></ion-icon>
                Pediu
                <ion-icon name="arrow-forward-outline"></ion-icon>
                Chegou
            </div>
        </div>
    )
}

function Botoes () {
    return (
        <div className="botoes">
            <Link style={{ textDecoration: 'none' }} to={"/sign-in"}><button>Fazer Login</button></Link>
            <Link style={{ textDecoration: 'none' }} to={"/home"}><button className="cardapio">Ver Cardápio</button></Link>
        </div>
    )
}