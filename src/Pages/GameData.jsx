import { useParams } from "react-router-dom";
import Layout from "../Layout/Layout"
import { useEffect, useState } from "react";
import { client } from "../lib/sanity";
import ReactPlayer from 'react-player'

const GameData = () => {

    const { uniqueId } = useParams();

    const query = `*[_type == "games" && _id == "${uniqueId}" ]
    { gameName, releaseDate, gamePrice, gameLink, genre->{gameGenre}, "imgUrl": gameImage.asset->url }`

    const [special, setSpecial] = useState([])

    const [loading, setloading] = useState();

    async function getSpecialGames() {

        setloading(true)

        const specialGame = await client.fetch(query)

        setloading(false)

        return setSpecial(specialGame[0])

    }

    useEffect(() => {

        getSpecialGames()

    }, []);

    const { gameName, releaseDate, gamePrice, gameLink, gameGenre, imgUrl } = special


    return (
        <Layout title="Buy Now" >
            <div>
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:flex-row">
                        <img src={imgUrl} className="max-w-xl rounded-lg shadow-2xl" />
                        <div>
                            <h1 className="text-5xl font-bold"> {gameName} </h1>
                            <h3 className="pt-6" > {gamePrice} </h3>
                            <h3 className="pt-6" > {releaseDate} </h3>
                            <h3 className="pt-6" > {gameGenre} </h3>
                            <p className="py-6" >This is a game that gives you a great access to the future roleplay opportunities and lets you indulge into the upcoming years before time</p>
                            {/* You can open the modal using document.getElementById('ID').showModal() method */}
                            <button className="btn" onClick={() => document.getElementById('my_modal_4').showModal()}>Game Trailer</button>

                            {/* *************************** Modal Part Starts Here ***************************** */}

                            <dialog id="my_modal_4" className="modal">
                                <div className="modal-box w-11/12 max-w-2xl">
                                    <ReactPlayer width={620} url={gameLink} />
                                    <div className="modal-action">
                                        <form method="dialog">
                                            {/* if there is a button, it will close the modal */}
                                            <button className="btn">Close</button>
                                        </form>
                                    </div>
                                </div>
                            </dialog>

                            {/* *************************** Modal Part Starts Here ***************************** */}

                            <button className="btn btn-primary ms-5"> Get It Now </button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default GameData