import { useContext, useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { client } from '../lib/sanity';

export const gameContext = createContext()


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

        const games = await client.fetch('*[_type == "games"]{ _id, "imgUrl": gameImage.asset->url, gameName }')

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
    
        const query2 = `*[_type == "games" && ( gameName match "${ userInput }*" ) ]{ _id, "imgUrl": gameImage.asset->url, gameName }`
            
        const matching = await client.fetch(query2)

        setGame(matching)
            
    }

    // Function to Get hold of the input field for the Genre Part

    function getGenreInput(event) {
        const searchValue2 = event.target.value
        // getUserGenre(searchValue2);
        console.log(searchValue2)
    }

    // async function getUserGenre(userInput2) {
    
    //     const query3 = `*[_type == 'games' && references('${ userInput2 }')]`
            
    //     const genreMatching = await client.fetch(query3)

    //     setGame(genreMatching)
            
    // }



    useEffect ( () => {

        getAllGames(),
        getAllGenre()
        

    }, [] );

    return <gameContext.Provider value={{game, genre, loading, getUserInput, getGenreInput}} >
        {children}
    </gameContext.Provider>
}

export function useGameContext(){
    
    return useContext(gameContext);
}
