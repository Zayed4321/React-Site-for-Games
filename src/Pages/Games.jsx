import Layout from "../Layout/Layout"
import GameCard from "../components/GameCard"
import Loader from "../components/Loader";
import { useGameContext } from "../context/allData"

const Games = () => {

  const { game, genre, loading, getUserInput, getGenreInput, gameSubscription } = useGameContext();

  return (
    <Layout title={"Games"} >
      <div>
        <div className="container mx-auto" >

          <div className="text-center mt-5" >
            <h1 className="text-4xl font-bold text-neutral" > Find all Your Favourite Games Here </h1>
            <p> Get cheap rates and custom orders as we value our clients more </p>
          </div>

          <div className="justify-center flex mt-5" >
            <input onChange={getUserInput} type="Search" placeholder="Search here" className="input input-bordered me-16 w-[800px]" />
            <select onChange={getGenreInput} className="select select-bordered w-full max-w-xs ms-30">
              <option defaultValue={"selected"}  > Pick Your Category </option>

              {
                genre.map( gre => <option  key={gre._id} > { gre.gameGenre } </option> )
              }
              
            </select>
          </div>

          <div className="flex flex-wrap gap-5 justify-center mt-5" >

            {
              loading ? <Loader /> :
                <>
                  {
                    game.map(gm => <GameCard key={gm._id} cardInfo={gm} />)
                  }
                </>
            }

          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Games

