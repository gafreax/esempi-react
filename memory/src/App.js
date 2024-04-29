import { useDispatch, useSelector } from "react-redux";

import Card from "./Components/Card/Card";

import { setCards, reset } from "./store/cardsSlice"; 

import "./assets/styles/index.css";
import { useEffect } from "react";

function buildCardState({id, img}) {
  return { id, img, isFlipped: false, isFound: false }
}

function getRandomInt({images, max}) {
  const isDuplicate = (num) => images?.some(i => i.img === num);

  let rnd = Math.floor(Math.random() * max);
  while (isDuplicate(rnd)) {
    rnd = Math.floor(Math.random() * max);
  }
  return rnd;
}

function generateCards(count) {
  let images = []
  while(images.length < count) {
    const rnd = getRandomInt({images, max: 255})
    images.push(buildCardState({ id: images.length, img: rnd }))
    images.push(buildCardState({ id: images.length, img: rnd }));
  }
  return images
}

function cardsView(cards) {
  if(cards) {
    return <div className="cards">
      {cards.map( card => <Card key={card.id} id={card.id}/> )}
    </div>
  }
}

function victoryView(handleReset) {
  return <>
    <h1>Congratulations!</h1>
    <button onClick={handleReset}>Play Again</button>
  </>
}

function App() {
  const dispatch = useDispatch();
  const cardsState = useSelector((state) => state.cards);
  const victory = cardsState.victory;

  useEffect(() => {
    if(cardsState.cards.length === 0) {
      const cards = generateCards(6);
      dispatch(setCards(cards))
    }
  }, [dispatch, cardsState.cards.length])

  function handleReset() {
    dispatch(reset())
  }

  return <>
    <div className="container"><h1>Memory</h1></div>
    <div className="container">
      { victory ? victoryView(handleReset) : cardsView(cardsState?.cards) }
    </div>
  </>;
}

export default App;
