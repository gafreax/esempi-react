import React, { useState } from 'react';

function Carta( {carta}) {
    const [state, setState] = useState({carta, flip: false});

    return <div style={{
        backgroundColor: carta.flip ? "green" : "black",
        height: "200px",
        width: "200px",
        borderRadius: "10px",
    }}  onClick={setState({...state,flip: !state.flip})}>
        {carta.flip ? carta.carta : "X"}
    </div>
}

export default Carta;