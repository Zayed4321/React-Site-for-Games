import Layout from "../Layout/Layout";
import GameSlider from "../components/GameSlider";
import SectionTile from "../components/SectionTile";


const Home = () => {

  return (
    <Layout title={"Game Shop"} >

      <div>
        <GameSlider />
      </div>

      <div> <SectionTile mainTitle="Trending Games Right Now" subTitle="Select the best games that are on hype and enjoy" /> </div>
    </Layout>
  )
}

export default Home