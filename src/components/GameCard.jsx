import { NavLink } from 'react-router-dom';
import { useGameContext } from '../context/allData';

const GameCard = ( {cardInfo} ) => {

    const { gameName, imgUrl, _id } = cardInfo

    const { gameSubscription } = useGameContext();

    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={imgUrl} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{ gameName }</h2>
                    <p> Get into a year long roleplay game into the future that brings all the parts you may have wanted to play in reality </p>
                    <div className="card-actions justify-end">
                        <NavLink to={`/games/${_id}`} >
                            <button className="btn btn-primary">Know More</button>
                        </NavLink>
                        <button onClick={() => gameSubscription(cardInfo) } className="btn btn-accent">
                            <p>Add to Cart</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GameCard