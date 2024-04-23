import { useRef } from "react";

function RenameClasse({dispatch, classe}) {
    const inputRef = useRef()

    function handleClick(event) {
        const nome = inputRef.current.value
        dispatch({type: 'RENAME_CLASSE', payload: nome})
    }

    return <>
        <label>Inserisci il nome della classe</label>
        <input type="text" id="classe" ref={inputRef} placeholder={classe} />
        <button onClick={handleClick}>Rinomina</button>
        <br/>
    </>
}

export default RenameClasse;