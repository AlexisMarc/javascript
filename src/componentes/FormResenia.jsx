import React from 'react'
import Rating from "./Rating";
import { useState } from "react"

export const FormResenia = ({addResenia}) => {

    const [rating, setRating] = useState(10)
    const [text, setText] = useState('')
    const cambiarTexto = (e) => {
        setText(e.target.value)
    }

    const controlSubmit= (e)=>{
        e.preventDefault()
        let newResenia={
            rating,
            text
        }
        console.log(newResenia);
        addResenia(newResenia);
    }

    
    

    return (
        <div className="card" >

            <form onSubmit={controlSubmit}>
                <h2>¿Cómo calificarías el curso?</h2>
                <Rating setRating={setRating} />
                <div className="input-group" >
                    <input type="text" placeholder="Escriba aqui su Resenia" onChange={cambiarTexto} />
                    <button className='btn btn-secondary' type="submit">Registrar</button>

                </div>
            </form>
        </div>
    )
}
export default FormResenia;