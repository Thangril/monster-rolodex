import Card from "../card/card.component";
import './card-list.style.css';

// Destructering inside the parameter
const CardList = ({ monsters}) => ( 
    <div className="card-list">
        {monsters.map(monster => {                        
            return <Card monster={monster}></Card>       
        })}
    </div>
    );
    


export default CardList;