import { useContext, useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { client } from '../lib/sanity';

export const gameContext = createContext()


// uses GROQ to query content: https://www.sanity.io/docs/groq

export function GetGames({ children }) {

    const [game, setGame] = useState([]);

    const [genre, setGenre] = useState([]);

    async function getAllGenre() {

        const genre = await client.fetch('*[_type == "genre"]{ _id, "greImg": genreImg.asset->url }')

        return setGenre(genre)
        
      }

    async function getAllGames() {

        const games = await client.fetch('*[_type == "games"]{ _id, "imgUrl": gameImage.asset->url, gameName }')

        return setGame(games)
        
      }

    useEffect ( () => {

        getAllGames(),
        getAllGenre()

    }, [] );

    return <gameContext.Provider value={{game, genre}} >
        {children}
    </gameContext.Provider>
}

export function useGameContext(){
    
    return useContext(gameContext);
}
