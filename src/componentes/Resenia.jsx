import { useState } from 'react'
import { FaTimes } from "react-icons/fa";

const Resenia = ({ resenia, deleteResenia }) => {

    //Definir estados iniciales:
    const [rating] = useState(resenia.rating)
    const [comment] = useState(resenia.text)

    return (
        <div className="card">
            <div className="num-display">
                {rating}
            </div>
            <div className="text-display">
                {comment}
            </div>
            <button onClick={() => deleteResenia(resenia.id)} className="close">
                <FaTimes />
            </button>
        </div>
    )
}
export default Resenia