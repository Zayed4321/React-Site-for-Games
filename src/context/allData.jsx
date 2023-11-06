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

        const genre = await client.fetch('*[_type == "genre"]{ _id, "greImg": genreImg.asset->url }')

        setloading(false)

        return setGenre(genre)
        
      }

    async function getAllGames() {

        setloading(true)

        const games = await client.fetch('*[_type == "games"]{ _id, "imgUrl": gameImage.asset->url, gameName }')

        setloading(false)

        return setGame(games)
        
      }

    useEffect ( () => {

        getAllGames(),
        getAllGenre()

    }, [] );

    return <gameContext.Provider value={{game, genre, loading}} >
        {children}
    </gameContext.Provider>
}

export function useGameContext(){
    
    return useContext(gameContext);
}
