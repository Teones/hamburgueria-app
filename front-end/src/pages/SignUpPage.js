import { useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"

import "../css/SignUpPage.css"
import { Link } from "react-router-dom"

export default function SignUp () {
    return (
        <div className="sign-up">
            <Link to={"/sign-in"}>
                <div className="icone"><ion-icon name="arrow-back-outline"></ion-icon></div>
            </Link>
            <Header />
            <Cadastro />
        </div>
    )
}

function Header () {
    return (
        <div className="header">
            <h1>B7 <b>•</b> Burger</h1>
            <div className="descricao">
            Preencha os campos <br /> para criar o seu cadastro.
            </div>
            <div className="divisoria">
                <div className="centralizada"></div>
            </div>
        </div>
    )
}

function Cadastro () {
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    const [esconder, setEsconder] = useState(true)
    let icone
    let valor
    if (esconder) {
        icone = "eye-off-outline"
        valor = "password"
    } else {
        icone = "eye-outline"
        valor = "text"
    }

    const naviagate = useNavigate()
    function login (event) {
        event.preventDefault()

        const url = "http://localhost:5000/sign-up"
        const body = {
            name: nome,
            email: email,
            password: senha
        }
        const promise = axios.post(url, body)
        promise.then(response => {
            const {data} = response
            console.log(data)
            naviagate("/")
        })
        promise.catch(error => {
            console.log(error)
            alert("Ops! Infelizmente ocorreu um erro! Tente novamente!")
        })
    }

    return (
        <>
        <form onSubmit={login}>
            <input type="text" value={nome} placeholder="Digite seu nome" onChange={e=> setNome(e.target.value)} required />
            <input type="email" value={email} placeholder="Digite seu e-mail" onChange={e => setEmail(e.target.value)} required />
            <input type={valor} value={senha} placeholder="Digite sua senha" onChange={e => setSenha(e.target.value)} required />
            <div className="icone" onClick={() => setEsconder(!esconder) }>
                <ion-icon name={icone}></ion-icon>
            </div>

            <button type="submit">Cadastrar</button>
        </form>

        <Link to={"/sign-in"} style={{ textDecoration: 'none' }}>
        <div className="login">
            Já tem cadastro? <b>Fazer Login</b>
        </div>
        </Link>
        </>
    )
}