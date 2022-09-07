import "../style/Page404.css"
import { Link } from "react-router-dom"

export default function Page404() {
    return (
        <section className="page404Section">
            <h6>404</h6>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/" className="backHomeLink">
                Retourner sur la page d'accueil
            </Link>
        </section>
    )
}