import { useRef } from "react";

function AddAlunno({dispatch}) {
    const nomeRef = useRef()
    const cognomeRef = useRef()

    function handleClick(event) {
        const alunno = nomeRef.current.value + " " + cognomeRef.current.value
        dispatch({type: 'ADD_ALUNNO', payload: alunno})
        nomeRef.current.value = ""
        cognomeRef.current.value = ""
    }

    return <>
        <label>Inserisci il nome dell'alunno</label>
        <input type="text" id="nome" ref={nomeRef} placeholder="nome" />
        <input type="text" id="cognome" ref={cognomeRef} placeholder="cognome"/>
        <button onClick={handleClick}>Aggiungi</button>
        <br/>
    </>
}

export default AddAlunno;