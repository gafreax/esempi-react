import React, { useReducer } from 'react';

import AddAlunno from './AddAlunno';
import Alunni from './Alunni';
import RenameClasse from './RenameClasse';

const initialState = {
  alunni: ["gabriele", "sossio"],
  classe: "3B"
};

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_ALUNNO':
      return {
        alunni: [...state.alunni, action.payload]
      };
    case 'RENAME_CLASSE':
      return {
        ...state,
        classe: action.payload
      };
    case 'DELETE_ALUNNO':
      return {
        alunni: state.alunni.filter(alunno => alunno !== action.payload)
      };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <>
    <h1>Alunni</h1>
    <RenameClasse dispatch={dispatch} classe={state.classe}/>
    <AddAlunno dispatch={dispatch}/>
    <Alunni reducer={[state,dispatch]}/>
  </>
}

export default App;
