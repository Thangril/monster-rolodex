import Card from "../card/card.component";
import { Monster } from "../../App";
import './card-list.style.css';

type CardListProps = {
    monsters: Monster[];
}

// Destructering inside the parameter
const CardList = ({ monsters}: CardListProps) => ( 
    <div className="card-list">
        {monsters.map(monster => {                        
            return <Card monster={monster}></Card>       
        })}
    </div>
    );
    


export default CardList;