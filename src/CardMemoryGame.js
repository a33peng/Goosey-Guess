import {useEffect, useState} from 'react'
import './CardMemoryGame.css';
import SingleCard from './components/SingleCard'

/* Array of cards */ 
const cardImages = [ 
  //note: all images have same src path
  {"src": "/img/Card 1.png", matched: false},
  {"src": "/img/card-2.png", matched: false},
  {"src": "/img/card-3.png", matched: false},
  {"src": "/img/card-4.png", matched: false},
  {"src": "/img/card-5.png", matched: false},
  {"src": "/img/card-6.png", matched: false}
] 

function CardMemoryGame() {
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  //declaring user's card choices null  
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)

  //Randomize cards 
  const shuffleCards = () => { 
    const shuffledCards=[...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5) // Shuffles the cards randomly 
      .map((card) => ({...card, id: Math.random() })) // assigning random generated IDs to each card 
    setCards(shuffledCards)
    setTurns(0)
  }


  // Update selected card choice 
  const handleChoice = (card) => { 
    // if false/null, then ChoiceOne is updated
    // if true, then ChoiceTwo is updated 
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }
  
  
  //compares the 2 selected cards
  useEffect (() => { 
    if (choiceOne && choiceTwo){ 
      // Update cards state to mark matched cards
      if (choiceOne.src == choiceTwo.src){ 
        setCards(preCards => { 
          return preCards.map(card => { 
            if (card.src === choiceOne.src){ 
              return {...card, matched: true}
            }else 
            return card
          }) 
        }) 
        resetTurn() 
      // if cards do not match, reset after 500ms delay 
      } else { 
        setTimeout(() => resetTurn(), 500) 
      }
    }
  }, [choiceOne, choiceTwo])


  //Resets card choice and increment number of turns 
  const resetTurn = () => { 
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurns => prevTurns + 1) 
  }

  return (
    <div className="CardMemoryGame">
      <h1> Goosey Guess </h1>
      <button 
        onClick={shuffleCards}>New Game
      </button>

      <div className="card-grid"> 
        {cards.map(card => (
          <SingleCard
            //SingleCard function props  
            key={card.id} 
            card={card}
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
          /> 
        ))} 
        </div>
    </div>
  );
}

//exporting CardMemoryGame component 
export default CardMemoryGame; 