import pic1 from '../assets/CyberPunk.jpg'
import { NavLink } from 'react-router-dom';

const GameCard = ( {cardInfo} ) => {

    const { gameName, imgUrl, _id } = cardInfo

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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GameCard