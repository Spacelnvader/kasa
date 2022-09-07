import { useState } from "react"
import "./Gallery.css"
import arrowLeft from "../../assets/arrow_left.png"
import arrowRight from "../../assets/arrow_right.png"


/**
 *
 * @param {Object} props
 * @param {Array} props.pictures Tableau contenant les photos du logement
 * @returns Le carrousel des photos du logement
 */

//On utilise ici aussi un State pour traquer l'état de notre index (savoir quelle photo est affichée)
function Gallery({ pictures }) {
    let [index, setIndex] = useState(0)

    function next() {
        // on incrémente l'index de 1 avec la fonction Next et on le réinitialise s'il arrive à 4/4 ou 5/5
        index++
        if (index >= pictures.length) index = 0
        setIndex(index)
    }
    function prev() {
        index--
        if (index < 0) index = pictures.length - 1
        setIndex(index)
    }

    function showButtons() {
        return (
            <div className="navigation">
                <img
                //l'image arrowleft sert de bouton pour déclencher la fonction prev
                    src={arrowLeft}
                    className="arrowLeft"
                    onClick={prev}
                    alt="Précédente"
                />
                <p>
                    {index + 1}/{pictures.length}
                </p>
                <img
                // l'image arrowRight sert de bouton pour délencher la fonction next
                    src={arrowRight}
                    className="arrowRight"
                    onClick={next}
                    alt="Suivante"
                />
            </div>
        )
    }

    return (
        <div
            className="slider"
            style={{
                backgroundImage: `url("${pictures[index]}")`,
            }}
        >
            {/* cet opérateur ternaire nous permettra de ne pas afficher le retour de la fonction showButton si notre tableau d'image ne dépasse pas 1 */}
            {pictures.length > 1 ? showButtons() : ""}
        </div>
    )
}

export default Gallery