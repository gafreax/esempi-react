function Alunni({reducer}) {
    const [state, dispatch] = reducer;
    const { alunni, classe } = state;

    function handleRemove(alunno) {
        dispatch({type: 'DELETE_ALUNNO', payload: alunno})
    }
    
    return <>
        <h3>Classe {classe}</h3>
        <ul>
            {alunni.map((alunno, index) => {
                return <li key={`alunno-${index}`}>
                    {alunno}
                    <button onClick={e => handleRemove(alunno)}>x</button>
                </li>
            })}
        </ul>
    </>
}

export default Alunni;