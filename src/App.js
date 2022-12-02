//dependencias necesarias
import { useState } from "react";
//data
import Resenias from "./data/Resenias";
//componentes
//import Header from "./componentes/Header";
import ReseniaList from "./componentes/ReseniaList";
import FormResenia from "./componentes/FormResenia";

function App() {

    //crear estado inicial para arreglo de resenias
    const [lista_resenias,
        setListaResenias] = useState(Resenias)

    //metodo para borrar una resenia:
    const deleteResenia = id => {
        if (window.confirm("estas seguro de borrar la resenia")) {
            setListaResenias(lista_resenias.filter((resenia) => resenia.id !== id))
        }
    }
    // metodo para añadir la reseña al arreglo
    const addResenia = (newResenia) =>{
        newResenia.id = lista_resenias.length+1;
        setListaResenias([newResenia, ...lista_resenias ]);
    }

    return (
        <div className="container">
            <FormResenia
                addResenia= {addResenia}
            />
            <ReseniaList
                deleteResenia={deleteResenia}
                listaresenias={lista_resenias} />
        </div>
    )
}
export default App;