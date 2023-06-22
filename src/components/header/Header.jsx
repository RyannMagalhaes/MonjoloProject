import "../../css/header.css"
import logo from "../../images/logo.jpg"

export default function Header() {

    return (
        <header className="header1">
            <nav>
                <ul>
                    <li><a href="#diferencial">Diferencial</a></li>
                    <li><a href="#catalogo">Catálogo</a></li>
                    <li><a href="#quemsomos">Quem somos</a></li>
                    <li>
                        <img src={logo}alt="" />
                    </li>
                    <li><a href="#depoimentos">Depoimentos</a></li>
                    <li><a href="#compre">Compre</a></li>
                    <li><a href="#contato">Contato</a></li>
                </ul>
            </nav>
        </header>
    )
}