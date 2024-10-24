import React, { useEffect, useState } from 'react'
import Card from './Card'

export default function MemoryGame() {
  const cardsData = [
    { id: 1, value: '🐶' },
    { id: 2, value: '🐱' },
    { id: 3, value: '🐭' },
    { id: 4, value: '🐹' },
    { id: 5, value: '🐰' },
    { id: 6, value: '🦊' },
    { id: 7, value: '🐻' },
    { id: 8, value: '🐼' }
  ]
  const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);
  const [cards, setCards] = useState(shuffleArray(cardsData));
  const [flippedCards, setFlippedCards] = useState([]);
  const [moves, setMoves] = useState(0);
  const [matchedCards, setMatchedCards] = useState([]);
  useEffect(() => {
    setCards(shuffleArray(cardsData));
  }, []);
  const handleReset = () => {
    setCards(shuffle(cards))
  }

  const handleCardClick = (id) => {
    console.log('Card clicked:', id)
  }

  const shuffle = (array) => {
    return array.sort(() => Math.random() - 0.5)
  }
  const restartGame = () => {
    setCards(shuffleArray(cardsData));
    setFlippedCards([]);
    setMatchedCards([]);
    setMoves(0);
  };
  const flipCard = (id) => {
    const newFlipped = [...flippedCards, id];
    setFlippedCards(newFlipped);
    if (newFlipped.length === 2) {
      setMoves(moves + 1);
      const [firstCard, secondCard] = newFlipped.map(id => cards.find(card => card.id === id));
      if (firstCard.value === secondCard.value) {
        setMatchedCards([...matchedCards, firstCard.id, secondCard.id]);
        setFlippedCards([]);
      } else {
        setTimeout(() => setFlippedCards([]), 1000);
      }
    };
  }


  return (
    <>
      <div>

        <div>
          {cards.map(card => (
            <Card
              key={card.id}
              card={card}
              isFlipped={flippedCards.includes(card.id) || matchedCards.includes(card.id)}
              onClick={() => flipCard(card.id)}
            />
          ))}
        </div>
        <button
          onClick={restartGame}
        >
          Restart Game
        </button>
      </div>
    </>
  )
}