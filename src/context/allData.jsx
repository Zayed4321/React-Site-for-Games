import { useContext, useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { client } from '../lib/sanity';
import { toast } from 'react-toastify';

export const gameContext = createContext();


// uses GROQ to query content: https://www.sanity.io/docs/groq

export function GetGames({ children }) {

    const [game, setGame] = useState([]);

    const [genre, setGenre] = useState([]);

    const [loading, setloading] = useState();


    async function getAllGenre() {

        setloading(true)

        const genre = await client.fetch('*[_type == "genre"]{ gameGenre, _id, "greImg": genreImg.asset->url}')

        setloading(false)

        return setGenre(genre)

    }

    async function getAllGames() {

        setloading(true)

        const games = await client.fetch('*[_type == "games"]{ _id, "imgUrl": gameImage.asset->url, gameName, gamePrice, genre->{gameGenre}, Rating, gameLink, releaseDate }')

        setloading(false)

        return setGame(games)

    }

    // Function to Get hold of the input field for the search bar

    function getUserInput(event) {
        const searchValue = event.target.value
        getUserGame(searchValue);

    }

    // Function to Call the gameData as per the search of user but this will not be called elsewhere but inside getUserInput

    async function getUserGame(userInput) {

        const query2 = `*[_type == "games" && ( gameName match "${userInput}*" ) ]{ _id, "imgUrl": gameImage.asset->url, gameName }`

        const matching = await client.fetch(query2)

        setGame(matching)

    }

    // Function to Get hold of the input field for the Genre Part

    function getGenreInput(event) {
        const searchValue2 = event.target.value
        getUserGenre(searchValue2);
    }

    async function getUserGenre(userInput2) {

        const query3 = `*[_type == 'games' && genre._ref in *[_type == 'genre' && gameGenre == '${userInput2}'  ]._id]{ gameName }`

        const genreMatching = await client.fetch(query3)

        setGame(genreMatching)

    }

    // The perfect function to subscribe for each game 

    const [purchase, setPurchase] = useState([]);

    console.log("All Booking", purchase)

    function gameSubscription(purchaseQuantity) {

        // We are using spread operators here in this part

        setPurchase([...purchase, purchaseQuantity])
        toast("Congratulations! Game has been booked "), {
            position: "bottom-left",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: 1,
            theme: "light",
            }
    }



    useEffect(() => {

        getAllGames(),
        getAllGenre()

    }, []);

    return <gameContext.Provider value={{ game, genre, loading, purchase, getUserInput, getGenreInput, gameSubscription }} >
        {children}
    </gameContext.Provider>
}

export function useGameContext() {

    return useContext(gameContext);
}
