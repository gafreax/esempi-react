
import { useDispatch, useSelector } from 'react-redux'

import { flip } from '../../store/cardsSlice'

import './Card.css'

function Card({id}) {
    const cardState = useSelector(state => state.cards.cards.find( card => card.id === id))
    const dispatch = useDispatch()
    
    const image =`https://picsum.photos/id/${cardState?.img}/200/300`

    function handleFlip(e) {
        if((e.type === "keyup" && e.key === "Enter") || e.type === "click") {
            dispatch(flip({id}))
        }
    }

    return <div tabIndex="0" role="button" className="card" onClick={handleFlip} onKeyUp={handleFlip}>
        { cardState?.isFlipped && <img src={image} alt={`${cardState?.img}`} title={`image ${cardState?.img}`} /> }
    </div>
}

export default Card