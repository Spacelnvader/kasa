import "./Dropdown.css"
import arrowDown from "../../assets/arrow_down.png"
import arrowUp from "../../assets/arrow_up.png"
import { useState } from "react"

/**
 * @param {Object} props
 * @param {String} props.title obligatoire
 * @param {String | Array} props.text une chaine ou un tableau d'éléments JSX
 * @param {String} [props.extraClass]
 * @component
 * https://fr.reactjs.org/docs/hooks-overview.html
 */
function Dropdown({ title, text, extraClass }) {
    const [dropdownOpened, setDropdownOpened] = useState(false)

    return dropdownOpened ? (
        <div className={extraClass ? "dropdown " + extraClass : "dropdown"}>
            <div className="dropdown_header">
                <h3>{title}</h3>
                <img
                    src={arrowUp}
                    alt="Cacher contenu"
                    onClick={() => setDropdownOpened(false)}
                />
            </div>
            {typeof text === "object" ? convertArray(text) : <p>{text}</p>}
        </div>
    ) : (
        <div className="dropdown">
            <div className="dropdown_header">
                <h3>{title}</h3>
                <img
                    src={arrowDown}
                    alt="Afficher contenu"
                    onClick={() => setDropdownOpened(true)}
                />
            </div>
        </div>
    )
}

function convertArray(arr) {
    return (
        <ul>
            {arr.map((equipment) => (
                <li key={equipment}>{equipment}</li>
            ))}
        </ul>
    )
}

export default Dropdown