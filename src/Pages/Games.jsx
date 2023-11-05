import Layout from "../Layout/Layout"
import GameCard from "../components/GameCard"
import { useGameContext } from "../context/allData"

const Games = () => {

  const { game } = useGameContext();

  return (
    <Layout title={"Games"} >
      <div>
        <div className="container mx-auto" >

          <div className="text-center mt-5" >
            <h1 className="text-4xl font-bold text-neutral" > Find all Your Favourite Games Here </h1>
            <p> Get cheap rates and custom orders as we value our clients more </p>
          </div>

          <div className="justify-center flex mt-5" >
            <input type="Search" placeholder="Search here" className="input input-bordered me-16 w-[800px]" />
            <select className="select select-bordered w-full max-w-xs ms-30">
              <option disabled> Pick Your Category</option>
              <option>Han Solo</option>
              <option>Greedo</option>
            </select>
          </div>

          <div className="flex flex-wrap gap-5 justify-center mt-5" >

            {
              game.map( gm => <GameCard key={gm._id} cardInfo={gm} />)
            }

          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Games

