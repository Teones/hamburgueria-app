import { useNavigate, Link } from "react-router-dom"
import { useState, useContext } from "react"
import axios from "axios"

import UserContext from "../contexts/userContext";

import "../css/SignInPage.css"

export default function SignIn () {
    return (
        <div className="signin">
            <Link to={"/"}>
                <div className="icone"><ion-icon name="arrow-back-outline"></ion-icon></div>
            </Link>
            <Header />
            <Login />
            <Cadastro />
        </div>
    )
}

function Header () {
    return (
        <div className="header">
            <h1>B7 <b>•</b> Burger</h1>
            <div className="descricao">
            Use suas credenciais <br /> para realizar o login.
            </div>
            <div className="divisoria">
                <div className="centralizada"></div>
            </div>
        </div>
    )
}

function Login () {
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [esconder, setEsconder] = useState(true)

    const navigate = useNavigate()
    const {setUser} = useContext(UserContext);

    function login (event) {
        event.preventDefault()
        
        const url = "http://localhost:5000/sign-in"
        const body = {
            email: email,
            password: senha
        }
        const promise = axios.post(url, body)
        promise.then(response => {
            const {data} = response
            setUser(data)
            console.log(data)
            navigate("/home")
        })
        promise.catch(error => {
            console.log(error)
            alert("erro, consulte os logs")
        })
    }
    
    let icone
    let valor
    if (esconder) {
        icone = "eye-off-outline"
        valor = "password"
    } else {
        icone = "eye-outline"
        valor = "text"
    }

    return (
        <>
        <form onSubmit={login}>
            <input type="email" value={email} placeholder="Digite seu e-mail" onChange={e => setEmail(e.target.value)} required />
            <input type={valor} value={senha} placeholder="Digite sua senha" onChange={e => setSenha(e.target.value)} required />
            <div className="icone" onClick={() => setEsconder(!esconder) }>
                <ion-icon name={icone}></ion-icon>
            </div>

            <button type="submit">Entrar</button>
        </form>

        <Link to={"/redefinir-senha"} style={{ textDecoration: 'none' }}>
        <div className="redefinirSenha">
            Esqueceu sua senha? <b>Clique aqui</b>
        </div>
        </Link>

        <div className="divisoria">
            <div className="centralizada"></div>
        </div>
        </>
    )
}

function Cadastro() {
    return (
        <button>
            <Link to={"/sign-up"} style={{ textDecoration: 'none', color: "#FB9400" }}>
            Quero me cadastrar
            </Link>
        </button>
    )
}