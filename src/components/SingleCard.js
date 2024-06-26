//this function allows us to apply logic to each individual card 
import './SingleCard.css'

export default function SingleCard({card, handleChoice, flipped}) { 
    const handleClick = () => {
        //passing card into handleChoice 
        handleChoice(card)
    }

    return (
        <div className="card"> 
        <div className={flipped ? "flipped": ""}> 
          <img className="front" src={card.src} alt="card front" /> 
          <img 
            className="back" 
            src="/img/cover.png" 
            onClick={handleClick}
            alt="card back" />
        </div>
      </div>    
    )
}