import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cards: [],
    victory: false
}

function isFound({ cards, id, img }) {
    return cards.find( card => card.img === img && !card.isFound && card.isFlipped && card.id !== id)
}

const cardsSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {
        addCard: (state, action) => {
            if(!state.cards?.find( card => card.id ===  action.payload.id)) {
                state.cards.push(action.payload)
            }
        },
        setCards: (state, action) => {
            state.cards = action.payload.sort( () => Math.random() - 0.5)
        },
        reset: (state) => {
            state.cards = state.cards
                .map( card => ({ ...card, isFlipped: false, isFound: false }))
                .sort( () => Math.random() - 0.5)
            state.victory = false
        },
        flip: (state, action) => {
            const { id } = action.payload
            const current = state.cards.find( card => card.id === id)
            if( current.isFound ) { return }
            const img = current.img
            const found = isFound({ cards: state.cards, id, img })
            current.isFlipped = true
            if(found) {
                current.isFound = true
                found.isFound = true
            }
            state.victory = state.cards.every( card => card.isFound)
            state.cards
                .filter( card => !card.isFound && card.id !== id)
                .forEach( card => card.isFlipped = false )
        }
    }
});


export const { addCard, setCards, flip, reset } = cardsSlice.actions

export default cardsSlice.reducer